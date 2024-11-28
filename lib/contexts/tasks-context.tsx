// TaskContext.tsx

import React, { ReactNode, createContext, useContext, useReducer } from 'react';

// Define the shape of our state
interface TaskModalState {
  Tasks: number;
}

// Define actions
type Action =
  | { type: 'ADD_TaskS'; payload: number }
  | { type: 'RESET_TaskS' };

// Initial state
const initialState: TaskModalState = {
  Tasks: 0,
};

// Create the reducer
const TaskReducer = (state: TaskModalState, action: Action): TaskModalState => {
  switch (action.type) {
    case 'ADD_TaskS':
      return { Tasks: state.Tasks + action.payload };
    case 'RESET_TaskS':
      return initialState;
    default:
      return state;
  }
};

// Create context
const TaskContext = createContext<{
  state: TaskModalState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create a provider component
export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the TaskContext
export const useTasks = () => {
  return useContext(TaskContext);
};
