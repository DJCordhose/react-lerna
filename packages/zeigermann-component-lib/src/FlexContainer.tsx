import React from "react";

import styles from "./FlexContainer.module.css";

import type { PropsWithChildren } from "react";


type Props = PropsWithChildren<{
  center?: boolean;
}>;

export function FlexContainer({ children, center = false }: Props) {
  return (
    <div
      className={`
      ${styles.button}
      flex ${
        center ? "justify-center" : "justify-between"
      } border-gray-900 border-2 m-2 overflow-hidden`}
    >
      {children}
    </div>
  );
}
