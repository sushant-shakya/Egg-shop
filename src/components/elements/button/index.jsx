import "./style.css";

const Button = ({ buttonlabel, onClickHandler, isButtonDisabled }) => {
  return (
    <button disabled={isButtonDisabled} onClick={onClickHandler}>
      {buttonlabel}
    </button>
  );
};
export default Button;
