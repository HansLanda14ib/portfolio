import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Projects = () => {
    const projects = [
        {
            title: 'PharmaFinder',
            description:
                'A web application to locate nearby pharmacies using Spring Boot and React.',
            technologies: 'Spring Boot, React',
            github: 'https://github.com/HansLanda14ib/PharmaFinder',
        },
        {
            title: 'Library Management',
            description: 'A desktop application for library management using C#.',
            technologies: 'C#',
            github: 'https://github.com/HansLanda14ib/miniprojet_biblio',
        },
        {
            title: 'FFRM Fields and Reservation Management',
            description:
                'A web application for managing fields and reservations using Django and React.',
            technologies: 'Django, React',
            github: 'https://github.com/users/voidnowhere/projects/13',
        },
        // Add more projects here
    ];


    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <Card
                    key={index}
                    title={project.title}
                    style={{marginBottom: '2rem'}}
                >
                    <p>{project.description}</p>
                    <p>
                        <strong>Technologies: </strong>
                        {project.technologies}
                    </p>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View on GitHub
                    </a>
                </Card>
            ))}
        </div>
    );
}
// ...

export default Projects;
