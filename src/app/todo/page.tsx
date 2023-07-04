import { Header } from "../_components/Header";
import { Todos } from "../_components/Todos";
import styles from "../page.module.css";

export default function Todo() {
  return (
    <main className={styles.main}>
      <Header />
      {/* <Etc /> */}
      <Todos />
    </main>
  );
}
