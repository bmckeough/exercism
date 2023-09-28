let d = '';
let transposed;
console.log(`d: ${d}`);
transposed = d.reduce((columns, row) => {
  console.log(`columns: ${columns} row: ${row}`);
  let map_result = row.map((elem, i) => {
    console.log(`elem: ${elem} i: ${i}`);
    console.log(`columns[i]: ${columns[i]}`);
    console.log(`row[i]: ${row[i]}`);
    console.log(`[...(columns[i] || []), row[i]]: ${[...(columns[i] || []), row[i]]}`);
    return [...(columns[i] || []), row[i]]
  });
  console.log(`map_result: ${JSON.stringify(map_result)}`);
  return map_result;
}, []);
