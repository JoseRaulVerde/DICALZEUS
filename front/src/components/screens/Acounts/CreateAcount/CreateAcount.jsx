import React from 'react';
import './CreateAcount.css';

function CreateAcount() {
  return (
    <div className="container">
      <div className="account">
        <form className="register">
          <h2>Create Acount</h2>
          <label>First Name</label>
          <input type="text" placeholder="ex. Pedro"></input>
          <label>Last Name</label>
          <input type="text" placeholder="ex. Millan"></input>
          <label>Direccion</label>
          <input type="text" placeholder="ex. av. Las torres"></input>
          <label>Email</label>
          <input type="email" placeholder="ex. example@gmail.com"></input>
          <label>Phone Number</label>
          <input type="tel" maxLength={10} placeholder="ex. 51254625"></input>
          <label>Pasword</label>
          <input type="password"></input>
          <div style={{justifyContent: "center", display:'flex'}}>
            <input
              type="submit"
              value={'Create account'}
              className="btn"
            ></input>
          </div>
        </form>
        <div className="divider">
          <span>Do you have an account? </span>
          <a href="/login">Sign up</a>
        </div>
      </div>
    </div>
  );
}
export default CreateAcount;
