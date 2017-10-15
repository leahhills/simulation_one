import React from 'react'
import './HeaderHome.css'
import logo from './../assets/logo.png'
import {Link} from 'react-router-dom';

export default function Header_Home () {

    return (
      <div className="header">
          <Link to= "/"><img src={logo} className="logo"/></Link>
          <h1> SHELFIE </h1>
      </div>
    )
  }
  


