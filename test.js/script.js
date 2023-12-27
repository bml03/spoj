const products = [
  {
    id: 1,
    name: "mac",
    price: 123,
  },
  {
    id: 2,
    name: "iphone",
    price: 1234,
  },
  {
    id: 3,
    name: "tv",
    price: 23,
  },
  {
    id: 4,
    name: "samsung",
    price: 123,
  },
];
let newArr;
function removeProd(a) {
  const newArr = products.filter((object) => {
    return object.id !== a;
  });
  console.log(newArr);
}
removeProd(2);
