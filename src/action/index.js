import { ADD_EXPENSES, DELETE_EXPENSES } from "../types"

export const addExpenses = ({ id, name, amount, spendDate, category }) => ({
    type: ADD_EXPENSES,
    payload: {
        id: id,
        name,
        amount,
        spendDate,
        category
    }
});

export const deleteExpenses = (id) => ({
    type: DELETE_EXPENSES,
    payload: {
        id
    }
})