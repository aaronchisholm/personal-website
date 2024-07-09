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
                <img className='mw-100' src='https://media.licdn.com/dms/image/D4E03AQFskYfRhhPX-g/profile-displayphoto-shrink_800_800/0/1672707916909?e=2147483647&v=beta&t=Ib0-uWz7o82vgC6Vf7tYV6Lc8KPo1VhSFtE0hOpttas'></img>
            </div>
            </div>
        </div>
    )
};

export default Home;