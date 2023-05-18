import React from 'react'
import { Collapse, Navbar } from 'reactstrap'
import { BudgetCard } from './BudgetCard'

export const BudgetCategory = () => {
  return (
    <>
        <Navbar></Navbar>
        <Collapse isOpen>
            <BudgetCard name="Example Budget"/>
        </Collapse>
    </>
  )
}
