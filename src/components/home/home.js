import intro from './../../assets/home.png'
import list from './../../assets/list.png'
import automation from './../../assets/automation.png'
import bed from './../../assets/double-bed.png'
import parking from './../../assets/parking .png'
import thunderbolt from './../../assets/thunderbolt.png'
import security from './../../assets/cctv .png'
import project1 from './../../assets/project1.png'
import project2 from './../../assets/project2.png'
import project3 from './../../assets/project3.png'
import smartHome from './../../assets/smart-home.png'
import consult from './../../assets/contact.png'
import print from './../../assets/fingerprint.png'
import wire from './../../assets/wire.png'
import power from './../../assets/power-supply.png'
import cctv from './../../assets/cctv-camera.png'
import elevator from './../../assets/elevator.png'
import dots from './../../assets/Group 1703.png'
import dots4 from './../../assets/Group 73.png'
import ellipse from './../../assets/Ellipse 1.png'
import twist from './../../assets/Vector 103.png'
import dots2 from './../../assets/Group 1761.png'
import waves from './../../assets/waveElements.png'
import dots3 from './../../assets/Group 1762.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import style from './Home.module.css'
export default function Home() {
    return(
        <main>
            {/* INTRO */}
            <section className={style.intro}>
                <div>
                    <nav>
                        <img src={dots} alt="" />
                    </nav>
                    <h2>Modern house <br /> your best home</h2>
                    <span></span>
                    <p>Buy from us and live smart</p>
                    <button>Get in touch <FontAwesomeIcon icon={faArrowRight} className={style.arrow} /></button>
                    <nav>
                        <img src={twist} alt="" />
                    </nav>
                </div>
                <img src={intro} alt=""  className={style.introImg}/>
                <nav>
                        <img src={ellipse} alt="" />
                </nav>
            </section>
            {/* ABOUT */}
            <section className={style.about}>
                <div>
                    <h4>About Us</h4>
                    <span>
                        <nav></nav>
                        <img src={intro} alt="" />
                        <i></i>
                    </span>
                </div>
                <div>
                    <h4>About Us</h4>
                    <p>Dallas Ville is a leading realty, property development and marketing company. We have established our presence as an industry leader with over a thousand of experienced and well-motivated human capital.</p>
                    <button>Projects</button>
                </div>
            </section>
            {/* FEATURES */}
            <section className={style.features}>
                <i>
                    <img src={dots2} alt="" />
                </i>
                <h3>Our Features</h3>
                <div>
                    <nav>
                        <img src={smartHome} alt="" />
                        <span>Smart Home</span>
                    </nav>
                    <nav>
                        <img src={wire} alt="" />
                        <span>Fiber-to-the-home</span>
                    </nav>
                    <nav>
                        <img src={print} alt="" />
                        <span>Biometric Access</span>
                    </nav>
                    <nav>
                        <img src={power} alt="" />
                        <span>Power Supply</span>
                    </nav>
                    <nav>
                        <img src={cctv} alt="" />
                        <span>24-hour CCTV with Artificial Intelligenc</span>
                    </nav>
                    <nav>
                        <img src={elevator} alt="" />
                        <span>Service Elevator</span>
                    </nav>
                </div>
                <i>
                    <img src={waves} alt="" />
                </i>
            </section>
            {/* LISTS */}
            <section className={style.list}>
                <div>
                    <h3>3-Bedroom Luxury Apartment</h3>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Built up area of 142sqm
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Designated parking area
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Service elevator
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Fully Pre-wired Smart Home Technology (individual owners simply connect or upgrade as preferred)
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> High-speed broadband fiber optic intern(fibre – to – the – home)
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> 24-hours uninterrupted power supply
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> High Tech Security
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Centrally controlled 24hour CCTV with Artificial Intelligence (AI) capabilities including:
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Motion Detection
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Facial Recognition
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Automatic Number Plate Recognition (ANPR)
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Smart Security Lights
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Full Facility Management Services
                        </p></li>
                        <li>
                            <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Standard FCT infrastructure
                        </p></li>
                    </ul>
                </div>
                <div>
                    <h3>3-Bedroom Luxury Apartment</h3>
                    <img src={list} alt="" />
                </div>
            </section>
            <section className={style.projects}>
                <h3>Our Projects</h3>
                <div>
                    <nav>
                        <img src={project1} alt="" />
                        <span>The Twin Tower</span>
                    </nav>
                    <nav>
                        <img src={project2} alt="" />
                        <span>Corns Apartment</span>
                    </nav>
                    <nav>
                        <img src={project3} alt="" />
                        <span> The Edge Car Park</span>
                    </nav>
                </div>
            </section>
            <section className={style.plans}>
                <h3> Sycamore Apartment Selling</h3>
                <nav className={style.dottt}>
                    <img src={dots3} alt="" />
                </nav>
                <div>
                    <nav>
                        <h4>PLAN A: <br /> (OFF PLAN)</h4>
                        <h3>N38,000,000</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> All Prices are VAT inclusive.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Our State of Art Facilities and Services Includes: Paved Parking Areas, Underground Drainages and Electrical Cabling, Gatehouse intercom, CCTV, Dedicated power Transformer, Synchronised/ Standby Power Generator, Flowered Balconies, Private Guards, Many more exciting features.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p>  5% Discount on every group purchase for full payments only available for a five-person group.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> 3% Discount on installments group purchase </p>
                            </li>
                        </ul>
                        <p className={style.more}>This stunning building offers 3-bedroom apartments, each of which features an optimally laid out living area, a master bedroom and two other bedrooms all en-suite. A jewel of finely-balanced proportions, this building offers a master bedroom, two large bedrooms – all en-suite with bathrooms – and an optimally laid-out living area.</p>
                    </nav>
                    <nav>
                        <h4>PLAN B: <br /> (12 MONTHS)</h4>
                        <h3>N40,000,000</h3>
                        <p className={style.install}>First Installment - 30% (N12,000,000) <br /> Second Installment - 30% (N12,000,000) <br /> Third Installment - 20% (N8,000,000) <br /> Fourth Installment - 20% (N8,000,000)</p>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> All Prices are VAT inclusive.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Our State of Art Facilities and Services Includes: Paved Parking Areas, Underground Drainages and Electrical Cabling, Gatehouse intercom, CCTV, Dedicated power Transformer, Synchronised/ Standby Power Generator, Flowered Balconies, Private Guards, Many more exciting features.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p>  5% Discount on every group purchase for full payments only available for a five-person group.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> 3% Discount on installments group purchase</p>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <h4>PLAN C: <br /> (16 MONTHS)</h4>
                        <h3>N42,000,000</h3>
                        <p className={style.install}>First Installment - 20% (N8,400,000) <br /> Second Installment - 20% (N8,400,000) <br /> Third Installment - 20% (N8,400,000) <br /> Fourth Installment - 20% (N8,400,000) <br /> Fifth Installment - 20% (N8,400,000)</p>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> All Prices are VAT inclusive.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> Our State of Art Facilities and Services Includes: Paved Parking Areas, Underground Drainages and Electrical Cabling, Gatehouse intercom, CCTV, Dedicated power Transformer, Synchronised/ Standby Power Generator, Flowered Balconies, Private Guards, Many more exciting features.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p>  5% Discount on every group purchase for full payments only available for a five-person group.</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheck} className={style.tick} /> <p> 3% Discount on installments group purchase</p>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <img src={automation} alt="" />
                        <span>Home automation</span>
                    </nav>
                    <nav>
                        <img src={bed} alt="" />
                        <span>3 Bedrooms</span>
                    </nav>
                    <nav>
                        <img src={parking} alt="" />
                        <span>Car Parking</span>
                    </nav>
                    <nav>
                        <img src={thunderbolt} alt="" />
                        <span>Undiluted Power</span>
                    </nav>
                    <nav>
                        <img src={security} alt="" />
                        <span>High Tech Security</span>
                    </nav>
                </div>
            </section>
            {/* TESTIMONIALS */}
            <section className={style.testimony}>
                <div></div>
                <div>
                <h3>Testimonials</h3>
                <p>Here's what they have to say</p>
                <blockquote>
                "I strongly recommend real estate to EVERYONE interested in running a successful online business! I like real estate more and more each day because it makes my life a lot easier."
                </blockquote>
                <span>Joy Ola <br /> <FontAwesomeIcon icon={faStar} className={style.star} /><FontAwesomeIcon icon={faStar} className={style.star} /><FontAwesomeIcon icon={faStar} className={style.star} /><FontAwesomeIcon icon={faStar} className={style.star} /><FontAwesomeIcon icon={faStar} className={style.star} /></span>
                </div>
            </section>
            {/* CONTACT */}
            <section className={style.contact}>
                <div>
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
            </section>
            {/* NEWSLETTER */}
            <section className={style.newsletter}>
                <div>
                <nav>
                    <h3>Sign up for our newsletter <br /> to get more information</h3>
                    <p>21st Century Luxury Homes We are set to perpetually raise the bar of luxury living in Africa and beyond. We Think, We Create, We Build and here are some of our core expertise.</p>
                </nav>
                <nav>
                    <span>
                    <input type="email" placeholder='Enter Your Email Address..' />
                    <button>Subscribe</button>
                    </span>
                </nav>
                </div>
                <nav className={style.dott}>
                    <img src={dots4} alt="" />
                </nav>
            </section>
        </main>
    )
}