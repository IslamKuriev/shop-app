import styles from './cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { cartElementDec, cartElementInc, cartRemoveElement } from '../../features/shopSlice';

const Cart = () => {
  const products = useSelector((state: RootState) => state.products);
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleExit = () => {
    navigate('/');
  };

  const handleInc = (productId: number, left: number) => {
    dispatch(
      cartElementInc({
        productId: productId,
        left: left,
      }),
    );
  };

  const handleDec = (productId: number, amount: number) => {
    if (amount > 1) {
      dispatch(
        cartElementDec({
          productId: productId,
          amount: amount,
        }),
      );
    }
  };
  const handleRemove = (productId: number) => {
    dispatch(cartRemoveElement(productId));
  };

  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Корзина</h2>
      <button className={styles.btnExit} onClick={handleExit}>
        <img style={{ width: '30px' }} src="../public/exit.svg" alt="" />
      </button>
      <div className={styles.cartMain}>
        <div className={styles.cartHead}>
          <span>#</span>
          <div>Товар</div>
          <div style={{ marginLeft: '80px' }}>Остаток</div>
          <div>Кол-во</div>
        </div>
        <div className={styles.cartElements}>
          {cartItems.length ? (
            cartItems.map((c) => {
              return products.map((product) => {
                if (product.id === c.productId) {
                  return (
                    <div className={styles.cartElement} key={product.id}>
                      <div className={styles.cartInfo}>
                        <div>{c.id}</div>
                        <img style={{ width: '35px', height: '35px' }} src={product.image} alt="" />
                        <div>{product.name}</div>
                      </div>
                      <div className={styles.cartLeft}>
                        <div>{product.left}</div>
                        <button onClick={() => handleInc(product.id, product.left)}>+</button>
                        <div>{c.amount}</div>
                        <button onClick={() => handleDec(product.id, c.amount)}>-</button>
                        <button
                          style={{ background: 'none', border: 'none' }}
                          onClick={() => handleRemove(product.id)}>
                          <img style={{ width: '20px' }} src="../public/delete.svg" alt="Удалить" />
                        </button>
                      </div>
                    </div>
                  );
                }
              });
            })
          ) : (
            <div style={{ padding: '10px', fontSize: '18px' }}>
              Тут пусто. Добавьте товар в корзину
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
