const Button = (props) => {
  const { style, children, color, onClick } = props || "";

  return (
    <button
      onClick={onClick}
      style={style}
      className={`w-auto bg-${color} py-2 px-2 rounded-lg text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
