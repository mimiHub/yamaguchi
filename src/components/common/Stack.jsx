import styles from "./Stack.module.css";

function Stack({
  children,
  direction = "row",
  gap = "sm",
  align = "center",
  justify = "start",
  wrap = false,
  mt,
  mb,
  className = "", // ← 이 prop이 있는지 확인
}) {
  const combinedClassName = [
    styles.stack,
    styles[`direction_${direction}`],
    styles[`gap_${gap}`],
    styles[`align_${align}`],
    styles[`justify_${justify}`],
    wrap ? styles.wrap : "",
    mt ? styles[`mt_${mt}`] : "",
    mb ? styles[`mb_${mb}`] : "",
    className, // ← 외부에서 넘어온 클래스도 합쳐줌
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={combinedClassName}>{children}</div>;
}

export default Stack;
