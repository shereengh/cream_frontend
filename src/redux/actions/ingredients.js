//actions
import { FETCH_INGREDIENTS, SET_INGREDIENTS } from "./actionTypes";

import instance from "./instance";

export const fetchIngredients = () => {
  return async dispatch => {
    try {
      let response = await instance.get("ingredients/");
      const ingredients = response.data;
      dispatch({ type: FETCH_INGREDIENTS, payload: ingredients });
    } catch (error) {
      console.log("fetch ingredients error");
      console.error(error);
    }
  };
};

export const setIngredients = ingredients => {
  return async dispatch => {
    await dispatch({ type: SET_INGREDIENTS, payload: ingredients });
  };
};
