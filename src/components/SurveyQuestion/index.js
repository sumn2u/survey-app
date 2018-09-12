import * as React from 'react';
import ChoiceQuestions from '../ChoiceQuestions';
import ScrollButton from '../ScrollButton';
import { withFormik } from 'formik';
import {Link} from 'react-router-dom';
class SurveyQuestion extends React.Component {
  renderError() {
    return <div>Error!</div>
  }

  renderLoading() {
    return <div>Loading...</div>
  }

  renderSuccess() {
    return <div>
      <h1>Submit Success!</h1>
    </div>
  }

  render() {
    let { survey, isLoading, error, handleSubmit, isSuccess } = this.props;

    let { title, tagline, questions } = survey;
 
    if (isLoading) {
      return this.renderLoading();
    }

    if (error) {
      return this.renderError();
    }

    if (!survey) {
      return <div/>;
    }

    if (isSuccess) {
      return this.renderSuccess();
    }

    return (
        <div className="Survey">
          <br/>
          <form onSubmit={handleSubmit}>
            <header>
             <div className="inline-block"> <Link to={`/surveys`}> Home</Link> | Survey Question  </div>
              <h3> {title} </h3>
              <p>{tagline}</p>
            </header>
            <ul className="list-unstyled">
              {questions.map(question => {
                return (<li key={question.id}>
                        <div className="question clearfix">
                           <ChoiceQuestions  question={question}/>
                        </div></li>
                )
              })}
            </ul>
            <div className="form-group">
              <input type="submit" className="btn btn-primary"/>
            </div>
          </form>
          <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
        </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => {},
  handleSubmit: ( values, { props }) => {
    props.handleSubmit(props.survey.id, values)
  }
})(SurveyQuestion);