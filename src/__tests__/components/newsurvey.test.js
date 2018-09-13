import * as React from 'react';
import { render} from "react-testing-library"


/** for DOM events */
import 'jest-dom/extend-expect'
/** Components */
import ScrollButton from '../../components/ScrollButton'

// ScrollButton component should render button
test("ScrollButton component should render button", () => {
    // Renders ScrollButton component
    const { container } = render(
            <ScrollButton  />
    );
    // Expects ScrollButton component to render button.
    const surveyTakeButton = container.querySelectorAll('.scroll')
    expect(surveyTakeButton).toHaveLength(1) 
})

