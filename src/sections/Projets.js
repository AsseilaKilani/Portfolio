import React, { useEffect, useState } from 'react';
import './../styles/projets.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';

function Projets({ handleImageClick, showImage, handleCloseImage }) {
    return (
        <section id="projets" className="section3">
            <div className="header-top">
                <div className="numero">4</div>
                <div className="Titre-noir">PROJETS</div>
            </div>
            <div className="card-deck">
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/images/bomber.gif" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bomberman</h5>
                        <p className="card-text">Application en groupe qui reprend le bomberman..</p>
                        <button className="btn btn-primary" onClick={handleImageClick}>Voir l'image</button>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="/images/img/logo.png" className="card-img-top" alt="logo"
                         style={{ width: '80%', height: 'auto', justifyContent: "center", marginLeft: "28px" }} />
                    <div className="card-body">
                        <h5 className="card-title">Amateur League</h5>
                        <p className="card-text">Projet en groupe d'un site statique</p>
                        <a href="/société.html" className="btn btn-primary">Aller sur le site</a>
                    </div>
                </div>
            </div>
            {showImage && (
                <div className="overlay" onClick={handleCloseImage}>
                    <img src="/images/bomberimage.png" alt="Bomberman" className="fullscreen-image" />
                </div>
            )}
        </section>
    );
}

export default Projets;