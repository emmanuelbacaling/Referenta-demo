const Select = (props) => {
  const { label, onChange, inputStyle, labelStyle, fieldStyle, name } =
    props || "";
  const { children } = props || [];
  return (
    <div style={fieldStyle} className="h-auto w-full">
      <p style={labelStyle}>{label}</p>
      <select
        name={name}
        style={inputStyle}
        onChange={onChange}
        className="h-10 px-2 w-full bg-disabled rounded-lg"
      >
        {children?.map((e, k) => {
          return <option key={k}>{e.props.children}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
