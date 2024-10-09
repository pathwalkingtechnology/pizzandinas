import styles from './ProductCard.module.css';
import Button from './Button';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) { // Verifica que product no sea null o undefined
      addToCart(product, quantity);
    } else {
      console.error('Producto no encontrado');
    }
  };

  return (
    <div className={styles.card}>
      <h3>{product?.name}</h3>
      <p>${product?.price}</p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;
