import {FETCH_DATA} from "../actions/constants";

const initialState = {};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        result: 'Some data from API'
      };

    default:
      return state;
  }
};