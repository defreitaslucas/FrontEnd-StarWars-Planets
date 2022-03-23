import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterNumeric() {
  const { column,
    setColumn,
    operator,
    setOperator,
    numeric,
    setNumeric,
    handleFilter,
  } = useContext(StarWarsContext);

  const [columnObj, setColumnObj] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);

  const handleClick = (arg) => {
    setColumnObj(columnObj.filter((element) => element !== arg));
    handleFilter({ column, operator, numeric });
  };

  return (
    <div>
      <label htmlFor="filter-colunm">
        Coluna:
        <select
          name="filter-colunm"
          id="filter-colunm"
          data-testid="column-filter"
          value={ column }
          onChange={ (e) => setColumn(e.target.value) }
        >
          {
            columnObj.map((item) => (
              <option key={ item } value={ item }>{item}</option>
            ))
          }
        </select>
      </label>
      <label htmlFor="filter-numeric">
        Operador:
        <select
          name="filter-numeric"
          id="filter-numeric"
          data-testid="comparison-filter"
          value={ operator }
          onChange={ (e) => setOperator(e.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="number">
        <input
          name="number"
          id="number"
          type="number"
          data-testid="value-filter"
          value={ numeric }
          onChange={ (e) => setNumeric(e.target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => handleClick(column) }
      >
        Filtrar

      </button>
    </div>
  );
}

export default FilterNumeric;
