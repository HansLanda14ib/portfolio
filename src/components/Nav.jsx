import React from 'react';
import { Button } from 'primereact/button';

const Nav = ({ onNavClick }) => {
    return (
        <div className="nav">
            <Button label="Accueil" onClick={() => onNavClick('home')} />
            <Button label="Formations" onClick={() => onNavClick('education')} />
            <Button label="Expériences" onClick={() => onNavClick('experience')} />
            <Button label="Projets" onClick={() => onNavClick('projects')} />
            <Button label="Certifications" onClick={() => onNavClick('certifications')} />
        </div>
    );
};

export default Nav;