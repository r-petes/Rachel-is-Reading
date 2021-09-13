import React from "react";
import headshot from "./images/rachelphoto.jpeg";
 
function About(props) {
  return (
    <div className="container">
      <div className="row"> 
        <p className="page-headers col-12 col-md-2">about</p>
        <div  className="col-12 col-md-10">
          <p className="about-page-info">hi. I'm Rachel. Nice to meet you!</p>
          <div>
            <img src={headshot} alt="Rachel in Rocky Mountain National Park"  id="headshot"/>
          </div>
        </div>
      </div>
      <div className="row"> 
        <p className="page-headers col-12 col-md-2">contact</p>
        <p className="col-12 col-md-10" id="contact-info">rachel.peterson.5683@gmail.com</p>
      </div>
    </div>
  )
}
 
export default About;