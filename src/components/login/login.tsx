import { useState } from "react"

const Login = () => {
    sessionStorage.username = 'user'
    sessionStorage.password = '3456'

    const [ userNameValue, setUserNameValue ] = useState()
    const [ passwordValue, setPasswordValue ] = useState()

    const onChangeUserName = (evt:any) => {
        console.log(evt)
        setUserNameValue(evt.target.value)
    }

    const onChangePassword = (evt:any) => {
        console.log(evt)
        setPasswordValue(evt.target.value)
    }

    const checkPassword = () => {
        if(userNameValue == sessionStorage.username && passwordValue == sessionStorage.password) {
            alert("Успешно")
        } else {
            alert("Логин, или пароль неверны")
        }
    }

    return (
        <div className="login">
            <input value={userNameValue} onChange={onChangeUserName} type="text" className="login_input" />
            <input value={passwordValue} onChange={onChangePassword} type="text" className="password_input" />
            <button onClick={checkPassword}>Отправить</button>
        </div>
    )
}

export default Login