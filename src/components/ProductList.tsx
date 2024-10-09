// components/ProductList.tsx
import styles from './ProductList.module.css';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Pizza Margarita', price: 10.99 },
  { id: 2, name: 'Pizza Cuatro Quesos', price: 12.99 },
  { id: 3, name: 'Pizza Prosciutto', price: 11.99 },
  // ...
];

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h2>Productos</h2>
      <ul className={styles.list}>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
