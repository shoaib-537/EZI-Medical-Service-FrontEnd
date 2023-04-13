import React from 'react'
import './Navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
const NavBar = () => {
  return (
    <div>
        <div className="nav-container">
            <div className="nav-main">
                <div className="nav-logo">Logo</div>
                <div className="nav-links">
                    <span className="link1">Home</span>
                    <span className="link1">Time Table</span>
                    <span className="link1">About</span>
                    <span className="link1">Blog</span>
                    <span className="link1">Contact</span>
                    <div className="searchicon link1">
                        <SearchOutlinedIcon/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar