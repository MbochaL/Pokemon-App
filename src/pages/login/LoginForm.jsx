import { useState } from "react";
import "./Login.css";


export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleClick() {
    if (email === "Test@test.com") {
      if (password === "1234") {
        setError("");
        window.localStorage.setItem("isLogged", true);
        onSuccess();
        return ;
      }
    }

    window.localStorage.setItem("isLogged", false);
    setError("Datos Incorrectos");
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="LoginForm">
      <h3 className="LoginFormTitle">Account Login</h3>
      <h4 className="LoginFormDescription">Email: Test@test.com || Password:1234asd</h4>
      <div className="LoginFormContainer">
        <label htmlFor="email" className="LoginFormInputLabel">Email</label>
        <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} />
        <label htmlFor="password" className="LoginFormInputLabel">Password</label>
        <input name="password" id="password" value={password} type="password" className="LoginFormInput" onChange={onPasswordChange} />
        <button className="LoginFormButton" onClick={handleClick}>Ingresar</button>
        {error.length > 0 ? (
          <div className="LoginFormError">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  )
}
