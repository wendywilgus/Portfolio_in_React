import React from 'react';
import Carousel from '../components/Carousel';
import Header from '../components/Header';

function Home() {
    return (
      <div>
        <Header />
        <div className="introduction flex-with-center" style=
        {{backgroundImage: `url('./splash.jpg')`}}>
          <div>
            <h1>Wendy Wilgus</h1>

            <div className="intro-content d-flex justify-content-between">
              <p>Full Stack Developer <br /> MERN Stack</p>
              <button className='primary-button font-bold'>Find Out More</button>
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    );
  }
  
  export default Home;