import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState<number>(1);
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

  const handleDisplay = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsShow((b: boolean) => !b);
    },
    []
  );

  return { count, isShow, handleClick, handleDisplay };
};
