import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CreatePlan from './CreatePlan';

// User story 6b
describe('User Story 6b: Create Plan renders', () => {
    test('Does CreatePlan render?', () => {
        render(<CreatePlan />);

        expect(screen.getByText('Lets get started creating your custom fitness workout')).toBeInTheDocument();
    });
});


describe('Do all CustomCards render?', () => {
    test('rendering CustomCards', () => {
        render(<CreatePlan />);
        // move to Goals Pane
        await userEvent.click(screen.getByRole('button'));
        expect(screen.getAllByTitle('CustomCard')).toHaveLength(2);
        // move to FitnessLevel Pane
        await userEvent.click(screen.getByText('Next'));
        expect(screen.getAllByTitle('CustomCard')).toHaveLength(2);
        // move to Equipment Pane
        await userEvent.click(screen.getByText('Next'));
        expect(screen.getAllByTitle('CustomCard')).toHaveLength(6);
        // move to Frequency Pane
        await userEvent.click(screen.getByText('Next'));
        expect(screen.getAllByTitle('CustomCard')).toHaveLength(3);
        // move to Final Pane
        await userEvent.click(screen.getByText('Next'));
        expect(screen.getByText("Great! We're creating your custom fitness routine now"));

        createMockPlan(() =>
            Promise.resolve({ userId: { plan: [] } })
        );

        expect(plan);
    });
});

describe('Can we create a plan?', () => {
    test('creating a plan', () => {
        render(<CreatePlan />);
        // move to Goals Pane
        await userEvent.click(screen.getByRole('button'));
        await userEvent.click(screen.getByText("Overall Fitness"));
        // move to FitnessLevel Pane
        await userEvent.click(screen.getByText('Next'));
        await userEvent.click(screen.getByText("Recently Started"));
        // move to Equipment Pane
        await userEvent.click(screen.getByText('Next'));
        await userEvent.click(screen.getByText("Barbells"));
        await userEvent.click(screen.getByText("Bench Press"));
        // move to Frequency Pane
        await userEvent.click(screen.getByText('Next'));
        await userEvent.click(screen.getByText("Three days a week"));
        // move to Final Pane
        await userEvent.click(screen.getByText('Next'));

        createMockPlan(() =>
            Promise.resolve({ userId: { plan: [] } })
        );

        expect(plan);
    });
});