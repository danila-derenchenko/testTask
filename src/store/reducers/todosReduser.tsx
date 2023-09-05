import { createSlice } from "@reduxjs/toolkit";

export type todo = {
    title:string,
    id:number,
    userId:number,
    completed:boolean
}

const initualState:todo[] = []

const todoSlice = createSlice({
    name: 'todos',
    initialState: initualState,
    reducers: {
        fetchTodos: (state, action) => {
            return state = action.payload
        }
    }
})

export const { fetchTodos } = todoSlice.actions
export default todoSlice.reducer