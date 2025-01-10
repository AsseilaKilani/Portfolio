import React, { useEffect, useState } from 'react';
import './../styles/experience.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-item">
                <div className="timeline-content top">
                    <h3>Juillet 2023 - Août 2024</h3>
                    <div className="timeline-icon">🏛️</div>
                    <p className="timeline-description">Mairie de Douai: Animateur en centre de loisir.</p>
                </div>
                <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item">
                <div className="timeline-content bottom">
                    <h3>Juillet/Août 2024</h3>
                    <div className="timeline-icon">📦</div>
                    <p className="timeline-description">AMAZON: Agent de tri.</p>
                </div>
                <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item">
                <div className="timeline-content top">
                    <h3>Septembre 2024</h3>
                    <div className="timeline-icon">🛒</div>
                    <p className="timeline-description">Leclerc: Préparateur de commande.</p>
                </div>
                <div className="timeline-connector"></div>
            </div>
            <div className="timeline-item">
                <div className="timeline-content bottom">
                    <h3>Novembre 2024</h3>
                    <div className="timeline-icon">🍎</div>
                    <p className="timeline-description">Agrafresh: Travail en production alimentaire.</p>
                </div>
                <div className="timeline-connector"></div>
            </div>
            <div className="timeline-arrow"></div>
        </div>
    );
}

function Experiences() {
    return (
        <section id="experiences" className="section6">
            <div className="header-top">
                <div className="numero">7</div>
                <div className="Titre">EXPERIENCES</div>
            </div>
            <Timeline />
        </section>
    );
}

export default Experiences;