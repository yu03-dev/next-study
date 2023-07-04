import styles from "./Links.module.css";
import { ITEM } from "../Main";

export function Links(props: { items: ITEM[] }) {
  return (
    <div className={styles.grid}>
      {props.items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {item.title} <span>-&gt;</span>
            </h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
