import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {

    return (
        <div>
            <p className='buttonBlock'>
            <Link to={'/'}>
                <button className='button'>{props.home}</button>
            </Link>
            </p>
            <p className='buttonBlock'>
            <Link to={'/about'} >
                <button className='button'>{props.about}</button>
            </Link>
            </p>
            <p className='buttonBlock'>
            <Link to={'/portfolio'} >
                <button className='button'>{props.portfolio}</button>
            </Link>
            </p>
            <p className='buttonBlock'>
            <Link to={'/work'} >
                <button className='button'>{props.work}</button>
            </Link>
            </p>
            <p className='buttonBlock'>
            <Link to={'/interests'} >
                <button className='button'>{props.interests}</button>
            </Link>
            </p>

        </div>
    )
}

export default Navbar
