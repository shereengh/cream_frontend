//actions
import { FETCH_CATEGORIES } from "../actions/actionTypes";

const initialState = {
  categories: []
};

const CategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        allergies: payload
      };
    default:
      return state;
  }
};
export default CategoryReducer;
