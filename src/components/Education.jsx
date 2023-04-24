import React from 'react';
import './Education.css';

const Education = () => {
    const events = [
        {
            title: 'High School Diploma',
            institution: 'Hassan 2 High School',
            year: 2012,
        },
        {
            title: 'Master Degree in Chemistry',
            institution: 'University of Cadi Ayyad',
            year: 2017,
        },
        {
            title: 'Student Engineer, Software Development',
            institution: 'EMSI',
            year: '2021 - Present',
        },
    ];

    return (
        <div className="timeline-container">
            <ul className="timeline">
                {events.map((event, index) => (
                    <li key={index} className="timeline-item">
                        <div className="timeline-item-content">
                            <h4>{event.title}</h4>
                            <p>{event.institution}</p>
                            <p>{event.year}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Education;
