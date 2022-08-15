import React from 'react'
import ProjectCard from '../components/ProjectCard'

import styles from '../styles/Projects.module.css'
const Projects = () => {
  return (
    <div className={styles.container}>
 
    <main className={styles.main} >
    <div className={styles.innerContainer}>
    <div className={styles.portfolio}>
    <div className={`${styles.portfolio_container} row justify-content-center`} > 
                  
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
           
                    
                    </div>
                    </div>
                    </div>
                  
    </main>

    
  </div>
  )
}

export default Projects
