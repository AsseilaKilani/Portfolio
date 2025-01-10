import React from 'react';
import './../styles/competences.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';

function Competences() {
    return (
        <section id="competences" className="section2">
            <div className="header-top">
                <div className="numero">3</div>
                <div className="Titre">COMPÉTENCES</div>
            </div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/Développement.png" className="d-block w-100" alt="Développement Web" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/Développement%20Web.png" className="d-block w-100" alt="Développement Web" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/BD.png" className="d-block w-100" alt="Développement Web" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default Competences;