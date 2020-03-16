import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import { StaticRouter } from "react-router-dom";

const demoState = {
    expenses: [{
        id: "ksldmvlmsv",
        description: "january rent",
        note: "notes",
        amount: 443500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
}



//ADD_EXPENSE
const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
} = {}) => {
    return {
        type: "ADD_EXPENSE",
        expenses: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//Remove Expense
const removeExpense = ({ id = "" } = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

//expenses reducer
const expensesReducersDefaultState = [];

const expensesReducers = (state = expensesReducersDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expenses];
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}


//sort by amount
const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT"
    }
}

//SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

//Set text filter
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

//set start date
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})


const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})


//filters reducer
const filtersReducerDefault = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}


//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === "date") {
            // console.log("running date")
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if (sortBy === "amount") {
            // console.log("running amount")
            return a.amount < b.amount ? 1 : -1
        }
    })
}


//store

const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(VisibleExpenses);
})

const expense1 = store.dispatch(addExpense({ description: "Rent", amount: 100, createdAt: 1000 }));
const expense2 = store.dispatch(addExpense({ description: "fees", amount: 600, createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expense1.expenses.id }));

// store.dispatch(editExpense(expense2.expenses.id, { amount: 500 }));
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// const arr = ['cat','dog','elephant','lion','tiger','mouse'];
// const arr2 = [ arr[2], ...arr.slice(4)];
// console.log(arr2);

// console.log({...demoState, filters: "drg"})