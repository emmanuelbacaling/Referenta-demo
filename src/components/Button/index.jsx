const Button = (props) => {
  const { style, children, color, onClick, isLoading } = props || "";

  return (
    <button
      onClick={onClick}
      style={style}
      disabled={isLoading}
      className={`w-auto bg-${
        isLoading ? "disabled" : color
      } py-2 px-2 rounded-lg text-white`}
    >
      {isLoading ? "Processing..." : children}
    </button>
  );
};

export default Button;
