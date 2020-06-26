import React from 'react'

// imports resume for download

import resume from './files/Anis_Memon_Resume_2020.docx'

function Work(props) {

    // variables to keep return statement cleaner (there are currently no other languages here, but I may work on this later)

    let workHistory = "Work experience"
    let zeroLine = "Spring 2020: Full-stack web developer (student at Burlington Code Academy, Burlington, Vermont, USA)"
    let firstLine = "2006 – present: Translator (Clermont-Ferrand International Short Film Festival Clermont-Ferrand, France)"
    let secondLine = "1999 – present: Freelance translator"
    let thirdLine = "2009 - 2019: Lecturer of French and Italian (University of Vermont Burlington, Vermont, USA)"
    let fourthLine = "2007 – 2008 & 2005 – 2006: English Assistant (Cultural Services French Embassy Clermont-Ferrand, France)"
    let fifthLine = "2001 – 2004: Graduate Student Instructor of French and Italian (University of Michigan, Ann Arbor, Michigan, USA)"
    let download = "Download a copy of my resume"

    if (props.language === 'FR') {
        workHistory =   'Expérience de travail';
        download = 'Téléhchargez mon cv (en anglais)'
    }

    if (props.language === 'IT') {
        workHistory = 'Esperienza lavorativa';
        download = 'Scarica il mio curriculum (in inglese)'
    }

    return(
        <div>
            <div>
            
            <p style={{fontWeight: 600, textDecoration: 'underline'}}>{workHistory}</p>
            <p>{zeroLine}</p>
            <p>{firstLine}</p>
            <p>{secondLine}</p>
            <p>{thirdLine}</p>
            <p>{fourthLine}</p>
            <p>{fifthLine}</p>
            <div>
            <a href={resume} download='Anis Memon Resume 2020' style={{textDecoration: 'none'}}>{download}</a>
            </div>
            <a href="https://www.linkedin.com/in/anis-memon-04441518a/" style={{textDecoration: 'none'}} target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    )
}

export default Work
