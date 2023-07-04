import { Header } from "../_components/Header";
import { Counter } from "../_components/Counter";
import styles from "../page.module.css";

export default function Todo() {
  return (
    <main className={styles.main}>
      <Header />
      <Counter />
    </main>
  );
}
