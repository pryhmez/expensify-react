import uuid from "uuid";


//ADD_EXPENSE
export const addExpense = ({
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
export const removeExpense = ({ id = "" } = {}) => {
    return {
        type: "REMOVE_EXPENSE",
        id
    }
}

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})