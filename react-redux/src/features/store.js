import * as redux from '@reduxjs/toolkit'
import cakeReducer, { cakeActions } from "./cake/cakeSlice.js";
import icecreamReducer, { icecreamActions } from './icecream/icecreamSlice.js'
import postsReducer, { fetchPosts } from './post/postsSlice.js'

const store = redux.configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        post: postsReducer
    },
})

store.subscribe(() => console.log("Updated: ", store.getState()))
store.dispatch(fetchPosts())

export default store