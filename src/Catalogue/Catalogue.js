import React from 'react'
import { Link } from 'react-router-dom'
import './Catalogue.css'

function Catalogue() {
    return (
        <div className="catalogue">
            <Link to='/Suit' style={{ textDecoration: 'none', }}><span className="catalogue__span lead">Suit</span></Link>
            <p className="partition">|</p>
            <Link to="/Lehenga" style={{ textDecoration: 'none' }}><span className="catalogue__span lead">Lehenga</span></Link>
            <p className="partition">|</p>
            <Link to="/Kurti" style={{ textDecoration: 'none' }}><span className="catalogue__span lead">Kurti</span></Link>
            <p className="partition">|</p>
            <Link to="/Gown" style={{ textDecoration: 'none' }}><span className="catalogue__span lead">Gown</span></Link>
            <p className="partition">|</p>
            <Link to="/New" style={{ textDecoration: 'none' }}><span className="catalogue__span lead">New</span></Link>
            <p className="partition">|</p>
            <Link to="/Popular" style={{ textDecoration: 'none' }}><span className="catalogue__span lead">Popular</span></Link>
        </div>
    )
}

export default Catalogue
