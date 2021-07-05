import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import GoogleAuth from './GoogleAuth'

const Header = () => {

  return (
    <React.Fragment>
      <nav>
        <ul>
          <li><Link to="/Syllabus">Syllabus</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/Coyle">Coyle</Link></li>
          <li><Link to="/Brown">Brown</Link></li>
          <li><Link to="/Ristad">Ristad</Link></li>
          <li><Link to="/Smith">Smith</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <GoogleAuth />
      
    </React.Fragment>
  )
}

export default Header