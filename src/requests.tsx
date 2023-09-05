import axios from "axios"
import { fetchPosts } from "./store/reducers/postsReducer"
import { fetchTodos } from "./store/reducers/todosReduser"
import consts from "./const"
import { useDispatch, useSelector } from "react-redux"
import { post } from "./store/reducers/postsReducer"
import { todo } from "./store/reducers/todosReduser"

export const requestPosts = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: { posts:post[] }) => state.posts)

    if(data.length == 0) {
        axios.get(consts.urlPosts).then(res => {
            dispatch(fetchPosts(res.data))
        })
    }
}

export const requestTodos = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: { todos:todo[] }) => state.todos)

    if(data.length == 0) {
        axios.get(consts.urlTodos).then(res => {
            dispatch(fetchTodos(res.data))
        })
    }
}