import { useNavigate } from "react-router-dom"
import './header.css'

const Header = () => {
    const redirectTo = useNavigate()
    
    const redirectToFunction = (evt: any) => {
        redirectTo(`${evt.target.id}`)
    }

    return (
        <header className="header_wrapper">
            <div className="header container">
                <p id="/posts" className="header_link" onClick={redirectToFunction}>Posts</p>
                <p id="/todo" className="header_link" onClick={redirectToFunction}>Todo</p>
            </div>
        </header>
    )
}

export default Header