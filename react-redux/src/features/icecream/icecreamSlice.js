import * as redux from '@reduxjs/toolkit'
import { cakeActions } from '../cake/cakeSlice.js'

export const initialState = {
    numOfIcecream: 20
}

const icecreamSlice = redux.createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecream--
        },
        restocked: (state, action) => {
            state.numOfIcecream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecream--;
        })
    }
})

export default icecreamSlice.reducer
export const icecreamActions = icecreamSlice.actions