import styles from "./page.module.css";
import { Description } from "./_components/Description";
import { Main } from "./_components/Main";

export default function Home() {
  return (
    <main className={styles.main}>
      <Description>
        <code className={styles.code}>src/app/page.tsx</code>
      </Description>
      <Main page="index" />
    </main>
  );
}
