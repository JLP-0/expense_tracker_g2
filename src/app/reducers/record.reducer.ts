import { Action } from "@ngrx/store";
import { Record } from "../models/record";
import * as RecordActions from "../actions/record.actions"

const initialState: Record = {
    name: "",
    category: "",
    amount: 0,
    payload: undefined
}

export function reducer(state: Record[] = [initialState], action: Action) {

    switch (action.type) {
        case RecordActions.ADD_RECORD:
            return [...state, (action as unknown as Record).payload ];
        default:
            return state;
    }
 }
