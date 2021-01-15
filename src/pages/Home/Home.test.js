import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

// User story 1
describe('User Story 1: Home renders', () => {
  test('Are links there?', () => {
    render(<Home />);

    expect(screen.getByText('Create Plan')).toBeInTheDocument();
    expect(screen.getByText('View Plans')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});

// User story 2
describe('User Story 2: Force login when viewing plans', () => {
    test('Does Login render?', () => {
      render(<Home />);
  
      await userEvent.click(screen.getByText('View Plans'));
      expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
    });
  });


// User story 3
describe('User Story 3: Force login when creating plans', () => {
    test('Does Login render?', () => {
      render(<Home />);
  
      await userEvent.click(screen.getByText('Create Plan'));
      expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
    });
  });

  // User story 4
describe('User Story 4: User chooses to login', () => {
    test('Does Login render?', () => {
      render(<Home />);
  
      await userEvent.click(screen.getByText('Login'));
      expect(screen.getByText('Sign in to your account')).toBeInTheDocument();
    });
  });

  // User story 5
  describe('User Story 5: User logs in and gets directed to View Plan', () => {
    test('Can we login and view plan?', () => {
      render(<Home />);
      //navigate to Login Page
      await userEvent.click(screen.getByText('Login'));
      
      // enter the username and password
      fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
        target:{value:'UnitTester'},
      });
      fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
        target:{value:'UnitTester'},
      });
      // log in
      await userEvent.click(screen.getByRole('button'));
      expect(screen.getByText("Here's your plan")).toBeInTheDocument();
    });
  });

  // User story 6a
  describe('User Story 6a: User is logged in and creates a plan', () => {
    test('Can we login and go to Create Plan?', () => {
      render(<Home />);
      //navigate to Login Page
      await userEvent.click(screen.getByText('Login'));
      
      // enter the username and password
      fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
        target:{value:'UnitTester'},
      });
      fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
        target:{value:'UnitTester'},
      });
      // log in
      await userEvent.click(screen.getByRole('button'));
      // go to CreatePlan
      await userEvent.click(screen.getByText('Create Plan'));
    });
  });
