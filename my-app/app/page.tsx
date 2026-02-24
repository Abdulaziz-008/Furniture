import Navigation from "./components/Navigation";
import Section from "./components/Section";
import Pictures from "./components/Pictures";
import Footer from "./components/Footer";
import styles from './style.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <Navigation/>
      <Section/>
      <Pictures/>
      <Footer/>
    </div>
  );
}
