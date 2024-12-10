import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './stylesport.css';
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



function PaginationDiplome() {
  const [currentPage, setCurrentPage] = useState(1);

  const diplomeContent = [
    { title: "BAC GENERAL", content: <img src="/images/bac.jpg" alt="BAC" className="diplome-image" /> },
    { title: "BAFA", content: <img src="/images/BAFA.png" alt="BAFA" className="diplome-image" /> },
    { title: "BUT 2EME ANNEE", content: <img src="/images/but.jpg" alt="BUT" className="diplome-image" /> },
  ];

  const handlePageChange = (page, event) => {
    event.preventDefault(); // Empêche la page de remonter en haut
    setCurrentPage(page);
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" href="#" aria-label="Previous" onClick={(e) => handlePageChange(currentPage - 1, e)}>
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {diplomeContent.map((item, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <a className="page-link" href="#" onClick={(e) => handlePageChange(index + 1, e)}>{item.title}</a>
            </li>
          ))}
          <li className={`page-item ${currentPage === diplomeContent.length ? 'disabled' : ''}`}>
            <a className="page-link" href="#" aria-label="Next" onClick={(e) => handlePageChange(currentPage + 1, e)}>
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

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="timeline-item">
        <div className="timeline-content top">
          <h3>Juillet 2023 - Août 2024</h3>
          <div className="timeline-icon">🏛️</div>
          <p className="timeline-description">Mairie de Douai: Animateur en centre de loisir .</p>
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

function Footer() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://www.kilaniasseilaportfolio/sendEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
        })
        .catch(error => {
          alert('Error sending email');
          console.error(error);
        });}

  return (
      <footer className="footer">
        <div className="contact-form">
          <h3>Contactez-moi</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required />
            <input type="text" name="prenom" placeholder="Prénom" value={formData.prenom} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Adresse mail" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>
        <div className="social-links">
          <a href="https://github.com/AsseilaKilan" className="social-link">
            <img src="/images/github.png" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/kilani-asseila-209ab12a4/" className="social-link">
            <img src="/images/linkedin.png"  alt="LinkedIn"/> </a>
        </div>
        <div className="copyright">
          &copy; 2024 Kilani Asseila
        </div>
      </footer>
  );
}
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
function Competences() {
  document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#carouselExampleAutoplaying');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const updateCarousel = () => {
      const offset = -currentIndex * 100;
      carouselInner.style.transform = `translateX(${offset}%)`;
    };

    const handleNextImage = () => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    };

    const handlePrevImage = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      updateCarousel();
    };

    nextButton.addEventListener('click', handleNextImage);
    prevButton.addEventListener('click', handlePrevImage);
  });

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
function App() {
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
  const startBomberman = () => {
    axios.get('http://51.83.79.10:3002/start-bomberman')
      .then(response => {
        alert('Jeu lancé : ' + response.data.message);
      })
      .catch(error => {
        alert('Erreur lors du démarrage de Bomberman');
        console.error(error);
      });
  };
  
  return (
      <div className="App">
        <header className="App-header">
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
            </section>
          <button className="scroll-to-top" onClick={scrollToTop}>⬆</button>
        </header>
        <section id="diplome" className="section1">
          <div className="header-top">
            <div className="numero">2</div>
            <div className="Titre-noir">DIPLOMES</div>
          </div>
          <PaginationDiplome/>
        </section>
       <Competences />
        <section id="projets" className="section3">
          <div className="header-top">
            <div className="numero">4</div>
            <div className="Titre-noir">PROJETS</div>
          </div>
          <div className="card-deck">
            <div className="card" style={{width: '18rem'}}>
              <img src="/images/bomber.gif" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Bomberman</h5>
                <p className="card-text">Application en groupe qui reprend le bomberman..</p>
                <button className="btn btn-primary" onClick={startBomberman}>Démarrer Bomberman</button>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img src="/images/img/logo.png" className="card-img-top" alt="logo"
                   style={{width: '80%', height: 'auto',justifyContent:"center",marginLeft:"28px"}}/>

              <div className="card-body">
                <h5 className="card-title">Amateur League</h5>
                <p className="card-text">Projet en groupe d'un site statique</p>
                <a href="/société.html" className="btn btn-primary">Aller sur le site</a>
              </div>
            </div>
            {/*<div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."></img > 
              <div className="card-body">
                <h5 className="card-title">Card title 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>*/}
           {/* <div className="card" style={{width: '18rem'}}>
               <img src="..." className="card-img-top" alt="..."></img >
              <div className="card-body">
                <h5 className="card-title">Card title 4</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>*/}
          </div>
          
        </section>
        <Personnalite/>
        <section id="loisirs" className="section5">
          <div className="header-top">
            <div className="numero">6</div>
            <div className="Titre-noir">LOISIRS</div>
          </div>
          <RandomIcons/>
        </section>
        <section id="experiences" className="section6">
          <div className="header-top">
            <div className="numero">7</div>
            <div className="Titre">EXPERIENCES</div>
          </div>
          <Timeline/>
        </section>
        <Footer/>

      </div>
  );
}

export default App;