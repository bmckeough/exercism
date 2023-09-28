const group_price = new Map();
group_price.set(1, 800);
group_price.set(2, 1520); // 5% discount on 2 books
group_price.set(3, 2160); // 10% discount on 3 books
group_price.set(4, 2560); // 20% discount on 4 books
group_price.set(5, 3000); // 25% discount on 5 books
 
function optimize(groups) {
  // account for two groups of four being cheaper than
  // a group of three and a group of five
  while (groups.includes(3) && groups.includes(5)) {
    groups.splice(groups.indexOf(3), 1);
    groups.splice(groups.indexOf(5), 1);
    groups.push(4, 4);
  }

  return groups;
};

function grouper(books) {
  const groups = [];
  while (books.length > 0) {
    const group = new Set(books);
    groups.push(group.size);
    // remove the books in this group from the list of books to group
    group.forEach((bookNum) => {
      books.splice(books.indexOf(bookNum), 1)
    });
  };

  return groups;
};

function totaller(total, group) {
  return total + group_price.get(group);
};

export const cost = (books) => {
  const groups = grouper(books);
  optimize(groups);

  return groups.reduce(totaller, 0);
};
