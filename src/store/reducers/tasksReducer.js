import { ADD_TASK, DELETE_TASK, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE } from '../actions/taskActions';

// Define the initial state of the tasks reducer
const initialState = {
  tasks: [], // Array to hold tasks
  error: ''   // Variable to hold error message if any
};

// Define the tasksReducer function, which takes state and action as parameters
const tasksReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    // Case for adding a task
    case ADD_TASK:
      return {
        ...state, // Spread the current state
        tasks: [...state.tasks, action.payload] // Add the new task to the tasks array
      };
    // Case for deleting a task
    case DELETE_TASK:
      return {
        ...state, 
        // Filter out the task with the specified taskid from the tasks array
        tasks: state.tasks.filter(task => task.taskid !== action.payload)
      };
    // Case for successful fetch of tasks
    case FETCH_TASKS_SUCCESS:
      return {
        ...state, 
        tasks: action.payload, // Set the tasks array to the fetched tasks
        error: '' // Reset the error message
      };
    // Case for failed fetch of tasks
    case FETCH_TASKS_FAILURE:
      return {
        ...state, 
        error: action.payload // Set the error message to the payload received
      };
    // Default case for returning the current state if no action matches
    default:
      return state;
  }
};

export default tasksReducer;
