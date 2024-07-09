import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.Home}>
            <div className='row container mx-5 py-4'>
            <div className='col-8'>
            <h4> Hey there, I'm Aaron. </h4>
            <p className='text-color-'> Welcome to my personal website! I built this site using React to host my online project portfolio, share some of my personal thoughts in a blog, and provide a centralized resource for all of my relevant links. If you are interested in reaching out, I am always happy to chat about projects, career and other professional opportunities, or just about myself! </p>
            </div>
            <div className='col-4'>
                <img className='mw-100' src='https://media.licdn.com/dms/image/D4E03AQExAEEJtkuEXg/profile-displayphoto-shrink_400_400/0/1714525305864?e=1726099200&v=beta&t=GC5iSOQkGZSVTjmvU3mVm-w-iHEnjd91OcArY_7qbjQ' alt='This should be what I look like :)'></img>
            </div>
            </div>
        </div>
    )
};

export default Home;