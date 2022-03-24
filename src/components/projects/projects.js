import React from 'react'
import style from './../projects/Projects.module.css'
import bg from './../../assets/projects.png'
import project1 from './../../assets/project1.png'
import project2 from './../../assets/project2.png'
import project3 from './../../assets/project3.png'
import project4 from './../../assets/project4.png'
import project5 from './../../assets/project5.png'
import project6 from './../../assets/project6.png'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <div className={style.proj}>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <main className={style.projName}>
            <i>
                <img src={dots4} alt="" />
            </i>
        <div>
                    <Link to='/the-twin-tower'>
                        <img src={project1} alt="" />
                        <span>The Twin Tower</span>
                    </Link>
                    <Link to='/cron-apartment'>
                        <img src={project2} alt="" />
                        <span>Corns Apartment</span>
                    </Link>
                    <Link to='/the-edge-car-park'>
                        <img src={project3} alt="" />
                        <span> The Edge Car Park</span>
                    </Link>
        </div>
        <i>
            <img src={waves} alt="" />
        </i>
        <div>
                    <Link to='/harlet'>
                        <img src={project4} alt="" />
                        <span>Harlet</span>
                    </Link>
                    <Link to='/cross-apartments'>
                        <img src={project5} alt="" />
                        <span>Cross Apartments</span>
                    </Link>
                    <Link to='/the-edge'>
                        <img src={project6} alt="" />
                        <span> The Edge</span>
                    </Link>
        </div>
        </main>
    </div>
  )
}
