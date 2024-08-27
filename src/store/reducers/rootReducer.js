// src/store/reducers/rootReducer.js

import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import authReducer from './authReducer'; // Import authReducer

const rootReducer = combineReducers({
  tasks: tasksReducer,
  auth: authReducer // Add authReducer
});

export default rootReducer;
