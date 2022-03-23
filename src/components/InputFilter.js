import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputFilter() {
  const { setFilter, filterByName: { name } } = useContext(StarWarsContext);
  const inputHandler = ({ target: { value } }) => setFilter(value);
  return (
    <div>
      <label htmlFor="planet-filter">
        Planet:
        <input
          id="planet-filter"
          data-testid="name-filter"
          type="text"
          name="name"
          value={ name }
          onChange={ inputHandler }
        />
      </label>
    </div>
  );
}

export default InputFilter;
