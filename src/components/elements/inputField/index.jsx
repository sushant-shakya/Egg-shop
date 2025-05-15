import "./style.css";

const InputField = ({
  type,
  label,
  showLabel,
  showplaceholder = false,
  name = "",
  formData = {},
  setFormData = () => {},
}) => {
  const onChangeInput = (e) => {
    setFormData({ ...formData, [name]: e.target.value });
  };
  return (
    <div>
      {showLabel && <label>{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={showplaceholder ? label : ""}
        value={formData[name]}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default InputField;
