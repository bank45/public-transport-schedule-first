//  ACTION TYPES
// export const APP_TYPES = {
//   SAY_HI: 'SAY_HI',
//   SAY_BYE: 'SAY_BYE'
// };

// export const ADD_INPUT = {
//   ADD_INPUT: 'ADD_INPUT'
// };

export const APP_RASP = {
  START_RASP: 'START_RASP',
  APP_RASP: 'APP_RASP',
  APP_COUNTRI: 'APP_COUNTRI'

};

// ACTION CREATORS
// export const sayHiAC = () => ({
//   type: APP_TYPES.SAY_HI
// });

// export const sayByeAC = () => ({
//   type: APP_TYPES.SAY_BYE
// });

// let nextInputId = 0;
// export const addInputAC = content => ({
//   type: ADD_INPUT,
//   payload: {
//     id: ++nextInputId,
//     content
//   }
// });

export const startRaspAC = () => ({
  type: APP_RASP.START_RASP
});

export const addRaspAC = content => ({
  type: APP_RASP.APP_RASP,
  raspisanie: {
    content
  }
});

// export const addCoutriAC = content => ({
//   type: APP_RASP.APP_COUNTRI,
//   countries: {
//     content
//   }
// });

