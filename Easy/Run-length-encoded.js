function lengthEncoded(string, count = 0) {
  let output = "";
  let currChar = string[0];

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== currChar || count === 9) {
      output += `${count}${currChar}`;
      currChar = string[i];
      count = 1;
    } else count++;
  }

  return output + count + currChar;
}

console.log(lengthEncoded("AABBAA"));
console.log(lengthEncoded("ABABABAB"));
console.log(lengthEncoded("AAAAAAAAAAAAABBCCCCDD"));
console.log(lengthEncoded("122333"));
console.log(
  lengthEncoded("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA")
);
