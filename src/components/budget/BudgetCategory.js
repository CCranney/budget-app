import React, { useState } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap'
import { BudgetCard } from './BudgetCard'
import './BudgetCategory.css'

export const BudgetCategory = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <>
        <Navbar color="success" expand="lg">
            <NavbarBrand >Budget Category</NavbarBrand>
            <br />
            <NavbarToggler onClick={toggle} />            
            </Navbar>
            <Collapse isOpen={isOpen} >
                <div className='row mt-3'>
                    <BudgetCard name="Example Budget"/>
                    <BudgetCard name="Example Budget"/>
                    <BudgetCard name="Example Budget"/>
                </div>
            </Collapse>
        </>
    )
}