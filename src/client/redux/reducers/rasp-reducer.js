import { APP_RASP } from '../actions/app-actions';

const appReducerInitState = [];

export default function (state = appReducerInitState, { type, raspisanie }) {
  switch (type) {
    case APP_RASP.START_RASP: {
      return [];
    }
    case APP_RASP.APP_RASP: {
      return [...state, raspisanie.content];
      // isFetching: false
    }
    default:
      return state;
  }
}

