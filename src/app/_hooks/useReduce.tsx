import { useCallback, useState } from "react";
import { ITEM } from "../_components/Main";

export const useReduce = (initLinks: ITEM[]) => {
  const [links, setLinks] = useState<ITEM[]>(initLinks);

  const handleReduce = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setLinks((prevLinks: ITEM[]) => {
      return prevLinks.slice(0, prevLinks.length - 1);
    });
  }, []);

  return { links, handleReduce };
};
