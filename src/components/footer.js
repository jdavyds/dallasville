import logo from './../assets/Dallasville.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return(
        <footer>
            <section>
            <div>
                <img src={logo} alt="" />
                <p>We provide uniquely high quality residential and commercial properties that provides value and complete satisfaction to our clients.</p>
            </div>
            <div>
                <nav>
                    <Link to='/'>About</Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Terms of Service</Link> 
                </nav>
                <nav>
                    Follow Us <br />
                    <FontAwesomeIcon icon={faFacebook} className='socials' />
                    <FontAwesomeIcon icon={faTwitter} className='socials' />
                    <FontAwesomeIcon icon={faInstagram} className='socials' />
                </nav>
            </div>
            </section>
            <section className='copyright'>
                COPYRIGHT © 2022.DALLASVILLE  ALL RIGHTS RESERVED
            </section>
        </footer>
    )
}