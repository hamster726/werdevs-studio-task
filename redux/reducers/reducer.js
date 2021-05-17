import { ADD_DATE_TO_LIST, UPDATE_CURRENT_MONTH } from "../types";

const initialState = {
  dateList: [],
  currentMonth: new Date(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATE_TO_LIST: {
      let dateListCopy = state.dateList.slice();

      if (dateListCopy.includes(action.payload.getTime())) {
        dateListCopy = dateListCopy.filter(
          (item) => item !== action.payload.getTime()
        );

        return {
          ...state,
          dateList: dateListCopy,
        };
      } else {
        dateListCopy.push(action.payload.getTime());
      }

      return {
        ...state,
        dateList: dateListCopy,
      };
    }
    case UPDATE_CURRENT_MONTH: {
      return {
        ...state,
        currentMonth: action.payload,
      };
    }
    default:
      return state;
  }
};


export default reducer;
