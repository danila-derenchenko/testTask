import './posts.css'
import Header from "../header/header"
import consts from '../../const'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button, List, Switch, message } from 'antd'

const Posts = () => {
    const [ list, setPosts ] = useState([])
    const [ forFilterList, setForFilter ] = useState([])
    const [ countViewItems, setCountViewItems ] = useState(10)
    const [ loading, setLoading ] = useState(true)
    const [ messageApi, contextHolder ] = message.useMessage()

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Не удалось получить данные',
        })
    }

    useEffect(() => {
        setLoading(true)
        axios.get(consts.urlPosts).then((res) => {
            setPosts(res.data)
            setForFilter(res.data)
        }).catch(error)
        setLoading(false)
    }, [])

    const filterItem = (сondition:boolean) => {
        if(сondition) {
            setPosts(prev => prev.filter((item: { userId:number }) => item.userId == 1))
        } else {
            setPosts(forFilterList)
        }
    }

    const addPosts = () => {
        setCountViewItems((prev) => prev + 10)
    }

    return (
        <div className="posts_wrapper">
            <div>
                <Header />
                {contextHolder}
                <div className="posts">
                    <div className="posts_filter">
                        <p className='posts_filter_text'>Только ваши посты</p>
                        <Switch onChange={filterItem} />
                    </div>
                    <div>
                        {
                            loading ? (
                                <div>Загрузка...</div>
                            ) : (
                                <div className='postsBox'>
                                    <List
                                        itemLayout="horizontal"
                                        className='postItem'
                                        dataSource={list.slice(0, countViewItems)}
                                        renderItem={(item:{
                                            title:string,
                                            id:number,
                                            userId:number,
                                            body:string
                                        }) => (
                                        <List.Item>
                                            <List.Item.Meta
                                            title={<div>
                                                <p>{`${item.id}) Автор: пользователь ${item.userId}`}</p>
                                                <p>{item.title}</p>
                                            </div>}
                                            description={<p>{item.body}</p>}

                                            />
                                        </List.Item>
                                        )}
                                    />
                                    {
                                        (list.length > countViewItems) ? (
                                            <div className="posts_button">
                                                <Button className='postsButton' onClick={addPosts}>Подгрузить ещё посты</Button>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts