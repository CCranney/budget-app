import React from 'react';
import { render, screen } from '@testing-library/react';
import { BudgetNavbar } from './CustomNavbar';

describe('initialize navbar', () => {
    it('Test that all links lead to where they should', ()=> {
        render( <BudgetNavbar />);
        const overviewLink = screen.getByRole('link', {name: "Overview"});
        expect(overviewLink.getAttribute('href')).toBe('/');
        const budgetLink = screen.getByRole('link', {name: "Budgeting"});
        expect(budgetLink.getAttribute('href')).toBe('budget');
        const transactionLink = screen.getByRole('link', {name: "Transactions"});
        expect(transactionLink.getAttribute('href')).toBe('transactions');
        const visualLink = screen.getByRole('link', {name: "Visuals"});
        expect(visualLink.getAttribute('href')).toBe('visuals');
    })
})