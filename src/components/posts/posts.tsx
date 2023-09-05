import './posts.css'
import Header from "../header/header"
import { useState, useEffect } from 'react'
import { Button, List, Switch } from 'antd'
import { requestPosts } from '../../requests'
import { useSelector } from 'react-redux'
import { post } from '../../store/reducers/postsReducer'

const Posts = () => {
    const [ list, setPosts ] = useState<post[]>([])
    const [ forFilterList, setForFilter ] = useState<post[]>([])
    const [ countViewItems, setCountViewItems ] = useState(10)
    const [ loading, setLoading ] = useState(true)

    const data = useSelector((state: { posts:post[] }) => state.posts)

    requestPosts()

    useEffect(() => {
        setLoading(true)
        setPosts(data)
        setForFilter(data)
        setLoading(false)
    }, [data])

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
                                        renderItem={(item) => (
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