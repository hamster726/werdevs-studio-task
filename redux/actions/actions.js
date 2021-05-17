import { ADD_DATE_TO_LIST, UPDATE_CURRENT_MONTH } from "../types";

const addDateToList = (date) => {
  return {
    type: ADD_DATE_TO_LIST,
    payload: date,
  };
};

const updateCurrentMonth = (date) => {
  return {
    type: UPDATE_CURRENT_MONTH,
    payload: date,
  };
};

export { addDateToList, updateCurrentMonth };
