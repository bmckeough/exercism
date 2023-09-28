// Returns an Array of numbers starting at startAt with length of size
const range = (size, startAt) => Array.from(new Array(size), (x, i) => i + startAt);

// Returns an Array of characters from startChar to endChar
const characterRange = (startChar, endChar) => {
  const startCode = startChar.charCodeAt(0);
  const endCode = endChar.charCodeAt(0);
  const size = endCode - startCode;
  const codeRange = range(size, startCode);
  return [...String.fromCharCode(...codeRange)];
}

// all letters of the lower case asciii alphabet could also be done with
// const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const alphabet = characterRange('a', 'z');

export const isPangram = (sentence) => {
  if (!sentence) return false;

  sentence = sentence.toLowerCase();
  return alphabet.every((letter) => sentence.includes(letter));
};

// https://exercism.org/tracks/javascript/exercises/pangram/solutions/mbbentley
// provides a solution of replacing all characters that are not a-z with blanks
// converting the result to a set (so each a-z is one entry and there is at most one blank)
// and checking the length. I include a note on that here, becuase it is a very different
// solution
