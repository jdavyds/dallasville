import React from 'react'
import style from './../contactus/Contact.module.css'
import bg from './../../assets/contactbg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'

export default function Contact() {
  return (
    <div className={style.touch}>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <main className={style.info}>
            <i>
                <img src={dots4} alt="" />
            </i>
            <section>
                <div>
                    <b>Send a Message</b>
                    <p><FontAwesomeIcon className={style.icon} icon={faLocation} />gwarinpa abuja Complex Wuse II</p>
                    <p><FontAwesomeIcon className={style.icon} icon={faPhone} /> (+234) 0803 228 5294</p>
                    <p><FontAwesomeIcon className={style.icon} icon={faEnvelope} />info@dallasvilla.com</p>
                </div>
            </section>
            <i>
                    <img src={waves} alt="" />
            </i>
            <div className={style.form}>
            <form action="submit" method="post">
                <h3>Send A Message</h3>
                <label htmlFor="">
                    Name <input type="text" />
                </label>
                <label htmlFor="">
                    Phone Number <input type="tel" />
                </label>
                <label htmlFor="">
                    Email <input type="email"  />
                </label>
                <label htmlFor="">
                    Message <input type="text"  />
                </label>
                <button type="submit">Send Message</button>
            </form>
            </div>
        </main>
    </div>
  )
}
