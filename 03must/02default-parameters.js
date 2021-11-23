function getItems(url, offset = 0, limit = 10, orderBy = "date") {
  return url;
}

const getItemsA = (url, offset = 0, limit = 10, orderBy = "date") => {};

const add = (a, b = 0) => a + b;

function addA(a, b) {
  b = b === undefined ? 0 : b;
  return a + b;
}
console.log(getItems());
console.log(getItemsA());
console.log(add(1));
console.log(addA(1));
