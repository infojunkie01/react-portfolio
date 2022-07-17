import React from 'react'
import avatar from "../../assets/about/avatar.png";

function About() {

  return (
    <section className="my-5" >

      <h1 id="about" className="d-flex justify-content-center ">About me</h1>
      <div className="d-flex justify-content-center mb-4">
        <img src={avatar} alt="avatar" className="col-1" />
      </div>
      <p className="col-11">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
      </p>

    </section>
  )
}

export default About