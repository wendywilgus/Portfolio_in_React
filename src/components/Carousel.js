import React from 'react';
import {FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaReact} from 'react-icons/fa';
import {DiMysql, DiMongodb} from 'react-icons/di';

function Carousel() {
    return (
        <div className="bg-black">
            
            <div className="carousel-parent position-relative" id="carousel">
                <h1 className="position-absolute top-0 start-0 end-0 text-center">Skills & Technologies</h1>

                <div className="gallery">
                    <span style={{'--i' : 1}}>
                        <FaReact color='cyan'/>
                    </span>
                    <span style={{'--i' : 2}}>
                        <FaBootstrap color='purple'/>
                    </span>
                    <span style={{'--i' : 3}}>
                        <FaCss3 color='blue' />
                    </span>
                    <span style={{'--i' : 4}}>
                        <FaHtml5 color='orange'/>
                    </span>
                    <span style={{'--i' : 5}}>
                        <FaNodeJs color='green'/>
                    </span>
                    <span style={{'--i' : 6}}>
                        <DiMysql color='orange'/>
                    </span>
                    <span style={{'--i' : 7}}>
                        <DiMongodb color='green' />
                    </span>
                </div>

            </div>

            
        </div>
    ) 
}

export default Carousel