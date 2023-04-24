import React from 'react';
import {Card} from 'primereact/card';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import certImage1 from '../assets/1.png';
import certImage2 from '../assets/2.png';
import certImage3 from '../assets/3.png';
import {Carousel} from "primereact/carousel";

const Certifications = () => {
    const certifications = [
        {
            title: 'DevOps, Cloud, and Agile Foundations',
            image: certImage1,
        },
        {
            title: 'Developing Back-End Apps with Node.js and Express',
            image: certImage2,
        },
        {
            title: 'Python Functions, Files, and Dictionaries',
            image: certImage3,
        },
    ]

    const certificationTemplate = (certification) => {
        return (
            <div className="p-col">
                <Card
                    title={certification.title}
                    style={{width: '300px', marginBottom: '2rem'}}
                >
                    <img src={certification.image} alt={certification.title} style={{width: '100%'}}/>
                </Card>
            </div>
        );
    };

    return (
        <div className="certifications-container">
            <Carousel
                value={certifications}
                itemTemplate={certificationTemplate}
                numVisible={3}
                numScroll={3}
                circular
                nextIco={<i className="pi pi-chevron-right"></i>}
                prevIco={<i className="pi pi-chevron-left"></i>}
                responsiveOptions={[
                    {
                        breakpoint: '1024px',
                        numVisible: 3,
                        numScroll: 3,
                    },
                    {
                        breakpoint: '768px',
                        numVisible: 2,
                        numScroll: 2,
                    },
                    {
                        breakpoint: '560px',
                        numVisible: 1,
                        numScroll: 1,
                    },
                ]}
            />
        </div>
    );
};

export default Certifications;
