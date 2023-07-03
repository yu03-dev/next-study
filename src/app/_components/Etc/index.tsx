"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Etc.module.css";

export function Etc() {
  const [count, setCount] = useState<number>(1);
  const [text, setText] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(true);

  // useCallbackはTodoコンポーネントの再レンダリングの度に生成されるのを防ぐ役割
  // countは更新されるがhandleClick内の値は更新されない
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(count);
      setCount((prevCount) => prevCount + 1);
    },
    [count]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsShow((b: boolean) => !b);
    },
    []
  );

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // 第二引数の値が変化したときに以下がまず先に呼ばれる
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [count]);

  return (
    <div className={styles.container}>
      {isShow ? <h1>{count}</h1> : null}
      <div className={styles.btn}>
        <button onClick={handleClick}>ボタン</button>
        <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      </div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
