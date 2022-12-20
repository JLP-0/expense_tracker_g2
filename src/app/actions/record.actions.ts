import { Action } from "@ngrx/store";
import { Record } from "../models/record";

export const ADD_RECORD = "[RECORD] Add";
export const REMOVE_RECORD = "[RECORD] Remove";

export class AddRecord implements Action {
    readonly type = ADD_RECORD;
    constructor(public payload: Record) { }
}
export class RemoveRecord implements Action {
    readonly type = REMOVE_RECORD;
    constructor(public payload: number) { }
}

export type Actions = AddRecord | RemoveRecord