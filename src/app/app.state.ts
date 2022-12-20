import { Record } from "./models/record";
import { Arithmetic } from "./models/arithmetic";

export interface AppState{
    readonly records: Record[];
    readonly arithmetics: Arithmetic[];
}
