import React from 'react'
import Header from '../components/Header';
import {FaLaptopCode} from 'react-icons/fa';
import portfolioData from './PortfolioData';
import { createPortal } from 'react-dom';


function Portfolio() {
    return (
      <div>
        <Header />
        <div className="container portfolio-intro">
          <div className="row flex-width-center mt-5">
            <div className="col-md-6 n-box2 h-100 px-3 py-5" data-aos='fade-down'>
              <div>
                <h1 className="font-bold">Portfolio</h1>
                <p className="font-bold">Take a look at some of the projects I have completed using front-end and back-end technologies.</p>
                <button className="primary-button portfolio-btn"><a href="#portfolio-list" className='white'>Get Started</a></button>
              </div>
            </div>

            <div className="col-md-6 position-relative">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#800080" d="M51.1,-69.2C66.9,-58.9,80.9,-44.8,86.7,-27.9C92.6,-11,90.5,8.9,83.5,26.2C76.6,43.5,64.8,58.3,50.1,69.7C35.4,81.2,17.7,89.3,-0.3,89.8C-18.4,90.3,-36.8,83.1,-50.9,71.5C-65.1,59.8,-75.1,43.7,-81.1,26.1C-87.1,8.6,-89.1,-10.5,-83.6,-27C-78.1,-43.5,-64.9,-57.4,-49.8,-67.9C-34.6,-78.4,-17.3,-85.5,0.2,-85.8C17.7,-86,35.3,-79.5,51.1,-69.2Z" transform="translate(100 100)" />
              </svg>

              <FaLaptopCode color="white" size ="150" className="position-absolute top-50 start-50 translate-middle" />
            </div>
          </div>
        </div>

        <div className="container portfolio-list">
          <h3 className='font-bold'>My Projects</h3>
          <hr />

          <div className='row' id="portfolio-list">

              {portfolioData.map(Portfolio => {
                return <div className='col-md-4'>
                  <div className='portfolio position-relative '>
                    <img className="portfolio-image " src={Portfolio.image} style={{ background: "cover" }}/>
                    <div className='portfolio-content'>
                      <h5>{Portfolio.title}</h5>
                      <p>{Portfolio.description}</p>
                      <button className='primary-button'><a href={Portfolio.code}>Code</a></button>
                      <button className='primary-button'><a href={Portfolio.demo}>Demo</a></button>

                    </div>
                  </div>
                </div>
              })}
          </div>
        </div>
      </div>

      
    );
  }
  
  export default Portfolio;