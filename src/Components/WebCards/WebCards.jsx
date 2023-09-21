import React from "react";
import styles from './WebCards.module.css';

function WebCards({imagenes, style}) {
    const { imagen1, imagen2, imagen3, imagen4 } = imagenes;
    return (
        <div className={styles.mainDiv}>
            {imagen1 && <img id={styles[style]} className={styles.imagen1} src={imagen1} alt="" />}
            {imagen2 && <img id={styles[style]} className={styles.imagen2} src={imagen2} alt="" />}
            {imagen3 && <img id={styles[style]} className={styles.imagen3} src={imagen3} alt="" />}
            {imagen4 && <img id={styles[style]} className={styles.imagen4} src={imagen4} alt="" />}
        </div>
    );
}

export default WebCards;