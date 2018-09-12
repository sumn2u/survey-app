import axios from '../utils/axios';
import { BASE_URL } from '../config/environment'
import * as types from './types';
/* Get the list of surveys */
export function getSurveys() {
    return (dispatch, getState) => {
        
        return axios.request({
            method: 'GET',
            url: `${BASE_URL}/surveys`
        }).then((response)=>{
            dispatch({
                type: types.SURVEYS,
                payload: response.data
            });
        });
    }
}

export function getSurveyById(surveyId) {
    return (dispatch, getState) => {
        return axios.request({
            method: 'GET',
            url: `${BASE_URL}/surveys/${surveyId}`
        }).then((response)=>{
            let surveyResponse = { data:response.data.survey, surveyId:surveyId}
            dispatch({
                type: types.SINGLE_SURVEY,
                payload: surveyResponse
            });
        });
    }
}