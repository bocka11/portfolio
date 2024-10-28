export const CustomInput = (props: {
  type: string;
  placeholder: string;
  label: string;
  name: string;
}) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <label
        style={{ fontSize: "16px", color: "#999999", marginBottom: "5px" }}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        className="placeholder-opacity-10"
        style={{
          border: "none",
          outline: "none",
          padding: "8px 0",
          fontSize: "14px",
          color: "#999999",
          backgroundColor: "transparent",
        }}
      />
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "gray",
          marginTop: "5px",
        }}
      ></div>
    </div>
  );
};

export default CustomInput;
