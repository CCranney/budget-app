import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './pages/Layout';
import { TransactionPage } from './pages/TransactionPage';
import { VisualPage } from './pages/VisualPage';
import { BudgetPage } from './pages/BudgetPage';
import { OverviewPage } from './pages/OverviewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<OverviewPage />} />
          <Route path="budget" element={<BudgetPage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="visuals" element={<VisualPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
