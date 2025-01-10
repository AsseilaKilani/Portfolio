import React, { useEffect, useState } from 'react';
import './../styles/personnalite.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';

function Personnalite() {
    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.image-container');
            elements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    setTimeout(() => {
                        element.classList.add('show');
                    }, index * 200); // Delay for transition effect
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const images = [
        { src: '/images/question.png', title: 'Curieux' },
        { src: '/images/dynamique.png', title: 'Dynamique' },
        { src: '/images/apprentissage.png', title: 'Réfléchie' },
        { src: '/images/courage.png', title: 'Autonome' },
        { src: '/images/gestion-de-projet.png', title: 'Organisé' },
    ];

    return (
        <section id="personnalite" className="section4">
            <div className="header-top">
                <div className="numero">5</div>
                <div className="Titre">PERSONNALITE</div>
            </div>
            <div className="image-line">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
                        <div className="image-title">{image.title}</div>
                        <img src={image.src} alt={image.title} />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Personnalite;