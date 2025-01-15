import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';

// const initialState = {
//   name: '',
//   nameData: '',
//   degreeDays: null,
//   tempLow: null,
//   tempHigh: null,
//   rain: null,
//   humidity: null,
//   date: new Date().toISOString().slice(0, 10),
//   loading: false,
//   allDataLoaded: false,
//   error: '',
// };

const initialState = {
    name: '',
    highTemp: 0,
    lowTemp: 0,
    humidity: 0,
    rain: 0,
    date: 'N/A',
    loading: false,
    error: null,
  };

  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_SUCCESS:
        return {
          ...state,
          ...action.payload, // Merge fetched data into the state
          loading: false,
        };
      case FETCH_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;

// export const weatherReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         allDataLoaded: false,
//         error: '',
//       };
//     case FETCH_SUCCESS:
//       const updatedState = {
//         ...state,
//         [action.payload.key]: action.payload.value,
//       };
//       const allKeysFetched = [
//         'name',
//         'nameData',
//         'degreeDays',
//         'tempLow',
//         'tempHigh',
//         'rain',
//         'humidity',
//       ].every(key => updatedState[key] !== null && updatedState[key] !== '');
//       return {
//         ...updatedState,
//         date: action.payload.date || state.date,
//         loading: false,
//         allDataLoaded: allKeysFetched,
//       };
//     case FETCH_FAILURE:
//         return {
//             ...state,
//             loading: false,
//             error: action.payload,
//             allDataLoaded: false,
//         };
//     default:
//         return state;
//   }
// };
