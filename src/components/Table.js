import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets: { results },
    filterByName: { name },
    obj,
    operator,
    numeric,
    column,
  } = useContext(StarWarsContext);

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const filterResults = () => {
      if (name) {
        return setPlanets(results
          .filter((arg) => arg.name.toLowerCase().includes(name.toLowerCase())));
      }
      if (obj.filterByNumericValues.length) {
        if (operator === 'maior que') {
          return setPlanets(planets
            .filter((element) => Number(element[column]) > Number(numeric)));
        }
        if (operator === 'menor que') {
          return setPlanets(planets
            .filter((element) => Number(element[column]) < Number(numeric)));
        }
        if (operator === 'igual a') {
          return setPlanets(planets
            .filter((element) => (element[column]) === numeric));
        }
        return setPlanets(planets);
      }
      return setPlanets(results);
    };
    filterResults();
  }, [obj, name]);

  useEffect(() => {
    setPlanets(results);
  }, [results]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { planets && planets.map(({
          name: nome,
          rotation_period: rotationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }) => (
          <tr key={ nome }>
            <td>{ nome }</td>
            <td>{ rotationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Table;
