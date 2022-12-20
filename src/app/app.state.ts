import { Record } from "./models/record";

export interface AppState{
    readonly records: Record[];
}