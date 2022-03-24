import React from 'react'
import style from './../blog/blog.module.css'
import bg from './../../assets/blog.png'
import shape from './../../assets/shape.png'
import poverty from './../../assets/poverty.png'
import time from './../../assets/first-time.png'
import future from './../../assets/future.png'
import house from './../../assets/houses.png'
import crypto from './../../assets/crypto.png'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <main className={style.stories}>
            <i>
                <img src={dots4} alt="" />
            </i>
            <nav>
                <img src={shape} alt="" />
                <b>How To Shape Your Life With The Power Of Thoughts</b>
                <p>Thoughts are powerful. The thoughts that we often repeat in our minds influence our behavior and attitude, our actions, reactions, the way we are towards people, and our life in general. Our lives are shaped by the thoughts we have. A thought repeated always </p>
                <button><Link to='/how-to-shape-your-life-with-the-power-of-thoughts'> Read More</Link></button>
            </nav>
            <nav>
                <img src={poverty} alt="" />
                <b>5 Ways To Break Out Of Poverty, The 6th Will Set You Free</b>
                <p>Whether poverty is inherited from generation to generation, the inequality between the haves and have-nots is quite devastating and that’s why the need to take back control and better their financial situation keeps many people awake at night. </p>
                <button><Link to='/5-ways-to-break-out-of-poverty'>Read More</Link></button>
            </nav>
            <nav>
                <img src={time} alt="" />
                <b>First-Time Home Buyer Mistakes + Life-Saving Tips To Guide You.</b>
                <p>Thoughts are powerful. The thoughts that we often repeat in our minds influence our behavior and attitude, our actions, reactions, the way we are towards people, and our life in general. Our lives are shaped by the thoughts we have. A thought repeated always </p>
                <button><Link to='/first-time-home-buyer-mistakes'>Read More</Link></button>
            </nav>
            <i>
            <img src={waves} alt="" />
            </i>
            <nav>
                <img src={future} alt="" />
                <b>WHAT IS THE FUTURE OF HOUSING IN THE</b>
                <p>TAnnexing opportunities won’t be possible without you knowing what the future of Housing is and the possible trend to envisage in the coming year most especially for Africa Real Estate market as a developing Economy.</p>
                <button><Link to='/the-future-of-housing-in-the'>Read More</Link></button>
            </nav>
            <nav>
                <img src={house} alt="" />
                <b>REASONS WHY PEOPLE BUILD HOUSES</b>
                <p>Globally, As at 2021, there are over 2.3 billion houses for over 7 billion people in the world and an enormous percentage of the world population are still homeless.</p>
                <button><Link to='/reason-why-people-build-houses'>Read More</Link></button>
            </nav>
            <nav>
                <img src={crypto} alt="" />
                <b>Real Estate: The Crypto You Should Invest In</b>
                <p>You don’t have to buy the dip or stay glued on your computer waiting for the red lines to turn green: one of the many reasons why real estate is the crypto you should invest in. Contrary to popular belief, real estate investment is not only for the rich or famous people.</p>
                <button><Link to='/the-crypto-you-should-invest-in'>Read More</Link></button>
            </nav>
        </main>
    </div>
  )
}
