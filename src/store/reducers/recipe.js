import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../helpers/utility';

const initialState = {
    recipes: [],
    recipeError: false,
    loading: false,
    fetched: false,
    showListFilters: true,
};

const fetchRecipesStart = state => {
    return updateObject(state, {
        loading: true,
    });
};
const fetchRecipesSuccess = (state, action) => {
    return updateObject(state, {
        recipes: action.recipes,
        loading: false,
        fetched: true,
    });
};
const fetchRecipesFail = (state, action) => {
    return updateObject(state, {
        recipeError: action.error,
        loading: false,
    });
};

const toggleListFilters = state => {
    return updateObject(state, {
        showListFilters: !state.showListFilters,
    });
};

const uploadRecipeStart = state => {
    return updateObject(state, {
        loading: true,
    });
};
const uploadRecipeSuccess = state => {
    return updateObject(state, {
        loading: false,
    });
};
const uploadRecipeFail = (state, action) => {
    return updateObject(state, {
        recipeError: action.error,
        loading: false,
    });
};

const deleteRecipeStart = state => {
    return updateObject(state, {
        loading: true,
    });
};
const deleteRecipeSuccess = state => {
    return updateObject(state, {
        loading: false,
    });
};
const deleteRecipeFail = (state, action) => {
    return updateObject(state, {
        recipeError: action.error,
        loading: false,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_RECIPES_START:
            return fetchRecipesStart(state, action);
        case actionTypes.FETCH_RECIPES_SUCCESS:
            return fetchRecipesSuccess(state, action);
        case actionTypes.FETCH_RECIPES_FAIL:
            return fetchRecipesFail(state, action);

        case actionTypes.TOGGLE_LIST_FILTERS:
            return toggleListFilters(state, action);

        case actionTypes.UPLOAD_RECIPE_START:
            return uploadRecipeStart(state, action);
        case actionTypes.UPLOAD_RECIPE_SUCCESS:
            return uploadRecipeSuccess(state, action);
        case actionTypes.UPLOAD_RECIPE_FAIL:
            return uploadRecipeFail(state, action);

        case actionTypes.DELETE_RECIPE_START:
            return deleteRecipeStart(state, action);
        case actionTypes.DELETE_RECIPE_SUCCESS:
            return deleteRecipeSuccess(state, action);
        case actionTypes.DELETE_RECIPE_FAIL:
            return deleteRecipeFail(state, action);
    }
    return state;
};

export default reducer;
