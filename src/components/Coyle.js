import React from 'react'
import styles from './mystyle.module.css'



const Coyle = () => {
  return (
    <React.Fragment>
      <div className="ui container">
        <h3>The Talent Code</h3>
        <h4>by Daniel Coyle</h4>
        <form>
          <label>Student Name</label>
          <br />
          <input></input>
          <br />
          <label>Major
          </label>
          <br />
          <input></input>
          <br />
          <br />
          <div className="ui segment">
            <label>Chapters 1-2 <span>Summary</span></label>
            <br />
            <textarea cols="90" rows="30"></textarea>
            <br />
            <label>Chapters 1-2 <span>Key Concepts</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 1-2 <span>Key Terms (at least 5)</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 1-2 <span>Making Connections</span></label>
            <textarea cols="90" rows="30"></textarea><br />
          </div>

          <div className="ui segment">
            <br />
            <label>Chapters 3-4 <span>Summary</span></label>
            <br />
            <textarea cols="90" rows="30"></textarea><br />
            <label>Chapters 3-4 <span>Key Concepts</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 3-4 <span>Key Terms (at least 5)</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 3-4 <span>Making Connections</span></label>
            <textarea cols="90" rows="30"></textarea><br />
          </div>

          <div className="ui segment">
            <br />
            <label>Chapters 5-7 <span>Summary</span></label>
            <br />
            <textarea cols="90" rows="30"></textarea><br />
            <label>Chapters 5-7 <span>Key Concepts</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 5-7 <span>Key Terms (at least 5)</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 5-7 <span>Making Connections</span></label>
            <textarea cols="90" rows="30"></textarea><br />
          </div>

          <div className="ui segment">
            <br />
            <label>Chapters 8-9 <span>Summary</span></label>
            <br />
            <textarea cols="90" rows="30"></textarea><br />
            <label>Chapters 8-9 <span>Key Concepts</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 8-9 <span>Key Terms (at least 5)</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapters 8-9 <span>Making Connections</span></label>
            <textarea cols="90" rows="30"></textarea><br />
          </div>

          <div className="ui segment">
            <br />
            <label>Chapter 10, Epilogue Summary:</label>
            <br />
            <textarea cols="90" rows="30"></textarea><br />
            <label>Chapter 10, Epilogue <span>Key Concepts</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapter 10, Epilogue <span>Key Terms (at least 5)</span></label>
            <textarea cols="90" rows="15"></textarea><br />
            <label>Chapter 10, Epilogue <span>Making Connections</span></label>
            <textarea cols="90" rows="30"></textarea><br />
          </div>

        </form>
      </div>
    </React.Fragment>

  )
}

export default Coyle