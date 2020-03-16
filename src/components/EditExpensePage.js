import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            {props.match.params.id}
            <ExpenseForm
                actionType={"edit expense"}
                expense={props.expense}
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.match.params.id, expense));
                    props.history.push("/");
                }}
            />
            <button
                onClick={() => {
                    props.dispatch(removeExpense({ id: props.expense.id }));
                    props.history.push("/");
                }}>Remove</button>

        </div>
    )
}

const mapStatesToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStatesToProps)(EditExpensePage);