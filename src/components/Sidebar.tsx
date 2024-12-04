import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';

const Sidebar = () => {
  const products = useSelector((state: RootState) => state.categories);
  return (
    <ul>
      {products.map((product) => {
        return (
          <Link key={product.id} className="link" to={`/category/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Sidebar;
