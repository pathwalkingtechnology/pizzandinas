import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../components/Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Simulación de datos de producto
  const product = {
    id: 1,
    name: 'Producto 1',
    price: 10.99,
    image: 'https://via.placeholder.com/200x150',
  };

  const { addToCart } = useContext(CartContext); // Cambia a addToCart

  const handleAddToCart = () => {
    addToCart(product); // Asegúrate de que product no sea undefined
  };

  return (
    <Layout>
      <h1>Producto {id}</h1>
      <div className="product-container">
        <Image src={product.image} alt={product.name} width={300} height={200} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <Button product={product} onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </div>
    </Layout>
  );
};

export default ProductPage;
