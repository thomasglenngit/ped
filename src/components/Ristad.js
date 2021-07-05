import React from 'react'
import '../styles/styles.css'

class Ristad extends React.Component {

  state = {
    showDivA: false,
    showDivB: false,
    showDivC: false,
    showDivD: false,
  }

  render() {
    const { showDivA, showDivB, showDivC, showDivD } = this.state

    return (
      <React.Fragment>
        <div className="ui container">
          <h3>A Soprano On Her Head</h3>
          <h4>by Eloise Ristad</h4>

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
          <button className="ui orange button" onClick={() => this.setState({ showDivA: !showDivA })}
          >{showDivA ? 'collapse chs. 1-4' : 'show chs. 1-4'}
          </button>
          <button className="ui teal button" onClick={() => this.setState({ showDivB: !showDivB })}
          >{showDivB ? 'collapse chs. 5-8' : 'show chs. 5-8'}
          </button>
          <button className="ui blue button" onClick={() => this.setState({ showDivC: !showDivC })}
          >{showDivC ? 'collapse chs. 9-12' : 'show chs. 9-12'}
          </button>
          <button className="ui purple button" onClick={() => this.setState({ showDivD: !showDivD })}
          >{showDivD ? 'collapse chs. 13-16' : 'show chs. 13-16'}
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
                <label>Chapters 5-8 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 5-8 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 5-8 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 5-8 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
          <div>

            {showDivC && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 9-12 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 9-12 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 9-12 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 9-12 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>

          <div>

            {showDivD && (
              <div className="ui segment" id="coyleB" >
                <label>Chapters 13-16 <span>Summary</span></label>
                <br />
                <textarea cols="90" rows="30"></textarea>
                <br />
                <label>Chapters 13-16 <span>Key Concepts</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 13-16 <span>Key Terms (at least 5)</span></label>
                <textarea cols="90" rows="15"></textarea><br />
                <label>Chapters 13-16 <span>Making Connections</span></label>
                <textarea cols="90" rows="30"></textarea><br />
              </div>
            )}
          </div>
        </div>
      </React.Fragment >
    )
  }
}

export default Ristad