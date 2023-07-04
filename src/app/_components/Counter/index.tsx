"use client";

import styles from "./Counter.module.css";
import { useCounter } from "@/app/_hooks/useCounter";
import { useChangeBgColor } from "@/app/_hooks/useChangeBgColor";

export function Counter() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  useChangeBgColor();

  return (
    <div className={styles.container}>
      {isShow ? <h1>{count}</h1> : null}
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={handleClick}>
          カウントアップ
        </button>
        <button className={styles.btn} onClick={handleDisplay}>
          {isShow ? "非表示" : "表示"}
        </button>
      </div>
    </div>
  );
}
