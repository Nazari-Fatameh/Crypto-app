import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>| React.js </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>
          Developed by{" "}
          <a href="https://github.com/Nazari-Fatameh">Fatemeh Nazari</a>
        </p>
      </footer>
    </>
  );
}

export default Layout;
