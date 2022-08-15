import React from 'react'
import Image from 'next/image'
import myPhoto from '../public/myPhoto.jpeg'
import styles from '../styles/Projects.module.css'
const ProjectCard = () => {
  return (
    <div className="col col-sm-3 col-11 mb-3 p-3" >
    <div className={`${styles.portfolio_item} mr-3`} >
        <Image src={myPhoto} style={{borderRadius:"10%"}} alt="Download free bootstrap 4 admin dashboard, free boootstrap 4 templates"/>
        <div className={styles.content_holder}>
            <a className="img-popup" href="#"></a>
            <div className="text-holder">
                <h6 className={styles.title}>WEB</h6>
                <p className={styles.subtitle}>Expedita corporis doloremque velit in totam!</p>
            </div>
        </div>   
    </div>             
</div>
  )
}

export default ProjectCard
