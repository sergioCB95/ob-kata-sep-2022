const fs = require('fs');

const getInputAsString = (inputFile) => {
  const fileBuffer = fs.readFileSync(inputFile);
  return fileBuffer.toString();
};

const main = (inputFile = './input.txt') => {
  const input = getInputAsString(inputFile);
  console.log(`Input content => ${input}`);
};

main();
