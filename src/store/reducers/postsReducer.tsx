import { createSlice } from "@reduxjs/toolkit";

export type post = {
    id:number,
    userId:number,
    title:number,
    body:string
}

const initialState:post[] = []

export const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        fetchPosts: (state, action) => {
            return state = action.payload
        }
    }
})

export const{ fetchPosts } = postSlice.actions
export default postSlice.reducer