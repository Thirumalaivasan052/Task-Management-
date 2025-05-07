import React, { useState } from 'react';

function TaskList() {
    const [userId, setUserId] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleGetTasks = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/tasks/user/${userId}`);
            const data = await response.json();
            setTasks(data);
        } catch (err) {
            alert('Error fetching tasks');
        }
    }; 

    return (
        <div style={styles.container}>
            <h2>View Tasks</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleGetTasks} style={styles.button}>
                Get Tasks
            </button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.title}</strong> - {task.description} - {task.completed ? '✅' : '❌'}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    input: {
        padding: '10px',
        margin: '10px',
        width: '200px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default TaskList;
