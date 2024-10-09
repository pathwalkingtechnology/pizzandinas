import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';

const Cart = () => {
  const { cart } = useContext(CartContext);

 return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <Link href="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
