import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';

// export const fetchRequest = () => {
//   return {
//     type: FETCH_REQUEST,
//   };
// };

// export const fetchSuccess = (key, value, date = null) => {
//   return {
//     type: FETCH_SUCCESS,
//     payload: {key, value, date},
//   };
// };

// export const fetchFailure = error => {
//   return {
//     type: FETCH_FAILURE,
//     payload: error,
//   };
// };





export const fetchRequest = () => ({
    type: 'FETCH_REQUEST',
  });
  
  export const fetchSuccess = (data) => ({
    type: 'FETCH_SUCCESS',
    payload: data, // Pass all data points as a single object
  });
  
  export const fetchFailure = (error) => ({
    type: 'FETCH_FAILURE',
    payload: error,
  });
