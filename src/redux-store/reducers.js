const initialState = {
  age: 20
};

const reducers = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INCREMENT":
      newState.age++;
      break;
    case "DECREMENT":
      newState.age--;
      break;
  }

  return newState;
};

export default reducers;
