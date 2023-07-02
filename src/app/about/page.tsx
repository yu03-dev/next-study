import styles from "../page.module.css";
import { Description } from "../_components/Description";
import { Main } from "../_components/Main";

export default function About() {
  return (
    <main className={styles.main}>
      <Description>
        <code className={styles.code}>src/app/about/page.tsx</code>
      </Description>
      <Main page="about" />
    </main>
  );
}
