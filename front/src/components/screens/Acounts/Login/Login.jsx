import React from 'react';

function Login() {
  return (
    <div className="container">
    <div className="account">
      <form className="register">
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" placeholder="ex. example@gmail.com"></input>
        <label>Pasword</label>
        <input type="password"></input>
        <div style={{justifyContent: "center", display:'flex'}}>
          <input
            type="submit"
            value={'Log in'}
            className="btn"
          ></input>
        </div>
      </form>
      <div className="divider">
        <span>Don't have an account? </span>
        <a href="/createAcount">sign up</a>
      </div>
    </div>
  </div>
  );
}
export default Login;
