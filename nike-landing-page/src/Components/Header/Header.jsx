import logo from './Assets/logo.png'
import "./Header.css"
const Header = () =>{

    return(
        <nav className='nav'>
            <div className='brand'>
                <img src={logo} alt="Brand Logo" className='brand-logo' />
            </div>
            <div className='nav-elements'>
                <ul className='nav-list'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>Location</li>
                    <li className='nav-link'>About</li>
                    <li className='nav-link'>Contact</li>
                </ul>
            </div>
            <div>
                <button className='Login-btn'>Login</button>
            </div>
        </nav>
    )
}

export default Header