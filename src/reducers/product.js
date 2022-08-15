let initialState = [
  {
    id: 1,
    photo:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf6967.jpg?v=1657868053747",
    name: "Atom 1192",
    description: "Sản phẩm do Atom sản xuất",
    price: 999,
    inventory: 20,
  },
  {
    id: 2,
    photo:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf4855.jpg?v=1655876055783",
    name: "Atom m177",
    description: "Sản phẩm do Atom sản xuất",
    price: 1400,
    inventory: 10,
  },
  {
    id: 3,
    photo:
      "https://bizweb.dktcdn.net/thumb/1024x1024/100/292/624/products/dscf4826.jpg?v=1658989374073",
    name: "Atom 7749",
    description: "Sản phẩm do Atom sản xuất",
    price: 1299,
    inventory: 5,
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default product;
