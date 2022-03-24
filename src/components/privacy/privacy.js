import React from 'react'
import style from './privacy.module.css'
import bg from './../../assets/privacy.png'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'

export default function Privacy() {
  return (
    <div className={style.privacy}>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <main>
            <i>
                <img src={dots4} alt="" />
            </i>
            <h3>Privacy Policy</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget leo gravida senectus at. Habitasse elementum congue sed proin ut. At eu tempus, mi nibh nibh. Mauris tristique eget a eget in. Lectus malesuada in sed tellus volutpat viverra sagittis sit. Tortor non morbi ultricies vel etiam sit risus. Lacus, nisl urna quam sem diam bibendum posuere cursus tincidunt. In commodo aliquam, felis viverra accumsan diam maecenas egestas nunc. Sagittis mi aenean habitant a velit odio at suspendisse ut.</p>
            <p>Auctor adipiscing nunc sollicitudin porttitor ultricies tincidunt elementum a. Sit mi aliquet aliquet turpis ac egestas lorem senectus. Quis odio nulla sed cursus turpis. In feugiat commodo suscipit nisi sed. Nunc habitasse a sed scelerisque  </p>
            <i>
            <img src={waves} alt="" />
            </i>
        </main>
    </div>
  )
}
