import React from 'react'

const Brown = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <h2>Discover Your Voice</h2>
        <h3>How to Develop Healthy Voice Habits</h3>
        <p>by Oren L. Brown</p>
        <form >
          <label>Student Name</label>
          <input>
          </input>
          <label>Major
          </label>
          <input></input>
          <label>What is your reaction to the first three chapters?</label>
          <br/>
          <textarea cols="90" rows="30"></textarea>

        </form>
        
      </div>
    </React.Fragment>

  )
}

export default Brown

{/* <form onSubmit={handleNewPlaceSubmission}>
            <label for="type">Type of Place:</label>
            <Select id="type" name="type" className="form-control">
              <option value="toGo">To Go</option>
              <option value="haveBeen">Have Been</option>
            </Select>
            <Input className="form-control"
              type='text'
              name='name'
              placeholder='Name of Place' 
              required />
            <Input className="form-control"
              type='text'
              name='country'
              placeholder='Country' />
            <textarea className="form-control"
              name='notes'
              placeholder='Notes'/>
            <Button type='submit'>Save</Button>
          </form> */}