import React from 'react'
import './styles/home.css'
import Social from '../home/Social'
import Data from '../home/Data'
import ScrollDown from '../home/ScrollDown'
import '../home/styles/home.css'


const Home = () => {



  return (
    <main className='home'>
     <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
                <div className="home__img"></div>
                <Data/>
            </div>
            <ScrollDown/>
        </div>

    </section>
    </main>
  )
}

export default Home