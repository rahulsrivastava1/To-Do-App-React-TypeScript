import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <p className={styles.navbar_brand}>To Do App</p>
    </div>
  );
};

export default Navbar;
