import { createStore, combineReducers } from "redux";
import expensesReducers from "../reducers/expenses";
import filtersReducer from "../reducers/filters";


export default () => {

    //store

    const store = createStore(
        combineReducers({
            expenses: expensesReducers,
            filters: filtersReducer
        })
    );

    return store;
}
