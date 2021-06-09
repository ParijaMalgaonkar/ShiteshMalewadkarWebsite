import React from 'react'
import styles from './Home.module.css'
import hsi from '../../Assests/hsi.svg'

function Home() {
    return (
        <div className={styles.maindiv}>
            <h1>Home Screen</h1>
            <img src={hsi} alt="Image"/>
        </div>
    )
}

export default Home
