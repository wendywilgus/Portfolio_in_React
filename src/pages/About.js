import React from 'react';
import Header from '../components/Header';

function About() {
    return (
      <div>
        <Header />
        <div className="container mt-10">
				<div className="row justify-content-start">
					<div className="col-md-4">
						<div className="n-box2 p-5 font-bold mt-5  " data-aos="fade-right">
							<h2>Hi, I'm Wendy Wilgus!</h2>
							<p>
								I am a full stack web developer, certified through Georgia Tech.
								I am passionate about building websites and mobile apps with
								mobile-first design and integrated databases.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="row pt-5 justify-content-center">
				<div className="col-md-4">
					<div className="n-box2 p-5" data-aos="fade-up">
						<img
							src="./meBW.png"
							alt="photo of developer"
							className="headshot"
						/>
					</div>
				</div>
			</div>

			<div className="row pt-5 justify-content-end">
				<div className="col-md-4">
					<div className="n-box2 p-5 font-bold" data-aos="fade-left">
						<p>
							I am excited to work in a team environment where I can use my
							problem-solving skills to design solutions with intuitive and
							user-friendly development at the core of each project.{" "}
						</p>
					</div>
				</div>
			</div>

      </div>
    );
  }
  
  export default About;