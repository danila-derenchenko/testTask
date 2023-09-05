import './login.css'
import { SetStateAction, useState } from "react"
import { Button, Input, message } from "antd"
import { useDispatch } from 'react-redux'
import { login } from '../../store/reducers/loginReduser'

const Login = () => {
    sessionStorage.username = 'user'
    sessionStorage.password = '123456'

    const [ userNameValue, setUserNameValue ] = useState('')
    const [ passwordValue, setPasswordValue ] = useState('')
    const [ statusInput, setStatusInput ] = useState(true)
    const [ messageApi, contextHolder ] = message.useMessage()
    const dispatch = useDispatch()


    const success = () => {
        messageApi.open({
        type: 'success',
        content: 'Успешно',
        })
    }

    const error = () => {
        messageApi.open({
          type: 'error',
          content: 'Неверный логин или пароль',
        })
    }

    const onChangeUserName = (evt: { target: { value: SetStateAction<string> } }) => {
        setUserNameValue(evt.target.value)
    }

    const onChangePassword = (evt: { target: { value: SetStateAction<string> } }) => {
        setPasswordValue(evt.target.value)
    }

    const checkPassword = () => {
        if(userNameValue == sessionStorage.username && passwordValue == sessionStorage.password) {
            success()
            setStatusInput(true)
            dispatch(login())
        } else {
            error()
            setStatusInput(false)
        }
    }

    return (
        <div className="login_wrapper">
            {contextHolder}
            <form action='#' className="login" onSubmit={(evt) => {
                evt.preventDefault()
                checkPassword()
            }} >
                <p className="login_text">Вход в систему</p>
                <Input status={statusInput ? ("") : ("error")} value={userNameValue} onChange={onChangeUserName} type="text" placeholder="Логин" className="login_input" />
                <Input status={statusInput ? ("") : ("error")} value={passwordValue} onChange={onChangePassword} type="text" placeholder="Пароль" className="password_input" />
                <Button onClick={checkPassword}>Войти</Button>
                <button className='button_submit' type='submit'></button>
            </form>
        </div>
    )
}

export default Login