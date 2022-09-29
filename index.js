const fs = require('fs');
const fetch = require('node-fetch');

const getInputAsString = (inputFile) => {
  const fileBuffer = fs.readFileSync(inputFile);
  return fileBuffer.toString();
};

const getUrl = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const main = async (inputFile = './input.txt', url = 'https://dummyjson.com/products') => {
  try {
    // const input = getInputAsString(inputFile);
    // console.log(`Input content => ${input}`);

    // const apiResponse = await getUrl(url);
    // console.log(apiResponse);

  } catch (error) {
    console.log(error);
  }
};

main();
