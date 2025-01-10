import React, { useEffect, useState } from 'react';
import './../styles/loisirs.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';

function RandomIcons() {
    const icons = ['🎨', '🎮', '🎵', '📚', '🏃‍♂️', '🏊‍♂️', '🧘‍♂️'];
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const newPositions = icons.map(() => ({
            top: Math.random() * 80 + 10 + '%',
            left: Math.random() * 80 + 10 + '%',
        }));
        setPositions(newPositions);
    }, []);

    return (
        <div className="random-icons">
            {icons.map((icon, index) => (
                <div
                    key={index}
                    className="icon"
                    style={{
                        top: positions[index]?.top,
                        left: positions[index]?.left,
                        animationDelay: `${index * 0.5}s`,
                    }}
                >
                    {icon}
                </div>
            ))}
        </div>
    );
}

function Loisirs() {
    return (
        <section id="loisirs" className="section5">
            <div className="header-top">
                <div className="numero">6</div>
                <div className="Titre-noir">LOISIRS</div>
            </div>
            <RandomIcons />
        </section>
    );
}

export default Loisirs;