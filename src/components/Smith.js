import React from 'react'
import '../styles/styles.css'

class Smith extends React.Component {

  state = {
    showDivA: false,
    showDivB: false,
    showDivC: false,
    showDivD: false,
    showDivE: false,
    showDivF: false
  }
  render() {
    const { showDivA, showDivB, showDivC, showDivD, showDivE, showDivF } = this.state

    return (
      <React.Fragment>
        <div className="ui container">
          <h3>The Naked Voice</h3>
          <h4>by Steven Smith</h4>
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
            >{showDivA ? 'collapse Intro, Pt. 1, ch. 1' : 'show chs. Intro, Pt. 1, ch.1'}
            </button>
            <button className="ui teal button" onClick={() => this.setState({ showDivB: !showDivB })}
            >{showDivB ? 'collapse chs. 2-3' : 'show chs. 2-3'}
            </button>
            <button className="ui blue button" onClick={() => this.setState({ showDivC: !showDivC })}
            >{showDivC ? 'collapse Intro Pt. II, ch. 4-6 ' : 'show ntro Pt. II, ch. 4-6'}
            </button>
            <button className="ui purple button" onClick={() => this.setState({ showDivD: !showDivD })}
            >{showDivD ? 'collapse chs. 7-9' : 'show chs. 7-9'}
            </button>
            <button className="ui yellow button" onClick={() => this.setState({ showDivE: !showDivE })}
            >{showDivE ? 'collapse ch. 10-12' : 'show ch. 10-12'}
            </button>
            <button className="ui yellow button" onClick={() => this.setState({ showDivE: !showDivE })}
            >{showDivE ? 'collapse ch. 13-14' : 'show ch. 13-14'}
            </button>
          
          <div>
            {showDivA && (
              <div className="ui segment" id="coyleA" >
                <label>Intro-Pt. I, Ch. 1<span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Intro-Pt. I, Ch. 1<span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Intro-Pt. I, Ch. 1<span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Intro-Pt. I, Ch. 1<span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
          <div>

            {showDivB && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 2-3 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 2-3 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 2-3 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 2-3 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
          <div>

            {showDivC && (
              <div className="ui segment" id="coyleB" >
                <label>Intro-Pt. II, Ch. 4-6 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Intro-Pt. II, Ch. 4-6 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Intro-Pt. II, Ch. 4-6 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Intro-Pt. II, Ch. 4-6 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>

          <div>

            {showDivD && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 7-9 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 7-9 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 7-9 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 7-9 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>

          <div>

            {showDivE && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 10-12 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 10-12 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 10-12 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 10-12 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>

          <div>
            {showDivF && (
              <div className="ui segment" id="coyleB" >
                <label>Chapter 13-14 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapter 13-14 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapter 13-14 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapter 13-14 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}



export default Smith