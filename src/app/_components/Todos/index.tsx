"use client";

import styles from "./Todos.module.css";
import { useTodos } from "@/app/_hooks/useTodos";

export function Todos() {
  const { text, todos, handleChange, handleAdd } = useTodos();

  return (
    <div className={styles.container}>
      <div>
        <h1>Todo List</h1>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
      </div>
      <ul>
        {todos.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
