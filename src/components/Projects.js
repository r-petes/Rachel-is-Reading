import React from "react";
import EachProject from "./EachProject";
import savebucks from './projectphotos/savebucksoverview.png';
 
function Projects(props) {
  return (
    <div className="container">
      <div className="row">
        <p  className="page-headers col-12 col-md-2">SaveBucks Web App</p>
        <div className="col-12 col-md-10">
          <EachProject
            link="https://github.com/francestang221/SaveBucks"
            image={savebucks}
            description="This project was created during the Oregon State Spring 2021 Hackathon, 
                          when I had yet to begin any computer science coursework at OSU. 
                          I designed the UI for this project and incorporated the Fetch API method
                          to integrate our coffee type data with the website. I designed this website with Bootstrap
                          to be web- and mobile-responsive."
            tools="JavaScript, HTML, CSS, Fetch API, Bootstrap"
          />
        </div>
      </div>
      <div className="row project-row">
        <p className="page-headers col-12 col-md-2">NYTimes Spelling Bee Helper</p>
        <div className="col-12 col-md-10">
          <EachProject
            link=""
            image=""
            description=""
            tools=""
          />
        </div>
    </div>
  </div>
  )
}
 
export default Projects;
