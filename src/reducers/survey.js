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
            return {
                ...state,
                surveyList: { surveys: action.payload.surveys, error:null,      
                loading: false } 
            }
        default:
            return state
    }
}