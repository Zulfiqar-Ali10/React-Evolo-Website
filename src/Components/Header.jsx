import React from 'react'

export default function Header() {
  return (
   <>
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1><span className="turquoise">StartUp Landing</span> Page Template Free</h1>
                            <p className="p-large">Use Evolo free landing page template to promote your business startup and generate leads for the offered services</p>
                            <a className="btn-solid-lg page-scroll" href="#services">DISCOVER</a>
                        </div> 
                    </div> 
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="./images/header-teamwork.svg" alt="alternative" />
                        </div> 
                    </div>
                </div>
            </div> 
        </div>
    </header>
   </>
  )
}
