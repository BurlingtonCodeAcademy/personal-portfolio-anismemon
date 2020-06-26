import React from 'react';

// import screenshots of games

import remockScreen from './files/remock.jpg'
import yelpington from './files/yelpington.jpg'
import geovermonter from './files/geovermonter.jpg'
import tictactoe from './files/tictactoe.jpg'

function Portfolio(props) {

    // variables to change content and keep return statement cleaner (not currently being used to change anything)

    let projects = 'Recent projects'
    let remock = 'Sample Web Page:'
    let tictac = 'Tic Tac Toe (1-player and 2-player options):'
    let yelp = 'Interactive restaurant guide (using Leaflet maps):'
    let geoVerm = 'Geo-location game (using Leaflet and React):'
    let guess = 'Guess the number game (human guesses the computer\'s or computer guesses the human\'s!)'
    let zork = 'Zorkington - a text adventure game!'

    return (
        <div>
            <h1>{projects}</h1>
            <div className='projectWrapper'>
                <p>
                    <a href="https://github.com/BurlingtonCodeAcademy/remock-rob-and-anis" target="_blank" rel="noopener noreferrer">{remock}</a>
                </p>

                <img className='screenshot' src={remockScreen} alt='screenshot of webpage' title='remock' />
            </div>
            <div className='projectWrapper'>
                <p>
                    <a href="https://github.com/BurlingtonCodeAcademy/yelpington-anismemon" target="_blank" rel="noopener noreferrer">{yelp}</a>
                </p>
                <img className='screenshot' src={yelpington} alt='screenshot of webpage' title='yelpington' />
            </div>
            <div className='projectWrapper'>
                <p>
                    <a href="https://github.com/BurlingtonCodeAcademy/geo-vermonter-anis-michael" target="_blank" rel="noopener noreferrer">{geoVerm}</a>
                </p>

                <img className='screenshot' src={geovermonter} alt='screenshot of webpage' title='geovermonter' />
            </div>
            <div className='projectWrapper'>
                <p>
                    <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-anismemon" target="_blank" rel="noopener noreferrer">{tictac}</a>
                </p>

                <img className='screenshot' src={tictactoe} alt='screenshot of webpage' title='tic-tac-toe' />
            </div>
            <div className='projectWrapper'>
                <p>
                    <a href="https://github.com/BurlingtonCodeAcademy/guess-the-number-anismemon" target="_blank" rel="noopener noreferrer">{guess}</a>
                </p>   
                <p>This is a <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer">command line</a> game</p>         
            </div>
            <div className='projectWrapper'>
                <p>
                    <a href="https://github.com/BurlingtonCodeAcademy/zorkington-anismemon" target="_blank" rel="noopener noreferrer">{zork}</a>
                </p>   
                <p>This is another <a href="https://en.wikipedia.org/wiki/Command-line_interface" target="_blank" rel="noopener noreferrer">command line</a> game</p>         
            </div>
        </div>
    )
}

export default Portfolio
