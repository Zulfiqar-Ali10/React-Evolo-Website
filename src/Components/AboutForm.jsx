import React from 'react';

export default function AboutForm() {
  return (
    <>
      <div id="about" className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>About The Team</h2>
              <p className="p-heading p-large">
                Meet our team of specialized marketers and business developers who
                will help you research new products and launch them in new emerging
                markets.
              </p>
            </div> {/* end of col */}
          </div> {/* end of row */}
          <div className="row">
            <div className="col-lg-12">
              {/* Team Member 1 */}
              <div className="team-member">
                <div className="image-wrapper">
                  <img
                    className="img-fluid"
                    src="/images/team-member-1.svg"
                    alt="Lacy Whitelong, Business Developer"
                  />
                </div> {/* end of image-wrapper */}
                <p className="p-large"><strong>Lacy Whitelong</strong></p>
                <p className="job-title">Business Developer</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Facebook">
                      <i className="fas fa-circle fa-stack-2x facebook"></i>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Twitter">
                      <i className="fas fa-circle fa-stack-2x twitter"></i>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span> {/* end of social-icons */}
              </div> {/* end of team-member */}

              {/* Team Member 2 */}
              <div className="team-member">
                <div className="image-wrapper">
                  <img
                    className="img-fluid"
                    src="/images/team-member-2.svg"
                    alt="Chris Brown, Online Marketer"
                  />
                </div> {/* end of image-wrapper */}
                <p className="p-large"><strong>Chris Brown</strong></p>
                <p className="job-title">Online Marketer</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Facebook">
                      <i className="fas fa-circle fa-stack-2x facebook"></i>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Twitter">
                      <i className="fas fa-circle fa-stack-2x twitter"></i>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span> {/* end of social-icons */}
              </div> {/* end of team-member */}

              {/* Team Member 3 */}
              <div className="team-member">
                <div className="image-wrapper">
                  <img
                    className="img-fluid"
                    src="/images/team-member-3.svg"
                    alt="Sheila Zimerman, Software Engineer"
                  />
                </div> {/* end of image-wrapper */}
                <p className="p-large"><strong>Sheila Zimerman</strong></p>
                <p className="job-title">Software Engineer</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Facebook">
                      <i className="fas fa-circle fa-stack-2x facebook"></i>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Twitter">
                      <i className="fas fa-circle fa-stack-2x twitter"></i>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span> {/* end of social-icons */}
              </div> {/* end of team-member */}

              {/* Team Member 4 */}
              <div className="team-member">
                <div className="image-wrapper">
                  <img
                    className="img-fluid"
                    src="/images/team-member-4.svg"
                    alt="Mary Villalonga, Product Manager"
                  />
                </div> {/* end of image-wrapper */}
                <p className="p-large"><strong>Mary Villalonga</strong></p>
                <p className="job-title">Product Manager</p>
                <span className="social-icons">
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Facebook">
                      <i className="fas fa-circle fa-stack-2x facebook"></i>
                      <i className="fab fa-facebook-f fa-stack-1x"></i>
                    </a>
                  </span>
                  <span className="fa-stack">
                    <a href="#your-link" aria-label="Twitter">
                      <i className="fas fa-circle fa-stack-2x twitter"></i>
                      <i className="fab fa-twitter fa-stack-1x"></i>
                    </a>
                  </span>
                </span> {/* end of social-icons */}
              </div> {/* end of team-member */}

            </div> {/* end of col */}
          </div> {/* end of row */}
        </div> {/* end of container */}
      </div>
    </>
  );
}
