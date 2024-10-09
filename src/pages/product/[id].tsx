import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from '../../components/Button';

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

  const handleAddToCart = () => {
    // Lógica para agregar al carrito
    console.log('Agregar al carrito');
  };

  return (
    <Layout>
      <h1>Producto {id}</h1>
      <div className="product-container">
        <Image src={product.image} alt={product.name} width={300} height={200} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <Button onClick={handleAddToCart}>Agregar al carrito</Button>
      </div>
    </Layout>
  );
};

export default ProductPage;
