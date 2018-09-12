import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import components */
import Loading from '../../components/Loading'
import SurveyList from '../../components/SurveyList'
import * as SurveyAction from '../../services/survey'
import SurveyQuestion from '../../components/SurveyQuestion'
import Notifications from 'react-notify-toast';

class Survey extends Component {
	constructor(props, context) {
		super(props, context)
		 this.state = {
			loading:true,
			surveys:[], 
			surveyId:'',
			currentSurvey:null,
			error:''
		}
	}

	componentDidMount () {
		let surveyId = this.props.match.params.id
		this.setState({surveyId}) //set the current survey
		if(surveyId) {
			this.props.fetchSurveys().then(() => {
				this.props.fetchSurveyById(surveyId)
			})
		}else {
			this.props.fetchSurveys()
		}
    
	}//end component did mount
	submitSurvey(surveyId, values) {
		this.props.submitSurvey()
	}
	handleError(){
		this.setState({error: 'all questions are necessary'})
	}
	componentWillReceiveProps (nextProps) {

		let paramId = nextProps.match.params.id
		let  { surveyId } = this.state
		let { currentSurvey } = this.props
		if(!paramId) this.setState({surveyId:null}) //  
	
		/** check if weather the last survey is equal to current survey if not set the current value */
		if((paramId && surveyId && paramId !== surveyId) || (paramId && paramId !== surveyId)){
			this.setState({surveyId:paramId})
			// check if the question is in the store or not if present don't load
			if(!currentSurvey){
					this.props.fetchSurveyById(paramId)
			} else {
				// load the new data into the store
				if(currentSurvey.id !== paramId){
					this.props.fetchSurveyById(paramId)
				}
			} 
		}
		this.setState({loading: nextProps.loading})
	}

	render () {
		let { surveys, isSuccess, currentSurvey } = this.props
		let { loading, surveyId , error} = this.state
		return (
			<div className="box">
					<div className="container">
						<Notifications/>
						<h3 className="text-center"> Dalia's Survey </h3>
						<div className="row">
							{/* Survey List */}			
							{ loading ? (<Loading/>):( (surveyId && currentSurvey) ? (<SurveyQuestion survey={currentSurvey} isLoading={loading} error={error} handleError={this.handleError.bind(this)} handleSubmit ={this.submitSurvey.bind(this)} isSuccess={isSuccess}/>) 
								: (<SurveyList surveys={surveys}/>)
							) }
					  </div>    
				</div>
			</div>
		)
	}
	/*end class Start*/
}


const mapStateToProps = (state)=>{
  return {
		surveys:state.survey.surveyList.surveys,
		loading:state.survey.surveyList.loading,
		currentSurvey:state.survey.surveyList.currentSurvey,
		isSuccess:state.survey.success
  }
}  

const mapDispatchToProps = (dispatch) => ({
		fetchSurveys: () => dispatch(SurveyAction.getSurveys()),
		fetchSurveyById: (surveyId) => dispatch(SurveyAction.getSurveyById(surveyId)),
		submitSurvey:(surveyId, submitResult) => dispatch(SurveyAction.submitSurvey(surveyId, submitResult))
})

export default connect(mapStateToProps,mapDispatchToProps)(Survey)