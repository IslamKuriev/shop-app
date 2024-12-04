import { useDispatch, useSelector } from 'react-redux';
import { addToCart, Product } from '../../features/shopSlice';
import styles from './products.module.css';
import { RootState } from '../../app/store';

const ProductC = ({ id, image, name, price, discount, left }: Product) => {
  // const products = useSelector((state: RootState) => state.products)
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const finderTruth = cartItems.find((c) => c.productId === id);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!finderTruth) {
      dispatch(
        addToCart({
          id: cartItems.length + 1,
          productId: id,
          amount: 1,
        }),
      );
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <img src={image} alt="Картинка" />
        </div>
        <div className={styles.price}>
          <h4>{discount ? price - (price / 100) * discount : price}</h4>
          <s>{discount ? price : ''}</s>
        </div>
        <div className={styles.name}>{name}</div>
        <button className={styles.btnAdd} disabled={!left} onClick={handleAddToCart}>
          {finderTruth ? 'Уже в корзине' : !left ? 'Нет в наличии' : 'Добавить в корзину'}
        </button>
      </div>
    </div>
  );
};

export default ProductC;
