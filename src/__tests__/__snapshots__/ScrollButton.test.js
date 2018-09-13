import React from 'react';
import renderer from 'react-test-renderer'
import ScrollButton from '../../components/ScrollButton'

// should render the scroll button
test('scroll button renders correctly', () => {
    const component = renderer.create(<ScrollButton  scrollStepInPx="50" delayInMs="16.66"/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

