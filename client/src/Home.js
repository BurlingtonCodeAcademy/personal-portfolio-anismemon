import React from 'react';

// imports the portrait

import portrait from './files/anis_portrait.jpg';

function Home(props) {

    // variable to keep return statement cleaner

    let tagline = 'A lifelong student of language'

    // checks language to change content accordingly 

    if (props.language === 'FR') {
        tagline = 'Un étudiant de langages dans toutes leurs formes'
    }

    if (props.language === 'IT') {
        tagline = 'Uno studente di lingua e di linguaggi'
    }

    return (
        <div id='centerpiece'>
            <div id='image'>
                <img id='portrait' src={portrait} className='rotated' alt='portrait of Anis' />
            </div>
            <div id='caption'>
                <p id='tagline' >{tagline}</p>
            </div>

        </div>
    )
}

export default Home
