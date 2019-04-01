import { APP_TYPES, ADD_INPUT } from '../actions/app-actions';

const appReducerInitState = [];

export default function (state = appReducerInitState, action) {
  switch (action.type) {
    // case APP_TYPES.SAY_HI:
    //   return { ...state, say: 'hi' };
    // case APP_TYPES.SAY_BYE:
    //   return { ...state, say: 'bye' };
    // case ADD_INPUT: {
    //   return [...state, action.payload];
    // }
    default:
      return state;
  }
}
