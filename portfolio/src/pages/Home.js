// src/Home.js
import React, { useEffect, useState } from 'react';
import hortenseImage from '../assets/images/HortenseGueguen.jpeg';


function Home() {
    const [show, setShow] = useState(false); // État pour gérer l'affichage
    const [show2, setShow2] = useState(false); // État pour gérer l'affichage

    useEffect(() => {
        // Ajoute la classe 'show' après un délai pour l'animation
        const timeout = setTimeout(() => {
            setShow(true); // Change l'état pour activer l'animation
        }, 100); // Délai de 100 mes

        const timeout2 = setTimeout(() => {
            setShow2(true); // Change l'état pour activer l'animation
        }, 600); // Délai de 100 mes

        return () => {
            clearTimeout(timeout); // Nettoie le timeout
            clearTimeout(timeout2); // Nettoie le timeout
        }

    }, []);

    return (
        <div className='homePage'>
            <div className={`homeTitleAndPhoto ${show ? 'show' : ''}`}> 
                <div className='titleHomePage'>
                    <p>HEY ! BIENVENUE SUR MON PORTFOLIO ! <br /> JE SUIS HORTENSE GUÉGUEN, ÉTUIDIANTE EN 3ÉME ANNÉE DE BUT INFORMATIQUE.</p>
                </div>
                <div className='photoHomePage'>
                    <img src={hortenseImage} alt="Hortense Guéguen" className='imageHortenseGueguen'/>
                </div>
            </div>
            <div className={`homeDescription ${show2 ? 'show2' : ''}`}>
                <p>Prêt.e à explorer mes projets et en apprendre davantage sur moi ?</p>
            </div>
        </div>
    );
}

export default Home;