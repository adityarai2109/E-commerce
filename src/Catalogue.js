import React from 'react'
import { Link } from 'react-router-dom'
import './Catalogue.css'

function Catalogue() {
    return (
        <div className="catalogue">
            <Link to='/Suit' style={{ textDecoration: 'none' }}><span className="catalogue__span">Suit</span></Link>
            <Link to="/Lehenga" style={{ textDecoration: 'none' }}><span className="catalogue__span">Lehenga</span></Link>
            <Link to="/Kurti" style={{ textDecoration: 'none' }}><span className="catalogue__span">Kurti</span></Link>
            <Link to="/Gown" style={{ textDecoration: 'none' }}><span className="catalogue__span">Gown</span></Link>
            <Link to="/New" style={{ textDecoration: 'none' }}><span className="catalogue__span">New</span></Link>
            <Link to="/Popular" style={{ textDecoration: 'none' }}><span className="catalogue__span">Popular</span></Link>
        </div>
    )
}

export default Catalogue
