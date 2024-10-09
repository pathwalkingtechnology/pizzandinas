import { useContext, useState } from 'react';
import Layout from '../components/Layout';
import { CartContext } from '../context/CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('delivery');
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  const handleFinalizePurchase = () => {
    const mensaje = `Nombre: ${nombre}\nTeléfono: ${telefono}\nDirección: ${direccion}\nPedido: ${cart.map((product) => `${product.name} - $${product.price}`).join(', ')}`;
    const url = `https://wa.me/5493764617711?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    clearCart();
    alert('Compra finalizada con éxito');
  };

  return (
    <Layout>
      <h1>Finalizar compra</h1>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
        <option value="delivery">Pagar al delivery</option>
        <option value="local">Retirar y pagar en el local</option>
      </select>
      <p>
        {paymentMethod === 'delivery' ? 'El pago se realizará al recibir su pedido.' : 'Por favor, pase por nuestro local para retirar su pedido y realizar el pago.'}
      </p>
      <form>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br />
        <label>Teléfono:</label>
        <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <br />
        <label>Dirección:</label>
        <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        <br />
        <button onClick={handleFinalizePurchase}>
          Finalizar compra
        </button>
      </form>
    </Layout>
  );
};

export default CheckoutPage;
