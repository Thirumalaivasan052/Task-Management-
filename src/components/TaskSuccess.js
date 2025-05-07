// src/components/TaskSuccess.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const TaskSuccess = () => {
  const navigate = useNavigate();

  const handleRegisterAgain = () => {
    navigate('/');
  };

  return (
    <div className="success-page">
      <h2>🎉 Task Submitted Successfully! </h2>
      <p>Your task has been submitted. Do you want to register a new user?</p>
      <button onClick={handleRegisterAgain}>Register New User</button>
    </div>
  );
};

export default TaskSuccess;
