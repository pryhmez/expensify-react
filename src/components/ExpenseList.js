import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = (props) => (
    <div>
        <div >
            <h3>Your Expenses</h3>

        </div>
        {
            props.expenses.map((element, index) => (<ExpenseListItem
                key={element.id}
                item={element}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption}
            />))}

    </div>
)

const mapStateToProps = (state) => {

    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);

