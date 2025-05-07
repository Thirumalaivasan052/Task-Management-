// src/components/UserRegister.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // useNavigate for redirecting after success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Register user
    axios
      .post("http://localhost:8080/api/users/register", formData)
      .then((response) => {
        console.log(response.data); // Registration success
        setLoading(false);
        // Navigate to the task creation page after successful registration
        setTimeout(() => {
          navigate("/tasks/create"); // Redirection after 2 seconds delay
        }, 2000);
      })
      .catch((error) => {
        console.error("There was an error registering the user:", error);
        setLoading(false);
      });
  };

  return (
    <div className="register-container">
      <h2>Register User &#x2705;</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {/* <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /> */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      {loading && (
        <div className="loading">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
};

export default UserRegister;
