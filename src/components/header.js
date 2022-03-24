import logo from './../assets/Dallasville.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return(
        <header>
            <img src={logo} alt="" />
            <nav>
                <NavLink  to='/'>HOME</NavLink>
                <NavLink  to='/who-we-are'>WHO WE ARE</NavLink>
                <NavLink  to='/our-projects'>PROJECTS</NavLink>
                <NavLink  to='/what-we-do'>WHAT WE DO</NavLink>
                <NavLink  to='/blog'>BLOG</NavLink>
                <NavLink  to='/get-in-touch'>GET IN TOUCH</NavLink>
            </nav>
            <FontAwesomeIcon icon={faBars} className='ham' /> 
        </header>
    )
}
export default Header