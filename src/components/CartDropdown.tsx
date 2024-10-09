// components/CartDropdown.tsx
import styles from './CartDropdown.module.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

const CartDropdown = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.dropdown}>
      <h2>Carrito</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} x {product.quantity}
            <button onClick={() => removeFromCart(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Link href="/checkout">
      <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default CartDropdown;
