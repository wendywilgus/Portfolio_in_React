import React from 'react'

function Home() {
    return (
      <div>
        <div className="introduction flex-with-center" style=
        {{backgroundImage: `url('./splash.jpg')`}}>
          <div>
            <h1>Wendy Wilgus</h1>

            <div className="intro-content d-flex justify-content-between">
              <p>Full Stack Developer <br /> MERN Stack</p>
              <button className='primary-button'>Find Out More</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;