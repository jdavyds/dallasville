import React from 'react'
import style from './projects.module.css'
import bg from './../../assets/projects.png'
import wire from './../../assets/wire.png'
import power from './../../assets/power-supply.png'
import cctv from './../../assets/cctv-camera.png'
import elevator from './../../assets/elevator.png'
import img from './../../assets/contact.png'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'

export default function Cron() {
  return (
    <div className={style.cron}>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <section className={style.detail}>
                <i>
                <img src={dots4} alt="" />
                </i>
                <div>
                    <h4>Crons Apartment</h4>
                    <p>Corns Apartments By ChaviD Properties is a luxurious 3bedroom Apartment located in the heart of Jahi District Abuja. It’s designed to cater for individuals with premium taste and class. </p>
                    <div className={style.dip}>
                        <img src={img} alt="" />
                    </div>
                    <h3>Features</h3>
                    <div className={style.cronFeatures}>
                        <nav>
                            <img src={wire} alt="" />
                            <span>Fiber-to-the-home</span>
                        </nav>
                        <nav>
                            <img src={power} alt="" />
                            <span>Power Supply</span>
                        </nav>
                        <nav>
                            <img src={cctv} alt="" />
                            <span>24-hour CCTV with Artificial Intelligence</span>
                        </nav>
                        <nav>
                            <img src={elevator} alt="" />
                            <span>Service Elevator</span>
                        </nav>
                    </div>
                </div>
                <i>
                    <img src={waves} alt="" />
                </i>
                <div className={style.dipp}>
                    <img src={img} alt="" />
                </div>
        </section>
    </div>
  )
}
