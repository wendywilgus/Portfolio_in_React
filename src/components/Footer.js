import React from "react";
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {
    return(
        <div>
            <div className="footer">   
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0b052a" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,218.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            
            <div className="row justify-content-center footer-content">
                <div className="col-md-6">
                    <div className="div font-bold">
                        <p>CONTACT ME</p>
                        <hr />

                        <div className="d-flex justify-content-around">
                            <a href="https://www.linkedin.com/in/wendy-wilgus-750b00a1/"><FaLinkedinIn className="footer-icons"/></a>
                            <a href="https://github.com/wendywilgus"><FaGithub className="footer-icons"/></a>
                            <a href='mailto:wilguswendy@gmail.com'><AiOutlineMail className="footer-icons"/> </a>
			
		
                        </div>
                        <hr />
                        
                        <br />
                        <p className="font-bold">Designed & Developed by Wendy Wilgus 2022</p>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    );
}
export default Footer;