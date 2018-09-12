import * as React from 'react';
import ChoiceQuestions from '../ChoiceQuestions';
import ScrollButton from '../ScrollButton';
import { withFormik } from 'formik';
import { notify } from 'react-notify-toast';
import { Link } from 'react-router-dom';
class SurveyQuestion extends React.Component {
  renderError() {
    return <div>Error!</div>;
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  renderSuccess() {
    return (
      <div>
        <h1>Submit Success!</h1>
      </div>
    );
  }

  render() {
    let { survey, isLoading, error, handleSubmit, isSuccess } = this.props;
    let { title, tagline, questions } = survey;
    if (isLoading) {
      return this.renderLoading();
    }

    if (error) {
      let myColor = { background: '#e3c23f', text: '#FFFFFF' };
      notify.show(
        'All questions should be answered ! ',
        'custom',
        2000,
        myColor,
      );
    }

    if (!survey) {
      return <div />;
    }

    if (isSuccess) {
      let myColor = { background: '#0E1717', text: '#FFFFFF' };
      notify.show('Thanks for answering the survey! ', 'custom', 2000, myColor);
    }

    return (
      <div className="Survey">
        <br />
        <form onSubmit={handleSubmit}>
          <header>
            <div className="inline-block">
              {' '}
              <Link to={`/surveys`}> Home</Link> | Survey Question{' '}
            </div>
            <h3> {title} </h3>
            <p>{tagline}</p>
          </header>
          <ul className="list-unstyled">
            {questions.map(question => {
              return (
                <li key={question.id}>
                  <div className="question clearfix">
                    <ChoiceQuestions question={question} />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="form-group">
            <input type="submit" className="btn btn-primary" />
          </div>
        </form>
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => {},
  handleSubmit: (values, { props }) => {
    if (Object.keys(values).length === props.survey.questions.length) {
      props.handleSubmit(props.survey.id, values);
    } else {
      props.handleError(); /** call the error */
    }
    // props.handleSubmit(props.survey.id, values)
  },
})(SurveyQuestion);
