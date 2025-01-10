import React, { useState } from 'react';
import Profil from './sections/Profil';
import Diplomes from './sections/Diplomes';
import Competences from './sections/Competences';
import Projets from './sections/Projets';
import Personnalité from './sections/Personnalité';
import Loisirs from './sections/Loisirs';
import Expériences from './sections/Expériences';
import Footer from './sections/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App2() {
    const [openItem, setOpenItem] = useState(null);
    const [showImage, setShowImage] = useState(false);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleImageClick = () => {
        setShowImage(true);
    };

    const handleCloseImage = () => {
        setShowImage(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <Profil openItem={openItem} toggleItem={toggleItem} />
                <button className="scroll-to-top" onClick={scrollToTop}>⬆</button>
            </header>
            <Diplomes />
            <Competences />
            <Projets handleImageClick={handleImageClick} showImage={showImage} handleCloseImage={handleCloseImage} />
            <Personnalité />
            <Loisirs />
            <Expériences />
            <Footer />
        </div>
    );
}

export default App2;