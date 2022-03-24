import logo from './../assets/Dallasville.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function Header() {
    const [sticky, setSticky] = useState(false)
    function handleScroll(e) {
        if(window.scrollY > 130) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    const [hamNav, setHamNav] = useState(false)
    function handleShow() {
        setHamNav(!hamNav)
    }
    return(
        <header className={sticky ? 'sticky' : ''}>
            <img src={logo} alt="" />
            <nav>
                <NavLink  to='/'>HOME</NavLink>
                <NavLink  to='/who-we-are'>WHO WE ARE</NavLink>
                <NavLink  to='/our-projects'>PROJECTS</NavLink>
                <NavLink  to='/what-we-do'>WHAT WE DO</NavLink>
                <NavLink  to='/blog'>BLOG</NavLink>
                <NavLink  to='/get-in-touch'>GET IN TOUCH</NavLink>
            </nav>
            <div className='hamDiv'>
                <FontAwesomeIcon icon={faBars}  onClick={handleShow}/> 
                <nav className={hamNav ? 'show' : ''}>
                    <NavLink  to='/' onClick={handleShow}>HOME</NavLink>
                    <NavLink  to='/who-we-are' onClick={handleShow}>WHO WE ARE</NavLink>
                    <NavLink  to='/our-projects' onClick={handleShow}>PROJECTS</NavLink>
                    <NavLink  to='/what-we-do' onClick={handleShow}>WHAT WE DO</NavLink>
                    <NavLink  to='/blog' onClick={handleShow}>BLOG</NavLink>
                    <NavLink  to='/get-in-touch' onClick={handleShow}>GET IN TOUCH</NavLink>
                </nav>
            </div>
        </header>
    )
}
export default Header