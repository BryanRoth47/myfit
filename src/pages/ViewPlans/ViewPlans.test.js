import React from 'react';
import { render, screen } from '@testing-library/react';
import ViewPlans from './ViewPlans';

describe('ViewPlans', () => {
  test('renders ViewPlans component', () => {
    render(<ViewPlans />);

    expect(screen.getByText("Here's your plan")).toBeInTheDocument();
  });
});

/*
Documentation

The actual structure of ViewPlans will depend on the calender format we choose and if multiple plans are allowed at once. 
We initially envisioned displaying a 30 day calendar, but that may provide enough information for each day. We are prototyping both that and a 7 day
calendar. We will choose the one which is more visually appealing. As such, it is difficult to write proper unit tests at present.

Goals:
    ViewPlans will redirect to Login if a user isn't currently logged in
    ViewPlans will display an error and redirect to CreatePlan if no plans exist for the logged in user
    ViewPlans will display the appropriate calender
    ViewPlans will take as a parameter either the userID or the entire Profile, depending on which is easier for our server to produce
    If ViewPlans takes just the userID, ViewPlans will query the appropriate plan(s) information from the database
    ViewPlans will populate the calendar with the plan(s) information
    ViewPlans will allow a user to select between viewing the plan in a calendar or list format

Stretch Goals:
    ViewPlans will allow a user to click/tap on an exercise to get more information
*/