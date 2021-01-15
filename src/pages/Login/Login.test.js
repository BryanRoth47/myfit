import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';


describe('Can user Login?', () => {
    test('Logging In', () => {
        render(<Login />);

        // enter the username and password
        fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
            target: { value: 'UnitTester' },
        });
        fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
            target: { value: 'UnitTester' },
        });
        // log in
        await userEvent.click(screen.getByRole('button'));
        expect(screen.getByText("Hello, UnitTester!")).toBeInTheDocument();
    });
});

describe('Does Login change to Account?', () => {
    test('Logging In', () => {
        render(<Login />);

        // enter the username and password
        fireEvent.change(screen.getByPlaceholderText("Enter your username"), {
            target: { value: 'UnitTester' },
        });
        fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
            target: { value: 'UnitTester' },
        });
        // log in
        await userEvent.click(screen.getByRole('button'));
        expect(screen.getByText("Account")).toBeInTheDocument();
    });
});