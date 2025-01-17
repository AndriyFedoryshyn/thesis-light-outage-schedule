import { FC, ReactNode } from "react";

import styles from "./Main.module.scss";

type MainProps = {
  children: ReactNode;
};

export const Main: FC<MainProps> = ({ children }) => {
  return <main className={styles["main"]}>{children}</main>;
};
