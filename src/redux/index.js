import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

//actions
import { fetchCategories } from "./actions";
import { fetchIngredients } from "./actions";

const middlewares = [thunk];
const enhancer = composeWithDevTools({})(applyMiddleware(...middlewares));

const store = createStore(reducers, enhancer);

store.dispatch(fetchIngredients());
store.dispatch(fetchCategories());

export default store;
