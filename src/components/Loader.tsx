import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";
import { processStore } from "store/process";
import StartPage from "./StarPage";

export interface Props {
  children: JSX.Element | JSX.Element[];
}

const Loader: FC<Props> = ({ children }) => {
  const [process, setProcess] = useRecoilState(processStore);

  useEffect(() => {
    setTimeout(() => {
      setProcess({ ...process, pcIsEnabled: true });
    }, 3000);
  }, []);

  return process.pcIsEnabled ? <>{children}</> : <StartPage />;
};

export default Loader;
