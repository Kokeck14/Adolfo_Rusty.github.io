import React from 'react';
import "./Portfolio.css";
import Navbar from "./Navbar";

import oysterVideo from "../videos/oyster.mp4";
import cpsuVideo from "../videos/cpsu.mp4"; 
import ormsVideo from "../videos/orms.mp4";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">Projects</h1>
            <br />
            <hr className="text-white" />
          </div>
          <div className="isotope">
            <div className="row">
              <p className="display-6 text-white">Websites I Created</p>

              {/* First project item */}
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
                <div className="item">
                  <div className="video-container">
                    <video width="100%" controls>
                      <source src={oysterVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
                <div className="item mt-3 text-white">
                  <h5>Rusty's Fresh Oyster</h5>
                  <p>* The Rusty Fresh Oyster project is a dynamic e-commerce platform developed to revolutionize 
                    the online purchase and delivery of fresh oysters. This project serves as a culmination of my
                     IT education, focusing on enhancing accessibility and convenience in the seafood market.</p>

                  <h5>Objectives</h5>
                  
                  <p>* To create a user-friendly website for browsing, selecting, 
                  and purchasing fresh oysters online.</p>
                </div>
              </div>

              {/* Second project item */}
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
                <div className="item">
                  <div className="video-container">
                    <video width="100%" controls>
                      <source src={cpsuVideo} type="video/mp4" />
                      
                    </video>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
                <div className="item mt-3 text-white">
                  <h5>CPSU Complaint Portal</h5>
                  <p>The CPSU Complaint System is a pivotal project developed as part of my IT 
                    education at Central Philippine State University (CPSU). It serves as a robust
                     platform designed to streamline and manage the process of handling complaints
                      within the university community effectively.</p>
                  <h5>Objectives</h5>
                  <p> * To provide a centralized system for submitting, tracking, and resolving complaints raised by students, faculty, and staff.</p>
                  <h5>Secondary Objectives:</h5>
                  <p>* Enhance transparency and accountability in complaint resolution processes.
                    * Improve communication channels between complainants and administrators.
                    Automate workflow to reduce manual intervention and streamline operations.</p>
                    <h5>My Capstone-2 Groupmates help me build this</h5>
                    <p>* Antonete Barile</p>
                    <p>* Joshua Hade </p>
                </div>
              </div>

              {/* Repeat similar structure for other projects */}

              <div className="col-lg-6 mb-4 animate__animated animate__fadeInLeft">
                <div className="item">
                  <div className="video-container">
                    <video width="100%" controls>
                      <source src={ormsVideo} type="video/mp4" />
                      
                    </video>
                  </div>
                  <div className="overlay"></div>
                </div>
              </div>
              <div className="col-lg-6 mb-4 animate__animated animate__fadeInRight">
                <div className="item mt-3 text-white">
                  <h5>Online Resort Management System</h5>
                  <p>The Online Resort Management System (ORMS) is an advanced web-based
                     platform designed to streamline the management and operations of resorts.
                      This system provides a comprehensive solution for resort administrators 
                      to efficiently handle reservations, guest services, billing, and more,
                       enhancing the overall guest experience and operational efficiency.</p>
                  <h5>Objectives</h5>
                  <p> * To develop a user-friendly, scalable, and secure platform for managing resort operations.</p>
                  <h5>Secondary Objectives:</h5>
                  <p>* Automate reservation and booking processes.
                       Provide seamless communication channels between guests and resort staff.
                       Ensure accurate and transparent billing and financial management</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center text-md-left text-light">
              <p> Copy right @ 2024 Rusty's Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
