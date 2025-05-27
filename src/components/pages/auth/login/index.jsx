import "../auth.css";
import "./style.css";
import { useState } from "react";
import Button from "../../../elements/button";
import InputField from "../../../elements/inputField";

const Login = () => {
  let initialFormData = {
    email: "",
    password: "",
  };

  const [loginFormData, setLoginFormData] = useState(initialFormData);

  const isButtonDisabled = !loginFormData?.email || !loginFormData?.password;

  const handleSubmit = (e) => {
    e.preventDefault();

    const myHeaders = new Headers();

    const raw = JSON.stringify(loginFormData);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://192.168.101.11:9900/api/rest/auth/login", requestOptions)
      .then((response) => {
        const token = response.headers.get("Authorization");
        sessionStorage.setItem("Authorization", token);
          console.log(token)
         document.cookie = `PHPSESSID=${token}; path=/; HttpOnly;max-age=604800; SameSite=Lax`;
      })
      .catch((error) => console.error(error));


      setTimeout(() => {
      
         const value = "PHPSESSID="+sessionStorage.getItem("Authorization") ;
         fetch("http://192.168.101.11:9900/api/rest/admin/users", {
           method: "GET",
           credentials: "include",
           headers: {
             "Cookie": value,
           },
         })
           .then((response) => response.json())
           .then((response) => console.log(response))
           .catch((error) => console.error(error));
      },5000)
  };

  return (
    <div className="loginbox">
      <div className="loginimg">
        <img src="/login-pic.png" alt="Eggs background" />
      </div>

      <div className="loginform-section">
        <h1>Hello! Welcome back</h1>
        <p>Enter your credentials to continue</p>

        <form className="auth-form">
          <InputField
            type="email"
            label="Email address"
            showLabel={true}
            isMandatory={true}
            name={"email"}
            formData={loginFormData}
            setFormData={setLoginFormData}
          />

          <InputField
            type="password"
            label="Password"
            showLabel={true}
            isMandatory={true}
            name={"password"}
            formData={loginFormData}
            setFormData={setLoginFormData}
          />

          <a href="#" className="forgot-password">
            Forgot password?
          </a>

          <Button
            buttonlabel="Login"
            className="btn-border"
            onClickHandler={handleSubmit}
            isButtonDisabled={isButtonDisabled}
          />
        </form>

        <div className="loginregister">
          Don’t have an account?{" "}
          <a href="/registration" className="regis-link">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
