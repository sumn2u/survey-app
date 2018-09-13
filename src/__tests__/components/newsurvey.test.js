import * as React from 'react';
import Enzyme from 'enzyme';
import { shallow , mount } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import Adapter from 'enzyme-adapter-react-16';

/** for DOM events */
import 'jest-dom/extend-expect'
/** Components */
import ChoiceQuestions from '../../components/ChoiceQuestions'
import SurveyQuestion from '../../components/SurveyQuestion'

Enzyme.configure({ adapter: new Adapter() });


// ChoiceQuestions component should render choices
test("Choice Questions component should render choices", () => {
    let question =
         {
            "id": "Q868b4b",
            "title": "What is the best soccer team in the world?",
            "options": [
                "BVB",
                "Bayern Munich",
                "Manchester United",
                "FC Barcelona",
                "Some other team"
            ]
        }

    // Renders ChoiceQuestions component
    const wrapper = shallow(<ChoiceQuestions question={question} />);
   
    // Expects ChoiceQuestions component to render a option button.
    expect(wrapper.find('.question-title').length).equal(1)
    const input = wrapper.find('.radio');
    input.first().find({ type: 'radio' }).simulate('change');
    // expects the name of the radio button to be thw id
    expect(input.first().find({ type: 'radio' }).props().name).equal('Q868b4b')
})


// SurveyQuestion should render list of questions
test("Survey Question component should render list of questions", () => {
   let currentSurvey = {
        "survey": {
            "id": "001",
            "title": "Opinion Poll",
            "tagline": "Tell us about your favorite things",
            "questions": [
                {
                    "id": "Q868b4b",
                    "title": "What is the best soccer team in the world?",
                    "options": [
                        "BVB",
                        "Bayern Munich",
                        "Manchester United",
                        "FC Barcelona",
                        "Some other team"
                    ]
                },
                {
                    "id": "Q115b31",
                    "title": "Who is the better musician?",
                    "options": [
                        "Lady Gaga",
                        "Beyonce",
                        "Both are great",
                        "Don’t know/don’t care"
                    ]
                },
                {
                    "id": "Qba23cb",
                    "title": "Who is the better actor?",
                    "options": [
                        "Leonardo diCaprio",
                        "Brad Pitt",
                        "Both are great",
                        "Don’t know/don’t care"
                    ]
                },
                {
                    "id": "Q240b83",
                    "title": "Which car brand is the best?",
                    "options": [
                        "BMW",
                        "Mercedes",
                        "Audi",
                        "None of the above"
                    ]
                },
                {
                    "id": "Q5578ff",
                    "title": "Berlin or Hamburg?",
                    "options": [
                        "Berlin",
                        "Hamburg",
                        "Both are great",
                        "Don’t know either ... my city is the best!"
                    ]
                },
                {
                    "id": "Q1eef92",
                    "title": "Steak or tofu?",
                    "options": [
                        "What a question, steak!!!",
                        "Tofu tastes great and is better for animals and the environment, so tofu.",
                        "Not sure, both a delicious."
                    ]
                },
                {
                    "id": "Q84ce41",
                    "title": "Beer or wine?",
                    "options": [
                        "Definitely beer",
                        "Definitely wine",
                        "I like both, it very much depends on the situation",
                        "I don’t like either/don’t drink alcohol"
                    ]
                },
                {
                    "id": "Q2cb0cf",
                    "title": "Apple of windows?",
                    "options": [
                        "Apple",
                        "Windows",
                        "... what about Linux?!",
                        "Don’t know"
                    ]
                },
                {
                    "id": "Q6eb198",
                    "title": "Burger King or McDonalds?",
                    "options": [
                        "Burger King",
                        "McDonalds",
                        "Neither",
                        "Both offer amazing and delicious food!",
                        "Don’t know"
                    ]
                }
            ]
        }
    }
    const submitSurvey = spy();
    const handleError = spy();
    const loading = false;
    const error = '';
    const isSuccess = false;
    // Renders ChoiceQuestions component
    const wrapper = shallow(<SurveyQuestion
        survey={currentSurvey}
        isLoading={loading}
        error={error}
        handleError={handleError}
        handleSubmit={submitSurvey}
        isSuccess={isSuccess}
      />);
   
    // expect the form is present over there or not
    expect(wrapper.length).to.equal(1);
    // TODO simulate the change event
    
})



