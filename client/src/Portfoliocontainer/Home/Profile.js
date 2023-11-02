import React, { useState } from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
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
    <div className="profile-container" id="Home">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            {/* Your social media links */}
           
            <div className="colz-icon">
            <a href="https://www.facebook.com/profile.php?id=61551426507900" target={"_blank"}>
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="https://www.instagram.com/dev_jana1/" target={"_blank"}>
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/janakalidasan-t-64b35421b/" target={"_blank"}>
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
            </div>
          
          </div>

          <div className="profile-details-name">
            <span className="primery-text">
              Hello, I'M <span className="highlighted-text">JanaKalidasan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primery-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer",
                    500,
                    "Wordpress Developer",
                    500,
                    "Devops",
                    500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I am a dedicated and passionate web developer with several
                months of experience in the field.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire me</button>

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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
