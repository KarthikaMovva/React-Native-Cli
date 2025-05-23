import { INCREMENT, DECREMENT } from './CounterActions';

const initialState = {
  value: 0,
};

type Action = {
  type: string;
};

const counterReducer = (state = initialState, action: Action): typeof initialState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value > 0 ? state.value - 1 : 0 };
    default:
      return state;
  }
};

export default counterReducer;
