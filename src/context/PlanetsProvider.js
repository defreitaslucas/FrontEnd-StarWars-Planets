import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';
import getResponseApi from '../services/getApi';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState({});
  const [filterByName, setFilterByName] = useState({ filterByname: {
    name: '',
  } });

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

  const context = {
    planets,
    setPlanets,
    filterByName,
    setFilter,
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
