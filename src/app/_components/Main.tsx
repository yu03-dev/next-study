import { Description } from "./Description";
import { Links } from "./Links";
import { Title } from "./Title";
import styles from "./Main.module.css";

export function Main(props: { page: string }) {
  return (
    <div className={styles.main}>
      <Description>
        <code className={styles.code}>src/app/page.tsx</code>
      </Description>
      <Title page={props.page} />
      <Links />
    </div>
  );
}
