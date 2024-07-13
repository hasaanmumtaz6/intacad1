import React from "react";

const Register = () => {
  return (
    <form className="register-form">
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="example@xyz.com" />
      <input type="tel" placeholder="+11232456789" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <div className="flex items-center gap-2">
        <input type="checkbox" id="confirm-line" />
        <label htmlFor="confirm-line">Are you sure?</label>
      </div>
      <button>Register Now</button>
    </form>
  );
};

export default Register;
