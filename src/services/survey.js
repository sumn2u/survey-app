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

export function getSurveyById() {
    return (dispatch, getState) => {
        let surveyId= 123
        return axios.request({
            method: 'GET',
            url: `${BASE_URL}/surveys/${surveyId}`
        }).then((response)=>{
            dispatch({
                type: types.SURVEYS,
                payload: response.data
            });
        });
    }
}