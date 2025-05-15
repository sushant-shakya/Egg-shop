import "../auth.css";
import { useEffect, useState } from "react";
import Button from "../../../elements/button";
import InputField from "../../../elements/inputField";

const Registration = () => {
  let initialFormData = {
    email: "",
    password: "",
  };

  const [registrationFormData, setRegistrationFormData] =
    useState(initialFormData);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [abc, setAbc] = useState("");

  const isButtonDisabled =
    !registrationFormData?.email || !registrationFormData?.password;

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "PHPSESSID=obvmsea7un8dto37sfbe5mp8q0");

    const raw = JSON.stringify(registrationFormData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://192.168.101.12:9900/api/rest/auth/login", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (confirmPassword) {
      const doesPasswordsMatch =
        confirmPassword === registrationFormData?.password;
      !doesPasswordsMatch
        ? setAbc("Please enter the same password")
        : setAbc("");
    }
  }, [confirmPassword]);

  return (
    <div className="loginbox">
      <div className="loginimg">
        <img src="/regis-pic.png" alt="Eggs background" />
      </div>

      <div className="loginform-section">
        <h1>Registration</h1>
        <p>Enter your credentials to continue</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <InputField type="email" label="Email address" showLabel={true} />

          <InputField type="password" label="Password" showLabel={true} />

          <InputField
            type="password"
            label="Confirm Password"
            showLabel={true}
            formData={confirmPassword}
            setFormData={setConfirmPassword}
          />

          {!!abc && <p>{abc}</p>}

          <InputField
            type={"number"}
            label={"Enter your contact number"}
            showLabel={true}
          />

          <Button buttonlabel="Login" className="btn-border" />
        </form>

        <div className="loginregister">
          {"Already have an account? "}
          <a href="/login" className="login-link">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;

<InputField
  type={"number"}
  label={"Enter your contact number"}
  showLabel={true}
/>;
