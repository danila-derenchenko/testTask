import './todos.css'
import { useSelector } from "react-redux"
import Header from "../header/header"
import { Navigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import { List, message } from "antd"
import consts from "../../const"

const Todos = () => {
    const islogin = useSelector((state: { isLogin:boolean }) => state.isLogin)
    const [ listTodos, setListTodos ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ messageApi, contextHolder ] = message.useMessage()

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Не удалось получить данные',
        })
    }

    useEffect(() => {
        axios.get(consts.urlTodos).then((res) => {
            setListTodos(res.data)
        }).catch(error)
        setLoading(false)
    }, [])

    return (
        <div className="todos_wrapper">
            {
                islogin ? (
                    <div>
                        <Header />
                        {contextHolder}
                        <div className="todos">
                        {
                                    loading ? (
                                        <div>Загрузка...</div>
                                    ) : (
                                        <div className='todosBox'>
                                            <List
                                                itemLayout="horizontal"
                                                className='postItem'
                                                dataSource={listTodos.filter((item: { userId:number, completed:boolean }) => (item.userId == 1 && item.completed == false))}
                                                renderItem={(item:{
                                                    title:string,
                                                    id:number,
                                                    userId:number,
                                                    completed:boolean
                                                }) => (
                                                <List.Item>
                                                    <List.Item.Meta
                                                    title={<div>
                                                        <p>Статус: {item.completed ? ("Выполнено") : ("Ожидает выполнения")}</p>
                                                        <p>{`${item.id}) Автор: пользователь ${item.userId}`}</p>
                                                    </div>}
                                                    description={<p>{item.title}</p>}
                                                    />
                                                </List.Item>
                                                )}
                                            />
                                        </div>
                                    )
                                }
                        </div>
                    </div>
                ) : (
                    <Navigate to='/login' />
                )
            }
        </div>
    )
}

export default Todos