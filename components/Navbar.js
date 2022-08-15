import React from 'react'
import styles from '../styles/Layout.module.css'
import Link from 'next/link';
const Navbar = () => {
  return (

<nav className="navbar navbar-expand-lg fixed-top  p-3 ">
  <div className="container-fluid">
  <Link href="/"><a className="navbar-brand text-light"><span className={styles.portfolio}>Portfolio</span></a></Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav m-auto">
      <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" href="https://www.instagram.com/ahmet.oztuurkk/"><a className="nav-link text-light" ><i className="bi bi-instagram"></i></a></Link>
        </li>
      <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" href="mailto:ahmet.oeztuerk34@gmail.com"><a className="nav-link text-light" ><i className="bi bi-google"></i></a></Link>
        </li>
      <li className="nav-item">
          <Link  aria-current="page" href="https://www.linkedin.com/in/ahmet-%C3%B6zt%C3%BCrk-49903b210/"><a className="nav-link text-light" ><i className="bi bi-linkedin"></i></a></Link>
        </li>
      <li className="nav-item">
          <Link aria-current="page" href="https://github.com/stringAhmetOzturk?tab=repositories"><a className="nav-link text-light" ><i className="bi bi-github"></i></a></Link>
        </li>
        <li className="nav-item">
          <Link  aria-current="page" href="/"><a className="nav-link text-light" >Home</a></Link>
        </li>
        <li className="nav-item">
          <Link  href="/projects"><a className="nav-link text-light">Projects</a></Link>
        </li>
        <li className="nav-item">
          <Link  href="/about"><a className="nav-link text-light">About</a></Link>
        </li>
        <li className="nav-item">
          <Link  href="/blog"><a className="nav-link text-light" >Blog</a></Link>
        </li>
        <li className="nav-item">
          <Link  href="/contact"><a className="nav-link text-light" >Contact</a></Link>
        </li>
        
        
      
      </ul>
      
    </div>
  </div>
</nav>);
}

export default Navbar
