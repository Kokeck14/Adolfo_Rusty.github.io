import "./Experience.css";
import Navbar from "./Navbar";


import kcat1Image from "../img/kcat1.jpg";
import kcat2Image from "../img/kcat2.jpg";
import kcat3Image from "../img/kcat3.jpg";
import kcat4Image from "../img/kcat4.jpg";


const Experience = () => {
  return (
    <>
      <Navbar />

      

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center text-white">My Experiences</h1>
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <h4><p className="display-6 text-white">OJT at the Office of KCAT at Kabankalan City</p></h4 >
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={kcat1Image} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={kcat2Image} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={kcat3Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={kcat4Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div>
                <p class="text-white" >Visit their Facebook Page</p>
              <a
                  href="https://www.facebook.com/Kcat.kabankalan"
                  className="btn btn-info text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View 
                </a>
              </div>

              <hr />
              

              
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            
          </div>
          <div class="row mt-3">
            <div class="col-md-12 text-center text-md-left text-light">
              <p> Copy rigth @ 2024 Rusty's Portfolio </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Experience;
