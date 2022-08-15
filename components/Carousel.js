import React from 'react'
import Image from "next/image"
import styles from '../styles/Home.module.css'

const Carousel = () => {
  return (
<div id="carouselExampleControls" className={`carousel slide ${styles.carouselContainer}`} data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <h1>Hi there!
I'm Ahmet from Istanbul,Turkey.
I'm a full stack developer, with over 3 years of experience in Node.js, Javascript, HTML, React, and CSS.</h1>
    </div>
    <div className="carousel-item">
    <h1>I'm constantly working on numerous side projects, which means I'm constantly introduced to dozens of languages and libraries.</h1>
    </div>
    <div className="carousel-item">
      

      <p>My top talents include, but are not limited to:<br/>* Node.js Development
      <br/>* Electron.js Developmet
      <br/>     * Backend Web Development
      <br/>     * Flutter Mobile App Development
      <br/>     * Chrome Extension Development
      <br/>    * Frontend Web Development (if design is provided)
      <br/>    * React Framework (Next.js included)
      <br/>     * Python Development
      <br/>     * Automation Scripts with Python
      <br/>     * API Integrations
      <br/>    * Web Scraping with Selenium
      <br/>     * MERN Stack Development
      </p>


      

    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carousel
