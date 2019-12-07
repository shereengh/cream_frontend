//actions
import { FETCH_CATEGORIES } from "./actionTypes";

import instance from "./instance";

export const fetchCategories = () => {
  return async dispatch => {
    try {
      let response = await instance.get("categories/");
      const categories = response.data;
      dispatch({ type: FETCH_CATEGORIES, payload: categories });
    } catch (error) {
      console.log("fetch categories error");
      console.error(error);
    }
  };
};
