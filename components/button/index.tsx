import React from "react";
import Styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  loadingMessage?: string;
  isDisabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  className,
  variant,
  isLoading,
  loadingMessage,
  onClick,
}: Props) {
  const stylesPrimary =
    variant === "secondary" ? Styles.secondary : Styles.primary;

  return (
    <>
      <button className={`${className} ${stylesPrimary}`} onClick={onClick}>
        {isLoading ? (
          <div className="flex items-center justify-center">
            <IconLoader />
            <div className="">{loadingMessage}</div>
          </div>
        ) : (
          children
        )}
      </button>
    </>
  );
}

const IconLoader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
);
