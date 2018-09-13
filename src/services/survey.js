import axios from '../utils/axios';
import { BASE_URL } from '../config/environment';
import * as types from './types';
/* Get the list of surveys */
export function getSurveys() {
  return dispatch => {
    return axios
      .request({
        method: 'GET',
        url: `${BASE_URL}/surveys`,
      })
      .then(response => {
        dispatch({
          type: types.SURVEYS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.SURVEYS_ERROR,
          payload: error,
        });
      });
  };
}

export function getSurveyById(surveyId) {
  return dispatch => {
    return axios
      .request({
        method: 'GET',
        url: `${BASE_URL}/surveys/${surveyId}`,
      })
      .then(response => {
        let surveyResponse = { data: response.data.survey, surveyId: surveyId };
        dispatch({
          type: types.SINGLE_SURVEY,
          payload: surveyResponse,
        });
      })
      .catch(error => {
        dispatch({
          type: types.SURVEY_ERROR,
          payload: error,
        });
      });
  };
}

export function submitSurvey(surveyId, submitResult) {
  return dispatch => {
    return axios
      .request({
        method: 'POST',
        url: `${BASE_URL}/surveys/${surveyId}/completions`,
        data: submitResult,
      })
      .then(response => {
        dispatch({
          type: types.SUBMIT_SURVEY,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: types.SUBMIT_ERROR,
          payload: error,
        });
      });
  };
}
