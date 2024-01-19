import React from 'react';
import styles from './index.module.css'

const Picture = ({ title, date, description, url }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.pictureContainer}>
                <img className={styles.picture} width={700} src={url} alt={title} />
                <div>
                    <p className={styles.picture__description}>{description}</p>
                    <p>Date: {date}</p>
                </div>
            </div>
        </div>
    );
};

export default Picture;
