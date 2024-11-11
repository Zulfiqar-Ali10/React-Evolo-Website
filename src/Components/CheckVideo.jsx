import React from 'react';

export default function CheckVideo() {
    return (
        <>
            <div className="basic-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Check Out The Video</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="image-container">
                                <div className="video-wrapper">
                                    <a className="popup-youtube" href="https://www.youtube.com/watch?v=fLCjQJCekTs" data-effect="fadeIn">
                                        <img className="img-fluid" src="./src/images/video-frame.svg" alt="alternative" />
                                        <span className="video-play-button">
                                            <span></span>
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <p>This video will show you a case study for one of our <strong>Major Customers</strong> and will help you understand why your startup needs Evolo in this highly competitive market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
