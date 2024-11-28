// PointContext.tsx
'use client'

import React, { ReactNode, createContext, useContext, useReducer } from "react";

// Define the shape of our state
interface PointState {
  points: number;
}

// Define actions
type Action =
  | { type: "ADD_POINTS"; payload: number }
  | { type: "RESET_POINTS" };

// Initial state
const initialState: PointState = {
  points: 0,
};

// Create the reducer
const pointReducer = (state: PointState, action: Action): PointState => {
  switch (action.type) {
    case "ADD_POINTS":
      return { points: state.points + action.payload };
    case "RESET_POINTS":
      return initialState;
    default:
      return state;
  }
};

// Create context
const PointContext = createContext<{
  state: PointState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Create a provider component
export const PointProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(pointReducer, initialState);

  return (
    <PointContext.Provider value={{ state, dispatch }}>
      {children}
    </PointContext.Provider>
  );
};

PointContext.displayName = "PointContext";

// Custom hook to use the PointContext
export const usePoints = () => {
  const context = useContext(PointContext);

  if (!context) throw "PointContext must be used inside a PointProvider";
  return context;
};

export const usePointsState = () => usePoints().state;

export const usePointsAction = () => {
  const { dispatch } = usePoints();

  return {
    addPoints: (points: number) =>
      dispatch({ type: "ADD_POINTS", payload: points }),
  };
};
