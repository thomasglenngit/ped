import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

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
        </ul>
      </nav>
      <Link></Link>
    </React.Fragment>
  )
}

export default Header