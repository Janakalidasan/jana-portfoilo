import React, { useState } from "react";
import "./About.css";

function About() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  function downloadResume() {
    setIsDownloading(true);
    // Simulate the download process (you can remove this setTimeout in a real application)
    setTimeout(function () {
      setIsDownloading(false);
      setIsDownloaded(true);
    }, 2000); // Replace 3000 with the actual time it takes to download the file
  }
  return (
    <div className="Abouts" id="About">
      <h3>About Us</h3>
      <h6 className="lin"></h6>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="card abt">
              <p>
                I have completed a Bachelor's degree in Mechanical Engineer from
                Thanthai Periyar Government of Institute of Technology and I'm
                currently working with Web Developer from Rectoq Software
                Solution. Since then, I have been exploring different frameworks
                and technologies to expand my knowledge and skills. I'm a
                Frontend Web Developer building the Front-end of Websites and
                Web Applications that leads to the success of the overall
                product. Check out some of my work in the Work section.
              </p>

              <h5>Here are a Few Highlights</h5>
              <ul>
                <li>
                  <p>
                    <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                    Full Stack Web Development
                  </p>
                </li>
                <li>
                  <p>
                    <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                    React Js
                  </p>
                </li>
                <li>
                  <p>
                    <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                    Managing Database
                  </p>
                </li>
                <li>
                  <p>
                    <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                    Wordpress Development
                  </p>
                </li>
              </ul>

              <div className="profile-options">
              <a
                id="download-link"
                href="jana-cv.pdf"
                download="JanaKalidasan.pdf"
              >
                {isDownloading || isDownloaded ? (
                  <button
                    id="download-button"
                    className="btn highlighted-btn"
                    disabled
                  >
                    {isDownloaded ? "Downloaded" : "Downloading..."}
                  </button>
                ) : (
                  <button
                    id="download-button"
                    className="btn highlighted-btn"
                    onClick={downloadResume}
                  >
                    Get Resume
                  </button>
                )}
              </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12"></div>
        </div>
      </div>
    </div>
  );
}
export default About;
