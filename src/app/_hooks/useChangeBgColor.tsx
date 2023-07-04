import { useEffect } from "react";

export const useChangeBgColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";

    // 第二引数の値が変化したときに以下がまず先に呼ばれる
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
