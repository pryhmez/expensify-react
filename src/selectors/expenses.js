

//get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
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
