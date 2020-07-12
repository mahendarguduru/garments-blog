import React from 'react';
import './style.css';

const Header=props=>{
    return(
        <header className="header">
            <nav className="headerMenu">
                <span>fashion is the armor to survive the reality of everyday life..!</span>
            </nav>
            <div >
            <div className="socialMedia" >
                    <img src={require('../../Assets/icons/fb.jpg')} alt="fb"/>
                    <img src={require('../../Assets/icons/insta.jpg')} alt="insta"/>
                    <img src={require('../../Assets/icons/linkedin.jpg')} alt="linkedin"/>
                    <img src={require('../../Assets/icons/twitter.jpg')} alt="twitter"/>
                </div>                
            </div>
        </header>
    )
}

export default Header;