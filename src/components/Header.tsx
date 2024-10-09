import Link from 'next/link';
import styles from './Header.module.css';
import CartDropdown from './CartDropdown';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/"><Image src="/logo_pizza.png" alt="Logo de la pizzería" width={100} height={50} /></Link>
          </li>
          <li>
            <Link href="/products">Productos</Link>
          </li>
          <li>
            <CartDropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
