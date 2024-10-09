import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 Duende</p>
      <ul>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <a href="#">Acerca de nosotros</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
