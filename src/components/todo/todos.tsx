import { useSelector } from "react-redux"
import Header from "../header/header"
import { Navigate } from "react-router-dom"

const Todos = () => {
    const islogin = useSelector((state: { isLogin:boolean }) => state.isLogin)

    return (
        <div className="todo_wrapper">
            {
                islogin ? (
                    <div>
                        <Header />

                    </div>
                ) : (
                    <Navigate to='/login' />
                )
            }
        </div>
    )
}

export default Todos