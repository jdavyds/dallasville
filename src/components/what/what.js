import React from 'react'
import bg from './../../assets/Frame 2.png'
import style from './../what/What.module.css'
import res from './../../assets/Frame 683.png'
import com from './../../assets/Frame 683 (1).png'
import infa from './../../assets/Frame 683 (2).png'
import consult from './../../assets/contact.png'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'

export default function What() {
  return (
    <div className={style.what}>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <section className={style.sect}>
            <i>
                <img src={dots4} alt="" />
            </i>
            <div className={style.types}>
                <nav>
                    <img src={res} alt="" />
                    <h3>Residential Properties</h3>
                    <p>We are keen on truncating the rising demand for housing in Nigeria, and Africa as a whole. ChaviD properties leverages on contemporary architecture and technology to provide innovative premium and luxury housing with well-drawn up building designs, world class infrastructure, and facilities to provide an impeccable ambience.We offer a wide range of property types to accommodate a larger clientele. We perpetually strive to identify homeowners needs, and provide enormous value for money.</p>
                </nav>
                <nav>
                    <img src={com} alt="" />
                    <h3>Commercial Real Estate</h3>
                    <p>We provide solutions for the development of commercial real estate, we create value via directing the design and construction, that reflect the architectural character, values and needs of the communities they serve. We specialize in the design, construction and timely delivery of: Office Buildings, District Markets, Shopping complex, Plazas, & Recreational/Leisure Parks.</p>
                </nav>
                <nav>
                    <img src={infa} alt="" />
                    <h3>Infrastructure</h3>
                    <p>At ChaviD Properties designing, constructing and delivering world-class infrastructure for both private and public projects is one of our key strengths. We have a highly capable team of world class professionals, with numerous years of experience and a strong network of suppliers, vendors. We provide professional services in the areas of engineering, construction and maintenance of various infrastructural project (construction of roads, bridges & other essential infrastructure).</p>
                </nav>
            </div>
            <i>
                    <img src={waves} alt="" />
            </i>
            <div className={style.contact}>
                <div>
                    <h2>Book a Consultation</h2>
                    <figcaption>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    <img src={consult} alt="" />
                    </figcaption>
                </div>
                <form action="submit">
                    <h2>Book a Consultation</h2>
                    <input type="text" placeholder='Enter your full name' />
                    <input type="email" placeholder='Enter your email' />
                    <input type="number" placeholder='Enter your phone number' />
                    <input type="text" placeholder='Talk to us' />
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    </div>
  )
}
