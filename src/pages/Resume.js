import React from 'react'
import Header from '../components/Header';

function Resume() {
    return (
      <div>
        <Header />
        <div class="container mt-5">
          <h2>Resume</h2>
          <button  className="primary-button font-bold"><a href="">View as PDF</a></button>
          <hr />
          <h3>Profile</h3>
            <div>                    
              <div class="row">
                <div class="col-md-4">
                </div>  
                <div class="col-md-8">
                  <p>
                  <strong>Team-minded Full-Stack Developer</strong> certified through Georgia Tech Institute with a background in Education. Excited to use my problem-solving, analytical,  and communication skills to work in a collaborative environment focused on building amazing applications through responsive web design.
                  </p>
                </div>
              </div>                 
            </div>
                     
          <hr />

          <h3>Relevant</h3>
          <h3>Experience</h3>
          <br />
          <div class="row">
            <div class="col-md-4">
              <h5>Social Network API</h5>
              <p>November 2022</p>
            </div>
            <div class="col-md-8">
              <p>
                <strong>Web application</strong> where users can share thoughts, react to friends’ thoughts, and  create a friend list. For this project, I utilized Express.js for routing, MongoDB for database and Mongoose.
              </p>
            </div>
              

            <div class="col-md-4">
                <h5>Find My Movie</h5>
                <p>October 2022</p>
            </div>
            <div class="col-md-8">
              <p>
                <strong>Two server-side APIs</strong>were used to create an interactive application that call datas to produce a list of movies as well as details about each. 
                Both the browser and feature are dynamically updated with HTML and CSS.  Additionally, we used local storage to allow a user to create a watch list.  This project was created in a group using Agile methodology. We utilized  Github to plan and track our project, working on branches and merging to main project.
              </p>
            </div>

            <div class="col-md-4">
                <h5>Employee Tracker</h5>
                <p>November 2022</p>
            </div>
            <div class="col-md-8">
              <p>
                <strong>Content management system</strong>(CMS) application that allows managers to view and update a company’s employee database.  This project was built using Node.js, Inquirer.js, and MySQL.
              </p>
            </div>

            <div class="col-md-4">
                <h5>Weather Dashboard</h5>
                <p>October 2022</p>
            </div>
            <div class="col-md-8">
              <p>
                <strong>Server-side API</strong>(CMS) allows users to call data for the current weather and future forecast weather for a particular city.  Both the browser and feature dynamically updated with HTML and CSS.  The application uses local storage to persist data, so that users can create a list of cities to quickly return to their search history. 
              </p>
            </div>
          </div>

          <hr />

          <h3>Additional</h3>
          <h3>Experience</h3>
          <br />
          <div class="row">
            <div class="col-md-4">
              <h5>Educator</h5>
              <p>Fulton & Forsyth Counties, Georgia</p>
              <p>2006 - 2022</p>
            </div>
            <div class="col-md-8">
              <p>
                <strong>For sixteen years</strong>I had a distinguished career in Elementary and Middle Grades Education, teaching grades Pre-Kindergarten through Seventh. I served as grade level chair for Response to Intervention to determine data-driven next steps for students to encourage successful outcomes, behaviorally and academically.  I also analyzed assessment data to assist students in developing long- and short-term goals, often collaborating with a range of professionals to meet individual student’s various needs.

              </p>
            </div>
          </div>
          <hr />

          <h3>Education</h3>
            <br />
            <div>      
              <div class="row">
                <div class="col-md-4">
                  <h5>Georgia Tech Institute of Technolog</h5>
                  <p>Atlanta, GA <br />
                    December 2022			</p>
                </div>
                <div class="col-md-8">
                  <p>
                    <strong>Certificate: Full Stack Web Development</strong>
                  </p>
                </div>
              </div>
              
              <div class="row">
                <div class="col-md-4">
                  <h5>Oglethorpe University</h5>
                  <p>Athens, GA <br />
                    May 2006</p>
                </div>
                <div class="col-md-8">
                  <p>
                    <strong>Master of Arts in Teaching</strong>
                    <br />GPA 4.0, Summa Cum Laude

                  </p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <h5>University of Georgia</h5>
                  <p>Atlanta, GA <br />
                    May 1999</p>
                </div>
                <div class="col-md-8">
                  <p>
                    <strong>B.S.Ed of Communication Sciences and Disorders</strong>
                    <br />GPA 3.74, Cum Laude <br />
                    Golden Key National Honors Society <br />
                    Kappa Alpha Epsilon Honor Society
                  </p>
                </div>
              </div>                      
            </div>
        </div>
      
      </div>
    )};
  
  export default Resume;