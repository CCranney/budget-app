import React from 'react';
import { render, screen } from '@testing-library/react';
import { BudgetCategory } from './BudgetCategory';

describe('initialize', () => {
    const renderBudgetCategory = () => render( <BudgetCategory />);
    it('test budget card renders properly', ()=> {
        renderBudgetCategory();
    })
    
    /* 
    
        Can't seem to test "collapsed" vs "not collapsed". Google's not helping much. Come back later

    */

    it('', ()=> {
        

    })
})