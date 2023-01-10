import React from "react";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [object , setObject] = React.useState('')
  const [token, setToken] = React.useState("");
  const [error, setError] = React.useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    axios
      .post("https://dummyjson.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <>
      <div className="main">
        <h1>Login</h1>
        <form className="form">
          <label>Username</label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            required
            placeholder="Enter Username"
            value={username}
          />
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            placeholder="Enter Password"
            value={password}
          />
          {username === "" || password === "" ? (
            <p className="error">Please fill all the fields</p>
          ) : (
            <button type="submit" onClick={handlesubmit}>
              Login
            </button>
          )}
        </form>
      </div>
      <div className="token">
        <p>{error}</p>
        <h3>Token</h3>
        {token ? <p className="para">{token}</p> : null}
      </div>
    </>
  );
};

export default Login;
