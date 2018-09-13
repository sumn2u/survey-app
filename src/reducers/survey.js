const initialState = {
  surveyList: {
    surveys: [],
    loading: false,
    error: null,
    success: false,
    currentSurvey: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SURVEYS':
      return {
        ...state,
        surveyList: {
          surveys: action.payload.surveys,
          error: null,
          loading: false,
          currentSurvey: null,
        },
      };
    case 'SINGLE_SURVEY':
      let newState = Object.assign({}, state);
      let surveys = newState.surveyList.surveys;
      let payload = action.payload;
      newState.surveyList.currentSurvey = payload.data;
      /** filter from our current survey and push the value */
      surveys.filter(survey => {
        if (survey.id === payload.surveyId) {
          survey.questions = payload.data.questions;
        }
        return survey;
      });
      return {
        ...newState,
      };
    case 'SUBMIT_SURVEY':
      return {
        ...state,
        success: true,
      };
    case 'SURVEYS_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'SURVEY_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'SUBMIT_ERROR':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
