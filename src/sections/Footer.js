import React, { useEffect, useState } from 'react';
import './../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ajout du CSS Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ajout du JS Bootstrap
import './../css/bootstrap.css';
import axios from 'axios';

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

        fetch('https://www.kilaniasseilaportfolio.fr/sendEmail.php', {
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
            });
    };

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
                    <img src="/images/linkedin.png" alt="LinkedIn" />
                </a>
            </div>
            <div className="copyright">
                &copy; 2024 Kilani Asseila
            </div>
        </footer>
    );
}

export default Footer;