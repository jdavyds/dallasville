import React from 'react'
import bg from './../../assets/Frame 2 (1).png'
import styles from './../whoweare/Who.module.css'
import who from './../../assets/who.png'
import waves from './../../assets/waveElements2.png'
import member1 from './../../assets/Frame 672.png'
import member2 from './../../assets/Frame 673.png'
import member3 from './../../assets/Frame 674.png'
import member4 from './../../assets/Frame 675.png'
import member5 from './../../assets/Frame 676.png'
export default function Who() {
  return (
    <div className={styles.who}>
        <nav className={styles.bg}>
            <img src={bg} alt="" />
        </nav>
        <section className={styles.info}>
                <div>
                    <span>
                        <nav></nav>
                        <img src={who} alt="" />
                        <i></i>
                    </span>
                </div>
                <div>
                    <h4>Who We Are</h4>
                    <p>ChaviD Properties limited is one of the leading contemporary Real Estate companies, with primary engagement in Property development, General construction, and Investment. </p>
                    <p>We provide uniquely high-quality residential and commercial properties that provide value and complete satisfaction to our clients. We are Client-focused and Result-driven. A company that pays meticulous attention to details. Led by a dedicated team of top-notch professionals and investors.
                    </p><p>Integrity, Quality, Perpetual Innovation, and Surpassing Expectations are core values that form the very foundation of our organization.
                    </p>
                    <p>We are set to perpetually raise the bar of luxury living in Africa and beyond. We Think, We Create, We Build.</p>
                </div>
            </section>
            <section className={styles.statements}>
                <h3>We Make A Mark</h3>
                <div>
                    <nav>
                        <b>Mission</b>
                        <p>To offer a wide range of well-designed, functional home furnishing products at prices so low, that as many people as possible will be able to afford them.</p>
                    </nav>
                    <nav>
                        <b>Vision</b>
                        <p>The Vision of dallasville is to represent the highest level of excellence while mitigating the pan-African housing deficit.</p>
                    </nav>
                    <nav>
                        <b>Our Values</b>
                        <p>Integrity, Quality, Perpetual Innovation and Surpassing Expectations are core values that form the very foundation of our organization. We are set to perpetually raise the bar of luxury living in Africa and beyond. We Think, We Create, We Build.</p>
                    </nav>
                </div>
                <i>
                    <img src={waves} alt="" />
                </i>
            </section>
            <section className={styles.team}>
                <h3>Our Team</h3>
                <p>Our team comprises of highly skilled and well-motivated individuals with extensive experience and knowledge about <br /> the workings of the real estate market. Aligning Alphato Construction & Property Development values, the Senior <br /> Management team are responsible for driving company performance.</p>
                <div>
                    <img src={member1} alt="" />
                    <img src={member2} alt="" />
                    <img src={member3} alt="" />
                    <img src={member4} alt="" />
                    <img src={member5} alt="" />
                </div>
            </section>
    </div>
  )
}
