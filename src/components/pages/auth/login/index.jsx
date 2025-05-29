import "../auth.css";
import "./style.css";
import { useEffect, useState } from "react";
import Button from "../../../elements/button";
import InputField from "../../../elements/inputField";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  let initialFormData = {
    email: "",
    password: "",
  };

  const token = Cookies.get("token") || "";
  const [bearerToken, setBearerToken] = useState(token || "");

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
      redirect: "follow",
    };

    fetch("http://192.168.101.11:9900/api/rest/auth/login", requestOptions)
      .then((response) => {
        const token = response.headers.get("Authorization");
        sessionStorage.setItem("Authorization", token);
        setBearerToken("token");
        // Cookies.set("token", `PHPSESSID=${token};Path=/; HttpOnly`);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      await axios
        .get("http://192.168.101.11:9900/api/rest/admin/users", {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
        });
    };

    if (bearerToken) {
      fetchUserData();
    }
  }, [bearerToken]);

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
