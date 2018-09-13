import React from 'react';
import renderer from 'react-test-renderer'
import SurveyList from '../../components/SurveyList'

// should render the ssurevylist
test('survey list renders correctly', () => {
    const component = renderer.create(<SurveyList/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

