"use client";

import { type FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

import styles from "./Wrapper.module.scss";

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={styles["wrapper"]}>{children}</div>;
};
