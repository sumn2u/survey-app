import * as React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';

/** for DOM events */
import 'jest-dom/extend-expect'
/** Components */
import ChoiceQuestions from '../../components/ChoiceQuestions'

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


