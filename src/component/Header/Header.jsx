import React from 'react'
import logo from "../../Logonetflix.png"
import {Link} from "react-router-dom"
import { IoMdSearch } from "react-icons/io"
  //from react icon
const Header = () => {
  return (

    <nav className="header">
        <img src={logo} alt="logo" />
        <div>
            <Link to = "/tvshows">TV shows</Link>
            <Link to = "/movies">Movies</Link>
            <Link to = "/recent">Recently Added</Link>
            <Link to = "/mylist">My List</Link>
        </div>

        <IoMdSearch/>

    </nav>
    
  )
}

export default Header