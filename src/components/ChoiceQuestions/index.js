import * as React from 'react';
import { Field } from 'formik';

class ChoiceQuestions extends React.Component {
  render() {
    const { title, options, id } = this.props.question;
    return (
      <div>
        <h3 className="question-title">{title}</h3>
        <div>
          {options.map((option, index) => {
            return (
              <div className="radio" key={index}>
                <label>
                  <Field
                    type="radio"
                    name={`${id}`}
                    component="input"
                    value={option}
                  />
                  {option}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ChoiceQuestions;
