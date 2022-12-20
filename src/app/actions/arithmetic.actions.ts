import { Action } from "@ngrx/store";
import { Arithmetic } from "../models/arithmetic";

export const ADD_ARITHMETIC = "[ARITHMETIC] Add";
export const REMOVE_ARITHMETIC = "[ARITHMETIC] Remove";

export class AddArithmetic implements Action {
    readonly type = ADD_ARITHMETIC;
    constructor(public payload: Arithmetic) { }
}
export class RemoveArithmetic implements Action {
    readonly type = REMOVE_ARITHMETIC;
    constructor(public payload: number) { }
}

export type Actions = AddArithmetic | RemoveArithmetic
