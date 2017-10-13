import React from 'react'
import './HeaderHome.css'
import logo from './../assets/logo.png'

export default function Header_Home () {

    return (
      <div className="header">
          <img src={logo} className="logo"/>
          <h1> SHELFIE </h1>
      </div>
    )
  }
  


