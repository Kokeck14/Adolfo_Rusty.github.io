import "./Experience.css";
import Navbar from "./Navbar";


import orms1Image from "../img/orms1.jpeg";
import orms4Image from "../img/orms4.jpeg";
import cms1Image from "../img/cms1.jpeg";
import cms3Image from "../img/cms3.jpeg";
import house1Image from "../img/house1.jpeg";
import house2Image from "../img/house2.jpeg";

const Experience = () => {
  return (
    <>
      <Navbar />

      

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <h1 className="mt-5 display-1 text-center">My Experience</h1>
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-6">My Experience is making Websites for my CAPSTONE and</p>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={orms1Image} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={orms4Image} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={cms1Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={cms3Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={house1Image} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={house2Image} alt="three" />
                  <div class="overlay"></div>
                </div>
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
        </div>
      </footer>
    </>
  );
};

export default Experience;
