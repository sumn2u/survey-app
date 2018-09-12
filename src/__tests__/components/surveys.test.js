import * as React from 'react';
import { render} from "react-testing-library"
import { Router } from 'react-router-dom'
import {createMemoryHistory} from 'history'

/** for DOM events */
import 'jest-dom/extend-expect'
/** Components */
import Loading from '../../components/Loading'
import SurveyList from "../../components/SurveyList"

// import Survey from '.././pages/Survey'

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
        ui,
        {route = '/', history = createMemoryHistory({initialEntries: [route]})} = {},
      ) {
        return {
          ...render(<Router history={history}>{ui}</Router>),
          // adding `history` to the returned utilities to allow us
          // to reference it in our tests (just try to avoid using
          // this to test implementation details).
          history,
        }
      }

// loading component text check
test("Loading component should render loading text", () => {
    // Renders Loading component
    const { getByTestId } = render(
            <Loading  />
    );
    // Expects Loading component to render correct text.
     expect(getByTestId("loading-text")).toHaveTextContent(
     "Loading..."
    );
})

// suvey list component text 
test("Survey component should render `no surveys` if no surveys is present", () => {
    // Renders survey component
    const { container } = render(
            <SurveyList />
    );
    // Expects Survey component to render no surveys.
     expect(container.textContent).toMatch('no surveys')
})


test("'SurveyList' component should renders the surveys that passes through it", () => {
const surveys = [
        {
                "id": "001",
                "title": "Opinion Poll",
                "tagline": "Tell us about your favorite things"
        },
        {
                "id": "002",
                "title": "This is about Politics",
                "tagline": "They want to change … what?"
        }
]       
  // Renders survey component with surveys
const { queryAllByText, container } = renderWithRouter(
        <SurveyList surveys={surveys} />
        );
 const surveyTakeButton = container.querySelectorAll('.box-part')
 expect(surveyTakeButton).toHaveLength(2) //checks if it matches or not
 
})
