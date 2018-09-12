import React, { Component } from 'react'
import { connect } from 'react-redux'
/* import components */
import Loading from '../../components/Loading'
import SurveyList from '../../components/SurveyList'
import * as SurveyAction from '../../services/survey'

class Survey extends Component {
	constructor(props, context) {
		super(props, context)
		 this.state = {
			loading:true,
			surveys:[]
		}
	}

	componentDidMount () {
        this.props.fetchSurveys();
	}//end component did mount

	componentWillReceiveProps (nextProps) {
		this.setState({loading: nextProps.loading})
	}

	render () {
		let { surveys } = this.props
		let { loading } = this.state
		console.log(loading)
		return (
                <div className="box">
                    <div className="container">
					    <h3 className="text-center"> Survey </h3>
     	                <div className="row">
						 {/* Survey List */}
						  
						{loading ? (<Loading/>) :(
						   <SurveyList surveys={surveys}/>
						 )}
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
	loading:state.survey.surveyList.loading
  }
}  

const mapDispatchToProps = (dispatch) => ({
    fetchSurveys: () => dispatch(SurveyAction.getSurveys())
})

export default connect(mapStateToProps,mapDispatchToProps)(Survey)