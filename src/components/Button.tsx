import styled from 'styled-components';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';



const Button = ({ product, onClick }) => {
  const { addToCart } = useContext(CartContext); // Cambia a addToCart

  const handleAddToCart = () => {
    addToCart(product); 
    onClick();
  };

  return (
    <button onClick={handleAddToCart}>Agregar al carrito</button>
  );
};

export default Button;
