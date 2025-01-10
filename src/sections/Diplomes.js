import React, { useEffect, useState } from 'react';
import './../styles/diplomes.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';


function PaginationDiplome() {
    const [currentPage, setCurrentPage] = useState(1);

    const diplomeContent = [
        { title: "BAC GENERAL", content: <img src="/images/bac.jpg" alt="BAC" className="diplome-image" /> },
        { title: "BAFA", content: <img src="/images/BAFA.png" alt="BAFA" className="diplome-image" /> },
        { title: "BUT 2EME ANNEE", content: <img src="/images/but.jpg" alt="BUT" className="diplome-image" /> },
    ];

    const handlePageChange = (page, event) => {
        event.preventDefault(); // Prevents the page from scrolling to the top
        setCurrentPage(page);
    };

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Previous"
                           onClick={(e) => handlePageChange(currentPage - 1, e)}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {diplomeContent.map((item, index) => (
                        <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <a className="page-link" href="#"
                               onClick={(e) => handlePageChange(index + 1, e)}>{item.title}</a>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === diplomeContent.length ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" aria-label="Next"
                           onClick={(e) => handlePageChange(currentPage + 1, e)}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="diplome-content">
                <h2>{diplomeContent[currentPage - 1].title}</h2>
                <p>{diplomeContent[currentPage - 1].content}</p>
            </div>
        </div>
    );
}

function Diplomes() {
    return (
        <section id="diplome" className="section1">
            <div className="header-top">
                <div className="numero">2</div>
                <div className="Titre-noir">DIPLOMES</div>
            </div>
            <PaginationDiplome />
        </section>
    );
}

export default Diplomes;