import React from 'react'
import { Outlet } from 'react-router'
import { BudgetNavbar } from './CustomNavbar'

export const Layout = () => {
  return (
    <>
      <BudgetNavbar />
      <Outlet />
    </>
  )
}
