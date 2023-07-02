import styles from "./Title.module.css";

export default function Title(props: { page: string }) {
  return <h1 className={styles.title}>{props.page} page</h1>;
}
