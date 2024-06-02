import { css } from "@styled-system/css";
import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: IButtonProps) => {
  return (
    <button
      className={css({
        bg: "red.300",
        fontFamily: "Inter",
        px: "4",
        py: "3",
        borderRadius: "md",
        _hover: { bg: "red.400" },
      })}
    >
      {children}
    </button>
  );
};