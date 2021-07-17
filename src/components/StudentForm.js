import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StudentForm extends React.Component {

  state =
    {
      //Coyle
      showDivA: false,
      showDivB: false,
      showDivC: false,
      showDivD: false,
      showDivE: false,

      //Ristad
      showDivF: false,
      showDivG: false,
      showDivH: false,
      showDivI: false,

      //Smith
      showDivJ: false,
      showDivK: false,
      showDivL: false,
      showDivM: false,
      showDivN: false,
      showDivO: false,

      //Brown
      showDivP: false,
      showDivQ: false,
      showDivR: false,
      showDivS: false,
      showDivT: false,
      showDivU: false,
    }


  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>

      )
    }
  }

  renderInput = ({ label, textarea, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...textarea} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    const { showDivA, showDivB, showDivC, showDivD, showDivE } = this.state

    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <div>
            <button className="ui yellow button" onClick={() => this.setState({ showDivA: !showDivA })}
            >{showDivA ? 'collapse chs. 1-2' : 'show chs. 1-2'}
            </button>
            {showDivA && (
              <div>
                <Field name="coyle-summary" component={this.renderInput} label="Enter Summary" />
                <Field name="coyle-key-concepts" component={this.renderInput} label="Enter Key Concepts" />
                <Field name="coyle-key-terms" component={this.renderInput} label="Enter Key Terms" />
                <Field name="coyle-making-connections" component={this.renderInput} label="Enter Making Connections" />
              </div>
            )}


            {/* <Field name="ristad-summary" component={this.renderInput} label="Enter Summary" />
          <Field name="ristad-key-concepts" component={this.renderInput} label="Enter Key Concepts" />
          <Field name="ristad-key-terms" component={this.renderInput} label="Enter Key Terms" />
          <Field name="ristad-making-connections" component={this.renderInput} label="Enter Making Connections" />

          <Field name="smith-summary" component={this.renderInput} label="Enter Summary" />
          <Field name="smith-key-concepts" component={this.renderInput} label="Enter Key Concepts" />
          <Field name="smith-key-terms" component={this.renderInput} label="Enter Key Terms" />
          <Field name="smith-making-connections" component={this.renderInput} label="Enter Making Connections" />

          <Field name="brown-summary" component={this.renderInput} label="Enter Summary" />
          <Field name="brown-key-concepts" component={this.renderInput} label="Enter Key Concepts" />
          <Field name="brown-key-terms" component={this.renderInput} label="Enter Key Terms" />
          <Field name="brown-making-connections" component={this.renderInput} label="Enter Making Connections" /> */}

          </div>
          <button className="ui button primary">Submit</button>
        </form>
      </React.Fragment>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }
  return errors
}

export default reduxForm({
  form: 'studentForm',
  validate
})(StudentForm)

