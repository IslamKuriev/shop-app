import { Product } from '../features/shopSlice';

export const printPrice = (product: Product): JSX.Element => {
  const { price, discount } = product;

  if (!discount) {
    return <h4>{price} ₽</h4>;
  } else {
    return <h4>{(price / 100) * discount}</h4>;
  }
};
