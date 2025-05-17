import { type ReactNode } from "react";

export const Header = ({ children }: { children: ReactNode }) => {
  return <h2>{children}</h2>;
};
