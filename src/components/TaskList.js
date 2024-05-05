import React, { useEffect } from 'react';
import { connect } from 'react-redux'; // Import connect function from react-redux
import { fetchTasks, deleteTask } from '../store/actions/taskActions'; // Import action creators


const TaskList = ({ tasks, fetchTasks, deleteTask }) => {
  // useEffect hook to fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks(); // Dispatch fetchTasks action when component mounts
  }, [fetchTasks]); 

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

// mapStateToProps function to map state from Redux store to component props
const mapStateToProps = (state) => ({
  tasks: state.tasks.tasks // Map tasks state to tasks prop
});

// Connect the TaskList component to the Redux store and export it
export default connect(mapStateToProps, { fetchTasks, deleteTask })(TaskList);
