import React from 'react'
import style from './article.module.css'
import bg from './../../assets/blog.png'
import thought from './../../assets/thought.png'
import dots4 from './../../assets/Group 73.png'
import waves from './../../assets/waveElements3.png'

export default function Poverty() {
  return (
    <div>
        <nav className={style.bg}>
            <img src={bg} alt="" />
        </nav>
        <main className={style.story}>
            <i>
                <img src={dots4} alt="" />
            </i>
            <figcaption>
                <img src={thought} alt="" />
            </figcaption>
            <h2>5 Ways To Break Out Of Poverty, The 6th Will Set You Free</h2>
            <i>
                <img src={waves} alt="" />
            </i>
            <p>The thoughts that we often repeat in our minds influence our behavior and attitude, our actions, reactions, the way we are towards people, and our life in general. Our lives are shaped  by the thoughts we have. A thought repeated always imprints itself strongly into our subconscious mind, which in turn works towards making these thoughts a reality in our lives. While one thought isn’t powerful enough to make changes in our lives, if the same thought is repeated frequently it gains power, becomes stronger, and affects our lives. To shape your life with the power of thoughts, you have to start making changes in your mind. However, it is important to know that one single thought is not strong enough to have impactful changes in your life, but when repeated it gradually gains strength and affects your life. By changing our thoughts, behaviors, and beliefs, we can change our biology. We are the masters of our lives, not our genes.By taking the time to set positive personal intentions, we align with ourselves what we want to  bring into our lives. If we focus on negativity, that’s what our lives will be filled with and the same thing applies when we focus on positivity.</p>
            <form action="">
                <h2>Comments</h2>
                <label htmlFor="">
                    Full Name
                    <input type="text" />
                </label>
                <label htmlFor="">
                    Email
                    <input type="email" />
                </label>
                <label htmlFor="">
                    Message
                    <input type="text"  />
                 </label>
                 <button>Submit</button>
            </form>
        </main>
    </div>
  )
}
