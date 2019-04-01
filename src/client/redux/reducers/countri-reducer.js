import { APP_RASP } from '../actions/app-actions';

const appReducerInitState = [];

export default function (state = appReducerInitState, { type, countries }) {
    switch (type) {
        case APP_RASP.START_RASP: {
            return {
                ...state
                // isFetching: true
            };
        }
        // case APP_RASP.APP_COUNTRI: {
        //     return [...state, countries.content];
        // }
        default:
            return state;
    }
}

