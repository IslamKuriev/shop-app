import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './products.module.css';
import Product from './Product';
import { RootState } from '../../app/store';

const Products = (): JSX.Element => {
  const { categoryId } = useParams(); // получаем id из роута

  const products = useSelector((state: RootState) =>
    state.products.filter((product) => {
      if (!categoryId) return true;

      return product.categoryId === Number(categoryId);
    }),
  ); // получаем и сразу фильтруем продукты по категориям

  return (
    <div className={styles.products}>
      {products.map((product) => {
        return <Product key={product.id} {...product} /* другие необходимые пропсы */ />;
      })}
    </div>
  );
};

export default Products;
