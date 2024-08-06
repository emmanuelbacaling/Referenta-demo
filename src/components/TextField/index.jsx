const TextField = (props) => {
  const {
    label,
    type,
    placeholder,
    onChange,
    value,
    inputStyle,
    labelStyle,
    fieldStyle,
    name
  } = props || "";
  return (
    <div style={fieldStyle} className="h-auto w-full">
      <p style={labelStyle}>{label}</p>
      {type !== "textarea" ? (
        <>
          <input
            className="h-10 px-2 w-full bg-disabled rounded-lg"
            style={inputStyle}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </>
      ) : (
        <textarea
          onChange={onChange}
          name={name}
          className="h-32 px-3 py-2 w-full bg-disabled rounded-lg"
        />
      )}
    </div>
  );
};

export default TextField;
