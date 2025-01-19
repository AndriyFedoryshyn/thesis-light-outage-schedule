import { HTMLProps, ReactNode, type FC } from "react";

interface DivProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className: string;
}

export const Div: FC<DivProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
