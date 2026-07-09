function PaginationArrow({ direction = "left" }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: direction === "right" ? "rotate(180deg)" : "none",
      }}
    >
      <path
        d="M7 1L2 5L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PaginationArrow;
