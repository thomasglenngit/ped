import React from 'react'
import StudentForm from './StudentForm'
import '../styles/styles.css'



class Coyle extends React.Component {

  // state = {
  //   showDivA: false,
  //   showDivB: false,
  //   showDivC: false,
  //   showDivD: false,
  //   showDivE: false,
  // }

  render() {
    // const { showDivA, showDivB, showDivC, showDivD, showDivE } = this.state

    // render() {
    //   return (
    //     <div>
    //       <h3>Create a Stream</h3>
    //       <StudentForm onSubmit={this.onSubmit} />
    //     </div>
    //   )
    // }


    return (

      <React.Fragment>

        <div className="ui container">
          <h3>The Talent Code</h3>
          <h4>by Daniel Coyle</h4>
          <label>Student Name</label>
          <br />
          <input></input>
          <br />
          <label>Major
          </label>
          <br />
          <input></input><br />
          <br />
          <StudentForm />
          {/* <button className="ui yellow button" onClick={() => this.setState({ showDivA: !showDivA })}
          >{showDivA ? 'collapse chs. 1-2' : 'show chs. 1-2'}
          </button>
          <button className="ui olive button" onClick={() => this.setState({ showDivB: !showDivB })}
          >{showDivB ? 'collapse chs. 3-4' : 'show chs. 3-4'}
          </button>
          <button className="ui green button" onClick={() => this.setState({ showDivC: !showDivC })}
          >{showDivC ? 'collapse chs. 5-7' : 'show chs. 5-7'}
          </button>
          <button className="ui teal button" onClick={() => this.setState({ showDivD: !showDivD })}
          >{showDivD ? 'collapse chs. 8-9' : 'show chs. 8-9'}
          </button>
          <button className="ui blue button" onClick={() => this.setState({ showDivE: !showDivE })}
          >{showDivE ? 'collapse ch. 10/Epilogue' : 'show ch. 1-/Epilogue'}
          </button>
          <div className="form-elements">
            <div>
              {showDivA && (
                <div className="ui segment" id="coyleA" >
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
              )}
            </div>
            <div>
              {showDivB && (
                <div className="ui segment" id="coyleB" >
                  <label>Chapters 3-4 <span>Summary</span></label>
                  <br />
                  <textarea cols="90" rows="30"></textarea>
                  <br />
                  <label>Chapters 3-4 <span>Key Concepts</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapters 3-4 <span>Key Terms (at least 5)</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapters 3-4 <span>Making Connections</span></label>
                  <textarea cols="90" rows="30"></textarea><br />
                </div>
              )}
            </div>
            <div>
              {showDivC && (
                <div className="ui segment" id="coyleB" >
                  <label>Chapters 5-7 <span>Summary</span></label>
                  <br />
                  <textarea cols="90" rows="30"></textarea>
                  <br />
                  <label>Chapters 5-7 <span>Key Concepts</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapters 5-7 <span>Key Terms (at least 5)</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapters 5-7 <span>Making Connections</span></label>
                  <textarea cols="90" rows="30"></textarea><br />
                </div>
              )}
            </div>
            <div>
              {showDivD && (
                <div className="ui segment" id="coyleB" >
                  <label>Chapters 8-9 <span>Summary</span></label>
                  <br />
                  <textarea cols="90" rows="30"></textarea>
                  <br />
                  <label>Chapters 8-9 <span>Key Concepts</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapters 8-9 <span>Key Terms (at least 5)</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapters 8-9 <span>Making Connections</span></label>
                  <textarea cols="90" rows="30"></textarea><br />
                </div>
              )}
            </div>
            <div>
              {showDivE && (
                <div className="ui segment" id="coyleB" >
                  <label>Chapter 10/Epilogue <span>Summary</span></label>
                  <br />
                  <textarea cols="90" rows="30"></textarea>
                  <br />
                  <label>Chapter 10/Epilogue <span>Key Concepts</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapter 10/Epilogue <span>Key Terms (at least 5)</span></label>
                  <textarea cols="90" rows="15"></textarea><br />
                  <label>Chapter 10/Epilogue <span>Making Connections</span></label>
                  <textarea cols="90" rows="30"></textarea><br />
                </div>
              )}
            </div>
          </div> */}
        </div>
      </React.Fragment>
    )
  }
}

export default Coyle