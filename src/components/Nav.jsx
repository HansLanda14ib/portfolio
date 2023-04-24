    import React from 'react';
    import { Button } from 'primereact/button';

    const Nav = ({ onNavClick }) => {
        return (
            <div className="nav">
                <Button label="Home" onClick={() => onNavClick('home')} />
                <Button label="Education" onClick={() => onNavClick('education')} />
                <Button label="Experiences" onClick={() => onNavClick('experience')} />
                <Button label="Projects" onClick={() => onNavClick('projects')} />
                <Button label="Certifications" onClick={() => onNavClick('certifications')} />
            </div>
        );
    };

    export default Nav;