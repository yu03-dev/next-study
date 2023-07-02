import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <span className={styles.span}>Index</span>
      </Link>
      <Link href="/about">
        <span className={styles.span}>About</span>
      </Link>
    </header>
  );
}
