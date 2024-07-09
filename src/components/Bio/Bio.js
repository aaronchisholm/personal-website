import React, { FC } from 'react';
import styles from './Bio.module.css';
import bio from './bio.json';

const Bio = () => {
    return ( 
        <div className='row container mx-5 py-4 bg-secondary flex'>
            <div className='col h-100'>
                <h1>{bio.Header}</h1>
                <p>{bio.Body1}</p>
                <p>{bio.Body2}</p>
            </div>
        </div>
    )
};

export default Bio;