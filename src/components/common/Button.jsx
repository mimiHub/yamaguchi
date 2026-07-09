import styles from "./Button.module.css";

function Button({
  onClick,
  children,
  variant = "primary",
  fullWidth = false,
  size = "md",
  className = "",
}) {
  const combinedClassName = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    fullWidth ? styles.fullWidth : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
