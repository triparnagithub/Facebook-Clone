import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
function Header() {
  return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.facebook.com/images/fb_icon_325x325.png"/>
                  <div className="header__search">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>

                  </div>
                </div>
            
                <div className="header__middle">

                </div>

                <div className="header__right">

            </div>
        </div>
      
    
  )
}

export default Header
