import axios from "axios"
import { fetchPosts } from "./store/reducers/postsReducer"
import consts from "./const"
import { useDispatch, useSelector } from "react-redux"
import { post } from "./store/reducers/postsReducer"

export const requestPosts = () => {
    const dispatch = useDispatch()
    const data = useSelector((state: { posts:post[] }) => state.posts)

    if(data.length == 0) {
        axios.get(consts.urlPosts).then(res => {
            dispatch(fetchPosts(res.data))
        })
    }
}