import React from 'react'
import '../styles/styles.css'

const Profile = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <label>First Name:</label><br />
        <input></input><br />
        <label>Last Name:</label><br />
        <input></input><br />
        <label>Email Address:</label><br />
        <input></input><br />
        <br />
        <label>Student id#:</label><br />
        <input></input><br />
        <label>Major:</label><br />
        <input></input><br />
        <br />
        <label>Class (eg. "Sophomore"):</label><br />
        <input></input><br />
        <br />
      </div>

    </React.Fragment>

  )
}

export default Profile