import React from 'react';
import { render, screen } from '@testing-library/react';
import {BudgetCard} from './BudgetCard';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

describe('initialization', () => {
    const renderBudgetCard = () => render( <BudgetCard />);
    it('test budget card renders properly', ()=> {
        renderBudgetCard();
    })


    /* 
    
        Can't seem to test "collapsed" vs "not collapsed". Google's not helping much. Come back later

    */
    it('test goal button unfolds and collapses goal components', async () => { 
        renderBudgetCard();
        
        const goalPlaceholder = screen.findByPlaceholderText(/placeholder/);
        expect( await goalPlaceholder).toBeInTheDocument();
        const goalButton = screen.getByRole('button', {name: "Goals"});
        userEvent.click(goalButton);
       // expect(overviewLink.getAttribute('href')).toBe('/');
    })
})