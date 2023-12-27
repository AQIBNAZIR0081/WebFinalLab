import React from 'react'
import { Link } from 'react-router-dom'
const Head = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Dragons</Link></li>
                    <li><Link to='/Mission'>Mission</Link></li>
                    <li><Link to='/MyProfile'>MyProfile</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Head