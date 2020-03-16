import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import './styles/styles.scss';

const store = configureStore();


store.dispatch(addExpense({ description: "water bills", amount: 20000, createdAt: Date.now() }));
store.dispatch(addExpense({ description: "house rent", amount: 30000, createdAt: Date.now() }));
store.dispatch(addExpense({ description: "gas bill", amount: 50000, createdAt: Date.now() }));


const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses)
console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `hello ${this.name}`
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting();
// console.log(getGreeting);

// class NewSyntax {
//     name = 'John';
//     getGreeting = () => {
//         return `hello ${this.name}`
//     }
// }

// const newSyntax = new NewSyntax();
// const newgetgreeting = newSyntax.getGreeting();
// console.log(newgetgreeting);