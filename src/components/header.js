import logo from './../assets/Dallasville.png';
import { NavLink } from 'react-router-dom';
function Header() {
    return(
        <header>
            <img src={logo} alt="" />
            <nav>
                <NavLink  to='/'>HOME</NavLink>
                <NavLink  to='/who-we-are'>WHO WE ARE</NavLink>
                <NavLink  to='/'>PROJECTS</NavLink>
                <NavLink  to='/what-we-do'>WHAT WE DO</NavLink>
                <NavLink  to='/'>BLOG</NavLink>
                <NavLink  to='/'>GET IN TOUCH</NavLink>
            </nav>
        </header>
    )
}
export default Header