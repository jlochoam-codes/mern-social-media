import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import Logo from '../../img/logo.png'
import './LogoSearch.css'

const LogoSearch = () => {
  return (
    <div className="logo">
      <img src={Logo} alt="Logo" />
      <div className="search">
        <input type="text"
          name="searchBar"
          placeholder='#Explore' />
        <div className="searchIcon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
