import React from 'react'
import { Spinner } from 'react-bootstrap'

const PlanetInfo = ({ planet }) => {
  return (
    <div className='planet-info' key={planet.id}>
      {
        planet
          ?
          <div>
            <div className='record'>
              <p className='label'>🌡 Average Temperature</p>
              {
                planet.avgTemp !== 0
                  ?
                  <p className='data'>{planet.avgTemp} Kelvin</p>
                  :
                  <p className='data'>unknown</p>
              }
            </div>
            <div className='record'>
              <p className='label'>🏋️ Mass</p>
              {
                planet.mass.massValue !== 0
                  ?
                  <p className='data'>{planet.mass.massValue} x 10^{planet.mass.massExponent} kg</p>
                  :
                  <p className='data'>unknown</p>
              }
            </div>
            <div className='record'>
              <p className='label'>🪶 Surface gravity</p>
              {
                planet.gravity !== 0
                  ?
                  <p className='data'>{planet.gravity} m.s^-2</p>
                  :
                  <p className='data'>unknown</p>
              }
            </div>
            <div className='record'>
              <p className='label'>📏 Radius</p>
              {
                planet.meandRadius !== 0
                  ?
                  <p className='data'>{planet.meanRadius} km</p>
                  :
                  <p className='data'>unknown</p>
              }
            </div>
            <div className='record'>
              <p className='label'>🍰 Density</p>
              {
                planet.density !== 0
                  ?
                  <p className='data'>{planet.density} g.cm^3</p>
                  :
                  <p className='data'>unknown</p>
              }
            </div>
            <div className='record'>
              <p className='label'>🏃 Escape speed</p>
              {
                planet.escape !== 0
                  ?
                  <p className='data'>{planet.escape} m.s^-1</p>
                  :
                  <p className='data'>unknown</p>
              }
            </div>
          </div>
          :
          <Spinner />
      }
    </div>
  )
}

export default PlanetInfo