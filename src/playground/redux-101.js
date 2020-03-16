import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: "INCREMENT",
        incrementBy
    }
}

//Reducers
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case "RESET":
            return {
                count: state.count = 0
            };
        case "SET":
            return {
                count: action.count
            }
        default:
            return state;

    }

};

//store
const store = createStore(countReducer);

const unSubscribe = store.subscribe(() => {

    console.log(store.getState());
})

//increment
store.dispatch(incrementCount({incrementBy: 77}));

store.dispatch(incrementCount());

store.dispatch(
    {
        type: "DECREMENT",
        decrementBy: 2
    }
);

store.dispatch(
    {
        type: "RESET"
    }
);

store.dispatch({
    type: "SET",
    count: 100
})

// console.log(store.getState());
