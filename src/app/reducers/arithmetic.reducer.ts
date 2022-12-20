import { Action } from "@ngrx/store";
import { Arithmetic } from "../models/arithmetic";
import * as ArithmeticActions from "../actions/arithmetic.actions"

const initialState: Arithmetic = {
    budget: 0,
    total_expenses: 0,
    balance: 0,
    payload: undefined
}

export function arithmeticReducer(state: Arithmetic[] = [initialState], action: Action) {

    switch (action.type) {
        case ArithmeticActions.ADD_ARITHMETIC:
            return [...state, (action as unknown as Arithmetic).payload ];
        default:
            return state;
    }
 }
