import React, { useState } from 'react';
import { connect } from 'react-redux'; 
import { addTask } from '../store/actions/taskActions'; 


const AddTask = ({ addTask }) => {
  // Define state using useState hook to manage form inputs
  const [task, setTask] = useState({
    taskid: Math.floor(Math.random() * 1000), // Generate a random taskid
    title: '', // Initialize title state
    description: '' // Initialize description state
  });

  // Function to handle input changes and update state
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value }); // Update state with new input value
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    addTask(task); // Dispatch addTask action with task as payload
    // Reset form fields and task state after successful task addition
    setTask({
      taskid: Math.floor(Math.random() * 1000), // Generate a new random taskid
      title: '', // Reset title state
      description: '' // Reset description state
    });
    alert('Task added successfully'); // Show alert for successful task addition
  };

 
  return (
    <div className="container my-3">
      <h2>Add a Task</h2>
      <form className="my-3" onSubmit={handleSubmit}>
        <input type="hidden" name="taskid" value={task.taskid} />
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Task Title</label>
          <input type="text" className="form-control" id="title" name="title" value={task.title} onChange={handleChange} minLength={5} required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Task Description</label>
          <input type="text" className="form-control" id="description" name="description" value={task.description} onChange={handleChange} minLength={5} required />
        </div>
        <button disabled={task.title.length < 5 || task.description.length < 5} type="submit" className="btn btn-primary">Add Task</button>
      </form>
    </div>
  );
};

// Connect the AddTask component to the Redux store and export it
export default connect(null, { addTask })(AddTask);
