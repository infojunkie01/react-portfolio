import React from "react";
import ecommerceBackendImg from "../../assets/portfolio/ecommerce-backend.png";
import employeeTrackerImg from "../../assets/portfolio/employee-tracker.png";

const projectList = [
    {
        title: 'E-Commerce Backend',
        image: ecommerceBackendImg,
        preview: 'https://github.com/infojunkie01/ecommerce-backend',
        gitHubLink: 'https://github.com/infojunkie01/ecommerce-backend'
    },
    {
        title: 'Employee tracker',
        image: employeeTrackerImg,
        preview: 'https://github.com/infojunkie01/employee-tracker',
        gitHubLink: 'https://github.com/infojunkie01/employee-tracker'
    },
    {
        title: 'Socialmoodia',
        image: 'https://user-images.githubusercontent.com/85321444/173248243-9efa2d31-4dc0-467d-bf13-4f4e7ba5d8f9.jpg',
        preview: 'https://sheltered-eyrie-00891.herokuapp.com/',
        gitHubLink: 'https://github.com/infojunkie01/socialmoodia'
    },
    {
        title: 'Weather dashboard',
        image: 'https://user-images.githubusercontent.com/70418455/172747171-b4c028cd-5e34-43ad-9030-90b9f6965ef6.png',
        preview: 'https://infojunkie01.github.io/weather-dashboard/',
        gitHubLink: 'https://github.com/infojunkie01/weather-dashboard'
    },
    {
        title: 'Coding quiz',
        image: 'https://user-images.githubusercontent.com/70418455/160320682-0e055dbf-3494-468d-b491-bff82d1bd762.png',
        preview: 'https://infojunkie01.github.io/coding-quiz/',
        gitHubLink: 'https://github.com/infojunkie01/coding-quiz'
    },
    {
        title: 'Note taker',
        image: 'https://user-images.githubusercontent.com/70418455/168679694-2471e760-6204-46a0-86de-1780dc55afc8.png',
        preview: 'https://note-taker-infojunkie01.herokuapp.com/',
        gitHubLink: 'https://github.com/infojunkie01/note-taker'
    }
]

function Project() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {projectList.map((project) => (
                    <div className="project-entry mb-4 p-5 md-4">
                        <h5>{project.title}</h5>
                        <p> <a href={project.gitHubLink} target="_blank">Github </a> </p>
                        <a href={project.preview}> <img src={project.image} width="300" /> </a>
                    </div>
                ))}
            </div>
        </div>

    )
}


export default Project;