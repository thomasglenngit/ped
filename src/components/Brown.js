import React from 'react'
import './styles.css'

class Brown extends React.Component {

  state = {
    showDivA: false,
    showDivB: false,
    showDivC: false,
    showDivD: false,
    showDivE: false,
    showDivF: false,
  }

  render() {
    const { showDivA, showDivB, showDivC, showDivD, showDivE, showDivF } = this.state


    return (
      <React.Fragment>
        <div className="ui container">
          <h3>Discover Your Voice</h3>
          <h4>How to Develop Healthy Voice Habits</h4>
          <p>by Oren L. Brown</p>
          <label>Student Name</label>
          <br />
          <input></input>
          <br />
          <label>Major
          </label>
          <br />
          <input></input><br />
          <br />
          <button className="ui orange button" onClick={() => this.setState({ showDivA: !showDivA })}
          >{showDivA ? 'collapse chs. 1-4' : 'show chs. 1-4'}
          </button>
          <button className="ui teal button" onClick={() => this.setState({ showDivB: !showDivB })}
          >{showDivB ? 'collapse chs. 5-6' : 'show chs. 5-6'}
          </button>
          <button className="ui blue button" onClick={() => this.setState({ showDivC: !showDivC })}
          >{showDivC ? 'collapse chs. 7-10' : 'show chs. 7-10'}
          </button>
          <button className="ui purple button" onClick={() => this.setState({ showDivD: !showDivD })}
          >{showDivD ? 'collapse chs. 11-14' : 'show chs. 11-14'}
          </button>
          <button className="ui yellow button" onClick={() => this.setState({ showDivE: !showDivE })}
          >{showDivE ? 'collapse chs. 15-18' : 'show chs. 15-18'}
          </button>
          <button className="ui black button" onClick={() => this.setState({ showDivE: !showDivE })}
          >{showDivF ? 'collapse chs. 19-21' : 'show chs. 19-21'}
          </button>

          <div>

            {showDivA && (
              <div className="ui segment" id="coyleA" >
                <label>Chapters 1-4 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 1-4 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 1-4 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 1-4 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
          <div>

            {showDivB && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 5-6 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 5-6 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 5-6 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 5-6 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
          <div>

            {showDivC && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 7-10 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 7-10 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 7-10 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 7-10 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>

          <div>

            {showDivD && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 11-14 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 11-14 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 11-14 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 11-14 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>

          <div>

            {showDivE && (
              <div className="ui segment" id="coyleB" >
                <label>Chapter 15-18 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapter 15-18 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapter 15-18 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapter 15-18 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>

              
            )}
          </div>

          <div>

            {showDivE && (
              <div className="ui segment" id="coyleB" >
                <label>Chapter 19-21 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapter 19-21 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapter 19-21 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapter 19-21 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>

              
            )}
          </div>

        </div>
      </React.Fragment>

    )
  }

}

  export default Brown

