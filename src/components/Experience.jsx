import React from 'react';
import { Card } from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Educational Manager',
            company: 'CPGE IbnGhazi Center',
            period: '2019 - Present',
            description: 'Working as the vice director and managing daily operations.',
        },
        {
            title: 'Summer Intern',
            company: 'AGC Kenitra Company',
            period: 'September 2022',
            description:
                'Developed an application for visualizing the results of AI treatment in glass during a one-month summer internship.',
        },
        // Add more experiences here
    ];

    return (
        <div className="experience-container">
            {experiences.map((experience, index) => (
                <Card
                    key={index}
                    title={experience.title}
                    subTitle={experience.company}
                    style={{ marginBottom: '2rem' }}
                >
                    <p>{experience.period}</p>
                    <p>{experience.description}</p>
                </Card>
            ))}
        </div>
    );
};

export default Experience;
