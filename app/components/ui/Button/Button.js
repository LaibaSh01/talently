import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "dark", // dark | primary
  fullWidth = false,
  className = "",
  ...props
}) {
  return (
    <button
      className={`
        ${styles.btn}
        ${variant === "primary" ? styles.primary : ""}
        ${fullWidth ? styles.fullWidth : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
