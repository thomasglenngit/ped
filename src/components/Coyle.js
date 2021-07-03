import React from 'react'
import './styles.css'



class Coyle extends React.Component {

  state = { 
    showDivA: true,
    showDivB: true, 
    showDivC: true,
    showDivD: true,
    showDivE: true, 
    }

  render() {
    const { showDivA, showDivB, showDivC, showDivD, showDivE } = this.state
    // const { showDivB } = this.state


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
            <button className="ui orange button" onClick={() => this.setState({ showDivA: !showDivA })}
              >{showDivA ? 'collapse chs. 1-2' : 'show chs. 1-2'}
              </button>
              <button className="ui teal button" onClick={() => this.setState({ showDivB: !showDivB })}
              >{showDivB ? 'collapse chs. 3-4' : 'show chs. 3-4'}
              </button>
              <button className="ui blue button" onClick={() => this.setState({ showDivC: !showDivC })}
              >{showDivC ? 'collapse chs. 5-7' : 'show chs. 5-7'}
              </button>
              <button className="ui purple button" onClick={() => this.setState({ showDivD: !showDivD })}
              >{showDivD ? 'collapse chs. 8-9' : 'show chs. 8-9'}
              </button>
              <button className="ui yellow button" onClick={() => this.setState({ showDivE: !showDivE })}
              >{showDivE ? 'collapse ch. 10/Epilogue' : 'show ch. 1-/Epilogue'}
              </button>
            <div>
              
              { showDivA && (
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
             
              { showDivB && (
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
              
              { showDivC && (
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
              
              { showDivD && (
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
              
              { showDivE && (
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

            {/* <br />
            <button className="ui orange button" onClick={() => this.setState({ showDiv: !showDiv })}
              >{showDiv ? 'hide' : 'show'}
              </button>

            <div className="ui segment" id="coyleB">
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

            <br />
            <button className="ui olive button">Chapters 5-7</button>

            <div className="ui segment" id="coyleC">
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

            <br />
            <button className="ui green button">Chapters 8-9</button>

            <div className="ui segment" id="coyleD">
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

            <br />
            <button className="ui teal button">Chapter 10/Epilogue</button>

            <div className="ui segment" id="coyleE">
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
            </div> */}

      
      </div>
      </React.Fragment>

    )
  }
}

export default Coyle