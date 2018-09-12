import React from "react";
// import * as axios from "axios";
import { render, Simulate, wait } from "react-testing-library";
// import MockAxios from "axios-mock-adapter";
import 'jest-dom/extend-expect'
// import ReactDOM from 'react-dom'
import Loading from '.././components/Loading'
// import Survey from '.././pages/Survey'

// loading component text 
test("Loading component should render loading text", () => {
    // Renders Loading component
    const { getByTestId, getByText, container } = render(
            <Loading  />
    );
    // Expects Loading component to render correct text.
     expect(getByTestId("loading-text")).toHaveTextContent(
     "Loading..."
    );
})

