// src/components/TaskList.js

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTasks, deleteTask } from '../store/actions/taskActions';
// import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TaskList = ({ tasks, fetchTasks, deleteTask, isAuthenticated }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks();
    }
  }, [fetchTasks, isAuthenticated]);

  if (!isAuthenticated) {
    navigate('/')// Redirect to login if not authenticated
  }
    // Function to handle click event for deleting a task
    const handleClickDelete = (taskId) => {
      deleteTask(taskId); // Dispatch deleteTask action with taskId as payload
      alert('Task deleted successfully'); 
    };
  

  return (
    <div>
      <h2 className="task-list-heading">Task List</h2>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleClickDelete(item.taskid)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks,
  isAuthenticated: state.auth.isAuthenticated // Map auth state
});

export default connect(mapStateToProps, { fetchTasks, deleteTask })(TaskList);




