import { useCallback, useState } from "react";

export const useTodos = () => {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください。");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setTodos((prevTodos) => {
        if (prevTodos.some((item) => item === text)) {
          alert("すでに同じ要素が存在します。");
          return prevTodos;
        }
        return [...prevTodos, text];
      });
    },
    [text]
  );

  return { text, todos, handleChange, handleAdd };
};
