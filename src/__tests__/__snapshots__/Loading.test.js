import React from 'react';
import renderer from 'react-test-renderer'
import Loading from '../../components/Loading'

// check the loading test snapshot
test('Loading renders correctly', () => {
    const component = renderer.create(<Loading/>)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

