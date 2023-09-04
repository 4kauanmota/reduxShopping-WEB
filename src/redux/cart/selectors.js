export const selectProductsCounts = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, cur) => acc + cur.quantity,
    0
  );
};

export const selectProductsPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
};
