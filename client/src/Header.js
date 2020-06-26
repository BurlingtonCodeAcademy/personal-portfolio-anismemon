import React from 'react'

function Header(props) {
    return (
        
            
            <div id='buttonContainer'>
                <button id='French' onClick={props.changetoFrench}>FR</button>
                <button id='Italian' onClick={props.changetoItalian}>IT</button>
                <button id='English' onClick={props.changetoEnglish}>EN</button>
            </div>
     
    )
}

export default Header
