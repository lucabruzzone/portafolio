import React from "react";
import styles from './Home.module.css';
import WebCards from "../WebCards/WebCards";
import About from '../About/About';
import { websImages } from "../../data";
import { useState, useEffect } from "react";

function Home() {
    const webs = [ 'boome',  'roomie', 'rym', 'miconsulta'];
    var [i, setI] = useState(3);
    const [card, setcard] = useState(webs[i]);
    function handleClick(e) {
        setcard(e.target.id);
    }

    useEffect(() => {
        function handleSelect(e) {
            if(e.code === 'ArrowLeft') {
                if(i > 0) {
                    setI(i--);
                    setcard(webs[i]);
                }
            } 
            else if(e.code === 'ArrowRight') {
                if(i < 3) {
                    setI(i++);
                    setcard(webs[i]);
                }
            } 
        }

        window.addEventListener('keydown', handleSelect);
        return () => {window.removeEventListener('keydown', handleSelect)}
    }, []);

    return (
        <div id={styles[card]} className={styles.mainContainer}>
            <div className={styles.leftSection}>
                <About/>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.webCards}>
                    <WebCards imagenes={websImages[card]} style={card}/>
                </div>
                <div className={styles.selectorBar}>
                    <div onClick={handleClick} id="boome" className={card === 'boome' ? styles.press: styles.selectorBarDiv}></div>
                    <div onClick={handleClick} id="roomie" className={card === 'roomie' ? styles.press: styles.selectorBarDiv}></div>
                    <div onClick={handleClick} id="rym" className={card === 'rym' ? styles.press: styles.selectorBarDiv}></div>
                    <div onClick={handleClick} id="miconsulta" className={card === 'miconsulta' ? styles.press: styles.selectorBarDiv}></div>
                </div>
            </div>
        </div>
    );
}

export default Home;