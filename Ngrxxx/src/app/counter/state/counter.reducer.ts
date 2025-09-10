import { createReducer, on } from "@ngrx/store";
import { intialState } from "./counter.state";
import { decrement, increment, reset } from "./counter.action";

export const counterReducer = createReducer(
    intialState,
    on(increment, (state) => {
        //return new obj
        return {
            ...state,
            counter: state.counter + 1

        }
    }),
    on(decrement, (state) => {
        //return new obj
        return {
            ...state,
            counter: state.counter - 1

        }
    }),
    on(reset, (state) => {
        //return new obj
        return {
            ...state,
            counter: 0

        }
    })
)