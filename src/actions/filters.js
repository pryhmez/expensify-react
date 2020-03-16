

//sort by amount
export const sortByAmount = () => {
    return {
        type: "SORT_BY_AMOUNT"
    }
}

//SORT_BY_DATE
export const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

//Set text filter
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
})

//set start date
export const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})


export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})