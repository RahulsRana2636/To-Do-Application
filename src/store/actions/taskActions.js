// Define action types as constants
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';


// Action creator to add a task
export const addTask = (task) => {
  return (dispatch) => {
    // Dispatch the ADD_TASK action with the task payload
    dispatch({
      type: ADD_TASK,
      payload: task
    });

    // Get existing tasks from local storage or initialize an empty array
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add the new task to the existing tasks array
    const updatedTasks = [...existingTasks, task];

    // Save the updated tasks array back to local storage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
};

// Action creator to delete a task
export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId
});

// Action creator for successful fetch of tasks
export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks
});

// Action creator for failed fetch of tasks
export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error
});

// Action creator to fetch tasks from local storage
export const fetchTasks = () => {
  return (dispatch) => {
    try {
      // Get tasks from local storage or initialize an empty array
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      
      // Dispatch fetchTasksSuccess action with the retrieved tasks
      dispatch(fetchTasksSuccess(storedTasks));
    } catch (error) {
      // Dispatch fetchTasksFailure action if there's an error
      dispatch(fetchTasksFailure(error.message));
    }
  };
};
