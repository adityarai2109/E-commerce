
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
            <div className='headerlogo'>
                <Link to='/'>
                    <img 
                        className="logo"
                        src="https://dynamic.brandcrowd.com/asset/logo/fa128dbf-8002-44c5-b75f-308fea5f2ec3/logo?v=4" 
                        alt=""
                    />
                </Link>
            </div>
            <div className="search-bar">
                <input type='text' className='header__searchInput'></input>
                <SearchIcon className="header__searchIcon" style={{width:"20%",height:"100%"}}></SearchIcon>
                
            </div>
            
            <div className="nav-right">
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
            </div>

        </nav>
    )
}

export default Header;
