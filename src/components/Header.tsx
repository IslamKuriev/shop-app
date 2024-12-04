import { Link } from 'react-router-dom';
// import Cart from "./Cart";
import bagIcon from 'bootstrap-icons/icons/bag.svg';
import styles from './Cart/cart.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cartItems);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Intocode Coding Shopcamp
        </Link>
        {/* <Cart /> */}
        <div className={styles.cartButton}>
          <Link to={`/cart`}>
            <img src={bagIcon} alt="" />
          </Link>
          <span>{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
