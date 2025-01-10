import React, { useEffect, useState } from 'react';
import './../styles/profil.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';


function AccordionItem({ title, content, isOpen, onClick }) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" onClick={onClick} style={{ cursor: 'pointer' }}>
                <span className="accordion-title">{title}</span>
                <span className={`accordion-arrow ${isOpen ? 'open' : ''}`}>&#9660;</span>
            </h2>
            <div className={`accordion-collapse ${isOpen ? 'show' : ''}`}>
                <div className="accordion-body">
                    {content}
                </div>
            </div>
        </div>
    );
}

function Profil() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section id="profil" className="section0">
            <div className="header-top">
                <div className="numero">1</div>
                <div className="Titre">PROFIL</div>
            </div>
            <div className="accordion-container">
                <div className="accordion" id="accordionExample">
                    <AccordionItem
                        title="Qui suis-je ?"
                        content="Je m'appelle Kilani Asseila, j'ai 19 ans. Je réside à Douai, dans le Nord de la France."
                        isOpen={openItem === 1}
                        onClick={() => toggleItem(1)}
                    />
                    <AccordionItem
                        title="Que fais-je ?"
                        content="Je suis en deuxième année de BUT informatique à Lens. Cette formation a été longuement réfléchie et je suis très heureux de l'avoir intégrée."
                        isOpen={openItem === 2}
                        onClick={() => toggleItem(2)}
                    />
                    <AccordionItem
                        title="Que veux-je faire ?"
                        content="Je souhaite devenir développeur, dans le web et aussi dans le développement d'application. J'ai toujours été passionné par l'informatique et je suis très heureux de pouvoir en faire mon métier."
                        isOpen={openItem === 3}
                        onClick={() => toggleItem(3)}
                    />
                </div>
            </div>
            <button className="scroll-to-top" onClick={scrollToTop}>⬆</button>
        </section>
    );
}

export default Profil;