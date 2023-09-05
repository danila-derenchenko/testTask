import './todos.css'
import Header from "../header/header"
import { useEffect, useState } from "react"
import { List } from "antd"
import { todo } from '../../store/reducers/todosReduser'
import { useSelector } from 'react-redux'
import { requestTodos } from '../../requests'

const Todos = () => {
    const [ listTodos, setListTodos ] = useState<todo[]>([])
    const [ loading, setLoading ] = useState(true)

    const data = useSelector((state: { todos:todo[] }) => state.todos)

    requestTodos()

    useEffect(() => {
        setListTodos(data)
        setLoading(false)
    }, [data])

    return (
        <div className="todos_wrapper">
            <Header />
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
                                renderItem={(item) => (
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
    )
}

export default Todos