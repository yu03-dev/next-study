import { useReduce } from "@/app/_hooks/useReduce";
import styles from "./Title.module.css";
import { MouseEventHandler } from "react";

export function Title(props: {
  page: string;
  handleReduce: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <button onClick={props.handleReduce}>Reduce</button>
    </div>
  );
}
