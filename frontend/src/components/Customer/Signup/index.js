import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    if (auth) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignup = async () => {
    const result = await fetch("https://world-store.onrender.com/auth/create", {
      method: "post",
      body: JSON.stringify({
        firstName,
        lastName,
        confirmPassword,
        phone,
        role,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();

    if (data && data.data.token) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      navigate("/");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Lastname"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="signupBtn" type="button" onClick={handleSignup}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
