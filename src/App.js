import React from 'react';
import './App.css';
import FilterNumeric from './components/FilterNumeric';
import InputFilter from './components/InputFilter';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <span>Projeto StarWars - Trybe</span>
      <InputFilter />
      <FilterNumeric />
      <Table />
    </PlanetsProvider>
  );
}

export default App;
