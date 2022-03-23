import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import getResponseApi from '../services/getApi';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [filterByName, setFilterByName] = useState({ filterByname: {
    name: '',
  } });
  const [obj, setObj] = useState({
    filterByNumericValues: [] });

  const [column, setColumn] = useState('population');
  const [operator, setOperator] = useState('maior que');
  const [numeric, setNumeric] = useState(0);

  useEffect(() => {
    const getPlanet = async () => {
      const data = await getResponseApi();
      setPlanets(data);
    };
    getPlanet();
  }, []);

  const setFilter = (value) => {
    setFilterByName({ name: value });
  };

  const handleFilter = (filterObj) => {
    setObj({
      filterByNumericValues: [filterObj, ...obj.filterByNumericValues] });
  };

  const context = {
    planets,
    setPlanets,
    filterByName,
    setFilter,
    obj,
    handleFilter,
    column,
    setColumn,
    operator,
    setOperator,
    numeric,
    setNumeric,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
