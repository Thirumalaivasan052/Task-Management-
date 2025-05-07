// src/components/TaskCreate.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskCreate = () => {
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:8080/api/tasks/create", taskData)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        // Redirect to success page after task creation
        navigate("/tasks/success");
      })
      .catch((error) => {
        console.error("Error creating task:", error);
        setLoading(false);
      });
  };

  return (
    <div className="task-create-container">
      <h2>Create Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={taskData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={taskData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Create Task </button>
      </form>

      {loading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default TaskCreate;
