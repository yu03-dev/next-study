import styles from "./page.module.css";
import { Main } from "./_components/Main";
import { Header } from "./_components/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Main page="Index" />
    </main>
  );
}
