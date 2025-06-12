const fs = require("fs/promises");
const path = require("path");

const products = path.resolve("resource", "products.json");
const summary = path.resolve("resource", "summary.json");

// console.log(products);
// console.log(summary);

const getFile1 = (file) => {
  fs.readFile(file, "utf8")
    .then((result) => {
      // console.log(result);
      return result;
    })
    .then(console.log);
};
const getFile2 = (file) => {
  return fs.readFile(file, "utf8");
};
const getFile3 = (file) => fs.readFile(file, "utf8");

// getFile1(products);
// getFile2(products).then((data) => console.log(data));
// getFile3(products).then((data) => console.log(data));

getFile3(products)
  .then((result) => {
    const product = JSON.parse(result);
    let countClothes = 0;
    let countShoes = 0;
    let countOthers = 0;
    let countCamilo = 0;
    let countElectronics = 0;
    product.forEach((item) => {
      if (item.category.name === "Clothes") countClothes++;
      if (item.category.name === "Shoes") countShoes++;
      if (item.category.name === "Others") countOthers++;
      if (item.category.name === "Camilo") countCamilo++;
      if (item.category.name === "Electronics") countElectronics++;
    });
    const summaryObj = {
      all: product.length,
      Clothes: countClothes,
      Shoes: countShoes,
      Others: countOthers,
      Camilo: countCamilo,
      Electronics: countElectronics,
    };
    return JSON.stringify(summaryObj);
  })
  .then((summaryStr) => fs.writeFile("summary.json", summaryStr))
  .then(() => console.log("success"));
