import React from 'react';
import resume from "../../assets/resume/resume.pdf";


function Resume() {
  return (
    <section>
      <h2 id="about" className="d-flex justify-content-center ">Resume</h2>
      <div>

        <h5>
          Technologies used:
          </h5>
        <ul>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Boostrap</li>
          <li>JQuery</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>React</li>
        </ul>

        <br></br>
        <h5>View my full resume <a href={resume}>here</a>.</h5>
        
      </div>
    </section>
  );
}
export default Resume;
