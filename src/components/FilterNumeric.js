import React from 'react';

function FilterNumeric() {
  return (
    <div>
      <label htmlFor="filter-colunm">
        Coluna:
        <select
          name="filter-colunm"
          id="filter-colunm"
          data-testid="column-filter"
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="filter-numeric">
        Operador:
        <select
          name="filter-numeric"
          id="filter-numeric"
          data-testid="comparison-filter"
        >
          <option>menor que</option>
          <option>maior que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="number">
        <input name="number" id="number" type="number" data-testid="value-filter" />
      </label>
      <button type="button" data-testid="button-filter">Filtrar</button>
    </div>
  );
}

export default FilterNumeric;
