import { FETCH_INGREDIENTS, SET_INGREDIENTS } from "../actions/actionTypes";

const initialState = {
  ingredients: [],
  checkedIngredients: []
};

const IngredientReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INGREDIENTS:
      return {
        ...state,
        ingredients: payload
      };
    case SET_INGREDIENTS:
      return {
        ...state,
        checkedIngredients: payload
      };
    default:
      return state;
  }
};
export default IngredientReducer;
