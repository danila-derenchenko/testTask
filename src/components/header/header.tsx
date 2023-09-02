import './header.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { actions } from '../../store/reducers'

const Header = () => {
    const redirectTo = useNavigate()
    const dispatch = useDispatch()
    
    const redirectToFunction = (evt: any) => {
        redirectTo(`${evt.target.id}`)
    }

    const logoutFunction = () => {
        dispatch(actions.logout())
        redirectTo('/login')
    }

    return (
        <header className="header_wrapper">
            <div className="header container">
                <p id="/posts" className="header_link" onClick={redirectToFunction}>Posts</p>
                <p id="/todo" className="header_link" onClick={redirectToFunction}>Todo</p>
                <p className="header_link" onClick={logoutFunction}>Logout</p>
            </div>
        </header>
    )
}

export default Header