import HeaderContext from "context/HeaderContext";
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
} from "react";

export default function useHeader(
  options?: Partial<{ showOnFixed: boolean }>
): {
  element: ReactElement | null;
  setDisplayOnFixed: Dispatch<SetStateAction<boolean>>;
  displayOnFixed: boolean;
  setElement: Dispatch<SetStateAction<ReactElement | null>>;
} {
  const { element, setElement, setDisplayOnFixed, displayOnFixed } =
    useContext(HeaderContext);

  useEffect(() => {
    if (options?.showOnFixed) {
      setDisplayOnFixed(options.showOnFixed);
    }
  }, [options?.showOnFixed, setDisplayOnFixed]);

  return { element, setElement, setDisplayOnFixed, displayOnFixed };
}
