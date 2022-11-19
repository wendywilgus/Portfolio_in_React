import React from "react";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

function Home() {
	return (
		<div>
			<Header />

			<div
				className="introduction flex-with-center"
				style={{ backgroundImage: `url('./splash.jpg')` }}
			>
				<div>
					<h1>Wendy Wilgus</h1>

					<div className="intro-content d-flex justify-content-between">
						<p>
							Full Stack Developer <br /> MERN Stack
						</p>
						<button className="primary-button font-bold">Find Out More</button>
					</div>
				</div>
			</div>

			<Carousel />

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill="#040000"
						fill-opacity="1"
						d="M0,192L20,208C40,224,80,256,120,234.7C160,213,200,139,240,112C280,85,320,107,360,133.3C400,160,440,192,480,208C520,224,560,224,600,192C640,160,680,96,720,96C760,96,800,160,840,165.3C880,171,920,117,960,90.7C1000,64,1040,64,1080,64C1120,64,1160,64,1200,74.7C1240,85,1280,107,1320,128C1360,149,1400,171,1420,181.3L1440,192L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
					></path>
				</svg>
			</div>

			<div className="container">
				<div className="row justify-content-start">
					<div className="col-md-4">
						<div className="n-box2 p-5 font-bold" data-aos="fade-right">
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

			<div className="devstack container my-5 n-box2 py-5">
				<h2 className="font-bold text-center">My Development Stack</h2>
        <div className="femaleDev">
          <img
            src="./femaleDev.svg"
            alt="cartoon image of woman coding"
            className="femaleDev2"
          />
        </div>
				

				<div className="row">
					<div className="col-md-4">
						<div className="font-bold">
							<h3 >Languages</h3>
							<hr />
							<p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript ES6+</p>
							<p>SQL</p>
              <p>NoSQL</p>
						</div>
					</div>

          <div className="col-md-4">
						<div className="font-bold text-center">
							<h3 >Applications</h3>
							<hr />
							<p>Github</p>
              <p>MySQL</p>
              <p>MongoDB</p>
						</div>
					</div>

          <div className="col-md-4">
						<div className="font-bold text-end">
							<h3 className="font-bold">Tools</h3>
							<hr />
							<p>jQuery</p>
              <p>Bootstrap</p>
              <p>Node.JS</p>
              <p>Express.JS</p>
              <p>React.JS</p>
              <p>Handlebars.JS</p>
              <p>GraphQL</p>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Home;
