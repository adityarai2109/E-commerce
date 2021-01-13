
import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './Header.css'

function Header() {
    return (
        <nav className="header">

            <Link to='/'>
                <img 
                    className="header__logo"
                    src="https://dynamic.brandcrowd.com/asset/logo/fa128dbf-8002-44c5-b75f-308fea5f2ec3/logo?v=4" 
                    alt=""
                />
            </Link>
            
            <input type='text' className='header__searchInput'></input>
            <SearchIcon className="header__searchIcon"></SearchIcon>
            
            <Link to='/login'>
                <AccountCircleIcon className="header__login" style={
                    {
                        width:"44px",
                        height:"44px",
                    }
                    }></AccountCircleIcon>
            </Link>

            <Link to='/wishlist'>
                <FavoriteIcon className="header__wishlist" style={
                    {
                        width:"44px",
                        height:"44px",
                    }
                    }></FavoriteIcon>
            </Link>

            <Link to='/checkout'>
                <ShoppingCartIcon className="header__cart" style={
                    {
                        width:"44px",
                        height:"44px",
                    }
                    }></ShoppingCartIcon>
            </Link>

        </nav>
    )
}

export default Header
