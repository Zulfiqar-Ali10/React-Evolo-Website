import React, { useEffect } from 'react';


export default function Testimonials() {


  return (
    <>
      <div className="slider-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="/images/testimonials-2-men-talking.svg"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2>Testimonials</h2>

              {/* Card Slider */}
              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">
                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img
                          className="card-image"
                          src="/images/testimonial-1.svg"
                          alt="alternative"
                        />
                        <div className="card-body">
                          <p className="testimonial-text">
                            I just finished my trial period and was so amazed with the
                            support and results that I purchased Evolo right away at the
                            special price.
                          </p>
                          <p className="testimonial-author">Jude Thorn - Designer</p>
                        </div>
                      </div>
                    </div>

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img
                          className="card-image"
                          src="images/testimonial-2.svg"
                          alt="alternative"
                        />
                        <div className="card-body">
                          <p className="testimonial-text">
                            Evolo has always helped our startup to position itself in the
                            highly competitive market of mobile applications. You will not
                            regret using it!
                          </p>
                          <p className="testimonial-author">Marsha Singer - Developer</p>
                        </div>
                      </div>
                    </div>

                    {/* Slide */}
                    <div className="swiper-slide">
                      <div className="card">
                        <img
                          className="card-image"
                          src="/images/testimonial-3.svg"
                          alt="alternative"
                        />
                        <div className="card-body">
                          <p className="testimonial-text">
                            Love their services and was so amazed with the support and
                            results that I purchased Evolo for two years in a row. They are
                            awesome.
                          </p>
                          <p className="testimonial-author">Roy Smith - Marketer</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add Arrows */}
                  <div className="swiper-button-next" aria-label="Next Slide"></div>
                  <div className="swiper-button-prev" aria-label="Previous Slide"></div>
                  {/* end of add arrows */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
