import styles from "../page.module.css";
import { Description } from "../_components/Description";
import { Links } from "../_components/Links";
import Title from "../_components/Title";

export default function About() {
  return (
    <main className={styles.main}>
      <Description page="/about" />
      <Title page="about" />
      <Links />
    </main>
  );
}
