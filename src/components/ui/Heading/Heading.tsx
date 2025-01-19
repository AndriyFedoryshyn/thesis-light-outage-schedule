import { FC, HTMLProps, JSX, ReactNode } from "react";

interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
  children: ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: string;
}

export const Heading: FC<HeadingProps> = ({ children, level, className }) => {
  const HeadingElement = level as keyof JSX.IntrinsicElements;

  return <HeadingElement className={className}>{children}</HeadingElement>;
};
