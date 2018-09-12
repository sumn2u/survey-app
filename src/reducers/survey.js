import { BASE_URL } from '../config/environment';

const initialState = {
    surveyList: {
        surveys:[] ,
        loading:false, 
        error:null
    }
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_SURVEYS':
        console.log(state,action.payload, 'idk')
            return {
                ...state,
                surveyList: { surveys: action.payload.surveys, error:null,      
                loading: false } 
            }
        default:
            return state
    }
}