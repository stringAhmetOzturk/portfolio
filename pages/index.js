import Head from 'next/head'
import Carousel from "../components/carousel"
import Info from '../components/Info'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img src='/myPhoto.jpeg' className={styles.avatar}/>
          <div className={styles.text}>Ahmet Öztürk</div>
        </div>
        
        <Carousel/>
   
      </main>

      
    </div>
  )
}
