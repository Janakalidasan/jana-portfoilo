import React from "react";
import "./Resume.css";
import human from "../../asstes/Home/skihuman.png";
import img1 from "../../asstes/Home/01.png";
import img2 from "../../asstes/Home/02.png";
import img3 from "../../asstes/Home/08.png";
import img4 from "../../asstes/Home/04.png";
import img5 from "../../asstes/Home/05.png";
import img6 from "../../asstes/Home/07.png";

function Resume() {
  return (
    <div className="res"  id="project">
      <h3>Resume</h3>
      <h6 className="lin"></h6>
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-12"></div>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card hedas">
            <div className="heads">
              <a href="#education">Education</a>
              <a href="#workhis">Work History</a>
              <a href="#skill">Programming Skills</a>
              <a href="#proj">Project</a>
              <a href="#inter">Interests</a>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-12"></div>
      </div>
      <br></br>
      {/* secon main card */}
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-12"></div>
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="card sect">
            {/* college */}
            <div id="education">
              <div>
                <h3>Education</h3>
                <h5>
                  <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                  &nbsp;&nbsp;Thanthai Periyar Goverment Institute of Technology
                  - Vellore
                </h5>
                <div className="profile-options-1">
                  <p className="highlighted-btn-2">2018-2022</p>
                </div>
                <p>Mechanical Engineer</p>
              </div>
              {/* +2 */}
              <div className="top-sap">
                <h5>
                  <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                  &nbsp;&nbsp;Kalaimagal Matric Hr Sec School
                </h5>
                <div className="profile-options-1">
                  <p className="highlighted-btn-2">2016-2018</p>
                </div>
                <p>Computer Science (HSC)</p>
              </div>
            </div>

            {/* work history */}
            <div id="workhis">
              <div className="top-sap">
                <h3>Work History</h3>
                <br></br>
                <h5>
                  <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                  &nbsp;&nbsp;Wipro (Intern)
                </h5>
                <div className="profile-options-1">
                  <p className="highlighted-btn-2">March-May (2022)</p>
                </div>
                <p>Role : Junior Developer</p>
                <p>Tools Used : Visual Studio Code</p>
                <p>Skills Learned : Html , CSS, C# .</p>
              </div>

              <div className="top-sap">
                <h5>
                  <i class="bx bxs-circle" style={{ color: "#fc1d09" }}></i>
                  &nbsp;&nbsp;Rectoq Software Solution
                </h5>
                <div className="profile-options-1">
                  <p className="highlighted-btn-2">Jan-oct (2023)</p>
                </div>
                <p>Role : Junior Developer</p>
                <p>Tools Used : Visual Studio Code And vs code</p>
                <p>
                  Skills Learned : Html , CSS, js, jquery, Bootsrap,
                  C#,wordpress, sql,Git,{" "}
                </p>
              </div>
            </div>

            {/*Program skills */}

            <br></br>
            <div id="skill">
              <div className="top-sap">
                <h3>Programming Skills </h3>
                <br></br>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div
                      className="skills_data aos-init aos-animate"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx bxl-html5 skill_icon"></i>
                        <span className="skill_name">Html</span>
                      </div>

                      <div>
                        <span className="skill_percentage">95%</span>
                      </div>

                      <div className="skill_bar skill_html"></div>
                    </div>
                    <br></br>

                    <div
                      className="skills_data"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx bxl-css3 skill_icon"></i>
                        <span className="skill_name">CSS3</span>
                      </div>

                      <div>
                        <span className="skill_percentage">85%</span>
                      </div>

                      <div className="skill_bar skill_css"></div>
                    </div>

                    <br></br>
                    <div
                      className="skills_data"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx bxl-javascript skill_icon"></i>
                        <span className="skill_name">JS</span>
                      </div>

                      <div>
                        <span className="skill_percentage">75%</span>
                      </div>

                      <div className="skill_bar skill_js"></div>
                    </div>

                    <br></br>
                    <div
                      className="skills_data"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx  skill_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M16.5 6.08s-6.84 1.71-3.56 5.48c.97 1.11-.25 2.11-.25 2.11s2.45-1.25 1.31-2.85c-1.06-1.47-1.86-2.2 2.5-4.74m-4.47 1.2C16.08 4.08 14 2 14 2c.84 3.3-2.96 4.3-4.33 6.36c-.94 1.4.46 2.91 2.33 4.64c-.71-1.7-3.22-3.16.03-5.72M9.37 17.47c-3.08.86 1.88 2.63 5.79.96c-.38-.15-.75-.33-1.1-.54c-1.36.31-2.76.37-4.14.18c-1.31-.16-.55-.6-.55-.6m5.32-1.68c-1.75.38-3.56.47-5.34.26c-1.31-.13-.45-.77-.45-.77c-3.4 1.13 1.88 2.4 6.6 1.02c-.29-.11-.57-.3-.81-.51m3.42 3.3s.57.47-.61.83c-2.28.68-9.43.89-11.41.03c-.71-.31.63-.74 1.05-.83c.23-.06.46-.08.69-.08c-.79-.54-5.13 1.1-2.19 1.56c7.97 1.3 14.54-.6 12.47-1.51m-2.74-4.86c.29-.19.6-.35.92-.49c0 0-1.51.26-3.02.4c-1.6.16-3.21.18-4.81.06c-2.35-.31 1.29-1.2 1.29-1.2c-1.1 0-2.18.26-3.16.75c-2.05 1 5.1 1.45 8.78.48m.9 2.42c-.02.04-.04.07-.08.1c5.01-1.31 3.17-4.64.77-3.81c-.13.06-.24.14-.31.25c.14-.05.28-.09.43-.12c1.2-.24 2.92 1.63-.81 3.58m.13 4.61c-3.01.52-6.09.56-9.12.14c0 0 .46.38 2.81.53c3.6.23 9.13-.13 9.26-1.83c.03.01-.23.65-2.95 1.16Z"
                              fill="#ff4500"
                            />
                          </svg>
                        </i>
                        <span className="skill_name">java</span>
                      </div>

                      <div>
                        <span className="skill_percentage">85%</span>
                      </div>

                      <div className="skill_bar skill_ui"></div>
                    </div>
                    <br></br>
                    <div
                      className="skills_data"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx  skill_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                              fill="#ff4500"
                            />
                          </svg>
                        </i>
                        <span className="skill_name">Git</span>
                      </div>

                      <div>
                        <span className="skill_percentage">85%</span>
                      </div>

                      <div className="skill_bar skill_ui"></div>
                    </div>

                    <br></br>
                    <div
                      className="skills_data"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx  skill_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19.891 7.788a8.966 8.966 0 0 1 1.099 4.313 8.986 8.986 0 0 1-4.47 7.771l2.746-7.939c.513-1.282.684-2.309.684-3.219a7.165 7.165 0 0 0-.059-.926m-6.651.087a14.14 14.14 0 0 0 1.026-.088c.485-.063.428-.775-.056-.749 0 0-1.463.112-2.4.112-.887 0-2.375-.125-2.375-.125-.487-.024-.55.713-.061.738 0 0 .449.052.938.075l1.399 3.838-1.975 5.899-3.274-9.724a17.006 17.006 0 0 0 1.028-.083c.487-.063.43-.775-.055-.747 0 0-1.455.115-2.395.115-.167 0-.365-.007-.575-.013C6.093 4.726 8.862 3.113 12 3.113c2.341 0 4.471.894 6.071 2.36-.038-.002-.076-.008-.117-.008-.883 0-1.51.77-1.51 1.596 0 .741.427 1.369.883 2.108.343.601.742 1.37.742 2.481 0 .763-.295 1.662-.685 2.899l-.896 2.987-3.25-9.675.002.014zM12 21.087a8.983 8.983 0 0 1-2.54-.364l2.697-7.838 2.763 7.572c.021.044.042.085.065.124a9.016 9.016 0 0 1-2.985.508m-8.99-8.988a8.94 8.94 0 0 1 .778-3.658l4.287 11.749a8.993 8.993 0 0 1-5.065-8.091m8.99-10c-5.513 0-10 4.487-10 10s4.487 10 10 10 10-4.487 10-10-4.487-10-10-10"
                              fill="#ff4500"
                            ></path>
                          </svg>
                        </i>
                        <span className="skill_name">Wordpress</span>
                      </div>

                      <div>
                        <span className="skill_percentage">85%</span>
                      </div>

                      <div className="skill_bar skill_ui"></div>
                    </div>

                    <br></br>
                    <div
                      className="skills_data"
                      data-aos="fade-right"
                      data-aos-delay="250"
                    >
                      <div className="skills_name">
                        <i className="bx  skill_icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="#ff4500"
                          >
                            <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z"></path>
                            <circle cx="15.332" cy="12" r="3.332"></circle>
                          </svg>
                        </i>
                        <span className="skill_name">Figma</span>
                      </div>

                      <div>
                        <span className="skill_percentage">65%</span>
                      </div>

                      <div className="skill_bar skill_ui-f"></div>
                    </div>
                    <br></br>
                  </div>
                  {/* seconfd */}
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={human} className="imgsa"></img>
                  </div>
                </div>
              </div>
            </div>

            {/* work history */}
            <div id="proj">
              <div className="top-sap">
                <h3>Project</h3>
                <br></br>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img1} alt="" className="first-image"></img>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img2} alt="" className="first-image"></img>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img3} alt="" className="first-image"></img>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img4} alt="" className="first-image"></img>
                  </div>
                </div>
                <br></br>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img5} alt="" className="first-image"></img>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={img6} alt="" className="first-image"></img>
                  </div>
                </div>
              </div>
            </div>

            {/* interest */}
            <div id="inter">
              <div className="top-sap">
                <h3>Interest</h3>
                <br></br>
                <p>
                  I am passionate about enhancing my programming skills and
                  expanding my knowledge in technology. To achieve this, I am
                  committed to continuous learning, staying updated with the
                  latest trends, and actively participating in coding projects.
                  Additionally, I aim to collaborate with experienced
                  professionals, read relevant books, and attend relevant
                  workshops to further develop my expertise.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-1 col-sm-12"></div>
      </div>
      <br></br>
    </div>
  );
}
export default Resume;
