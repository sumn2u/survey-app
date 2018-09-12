import * as React from 'react';
import { Link } from 'react-router-dom';

const SurveyList = ({ surveys }) => {
  return surveys ? (
    surveys.map((survey, index) => (
      <div key={index} className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div className="box-part text-center">
          <i
            className="glyphicon glyphicon-list-alt gi-3x"
            aria-hidden="true"
          />
          <div className="title">
            <h3>{survey.title} </h3>
          </div>
          <div className="text">{survey.tagline} </div>
          <Link to={`/surveys/${survey.id}`}>Take Survey</Link>
        </div>
      </div>
    ))
  ) : (
    <span className="text-center"> no surveys </span>
  );
};

export default SurveyList;
