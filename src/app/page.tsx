import Home from "./components/Home";
import Navbar from "./components/Navbar";
import styles from "./page.module.scss";

export default function MainSite() {
  return (
    <div className={styles.mainContainer}>
      <Navbar/>
      <Home/>
    </div>
  );
}


