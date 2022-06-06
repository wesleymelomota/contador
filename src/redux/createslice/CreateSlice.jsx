import {createSlice} from '@reduxjs/toolkit'


export const slice = createSlice({
    name: 'contador',
    initialState: {
        contador: 0
    },
    reducers: {
        increment(state, {payload}){
            return {...state, contador: + payload}
        },
        decrement(state, {payload}){
            return {...state, contador: payload}
        }
    }
})

export const {increment, decrement} = slice.actions
export default slice.reducer