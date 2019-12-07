import { combineReducers } from "redux";

// Reducers
import categoryReducer from "./categories";
import IngredientReducer from "./ingredients";

export default combineReducers({
  rootCat: categoryReducer,
  rootIng: IngredientReducer
});
