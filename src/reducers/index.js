import { ADD_EXPENSES, DELETE_EXPENSES } from "../types";

const state=[];
export default function expenseReducer(state,action ){
    switch (action.type){
        case ADD_EXPENSES: return [...state, action.payload];
        case DELETE_EXPENSES: return state.filter(expense=>expense.id!==action.payload.id)
        default: return state;
    }
}