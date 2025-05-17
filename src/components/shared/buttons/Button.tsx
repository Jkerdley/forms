import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "submit" | "reset";
  className: string;
}

export const Button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};
