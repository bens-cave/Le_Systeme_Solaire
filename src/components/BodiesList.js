import React from 'react'

const BodiesList = ({ filteredBodies }) => {
  return (
    <div className='body-list'>
      {filteredBodies.length ?
        filteredBodies.map(body => {
          const { id, englishName, discoveredBy, discoveryDate, avgTemp, mass, gravity, meanRadius, aroundPlanet } = body
          return (
            <div className='body-list-item' key={id}>
              <h2>{englishName}</h2>
              {
                aroundPlanet &&
                <>
                  <h6>Orbits: {aroundPlanet.planet.charAt(0).toUpperCase() + aroundPlanet.planet.slice(1)}</h6>
                </>
              }
              <div>
                <div className='record'>
                  <p className='label'>🕵️ Discovered by: </p>
                  {
                    discoveredBy !== ''
                      ?
                      <p className='data'>{discoveredBy}</p>
                      :
                      <p className='data'>unknown</p>
                  }
                </div>
                <div className='record'>
                  <p className='label'>📅 Discovered: </p>
                  {
                    discoveryDate !== ''
                      ?
                      <p className='data'>{discoveryDate}</p>
                      :
                      <p className='data'>unknown</p>
                  }
                </div>
                <div className='record'>
                  <p className='label'>🌡 Average Temperature: </p>
                  {
                    avgTemp !== 0
                      ?
                      <p className='data'>{avgTemp} Kelvin</p>
                      :
                      <p className='data'>unknown</p>
                  }
                </div>
                <div className='record'>
                  <p className='label'>🏋️ Mass: </p>
                  {
                    mass !== null
                      ?
                      <p className='data'>{mass.massValue} 10^24 kg</p>
                      :
                      <p className='data'>unknown</p>
                  }
                </div>
                <div className='record'>
                  <p className='label'>🪶 Surface gravity: </p>
                  {
                    gravity !== 0
                      ?
                      <p className='data'>{gravity} m.s^-2</p>
                      :
                      <p className='data'>unknown</p>
                  }
                </div>
                <div className='record'>
                  <p className='label'>📏 Radius: </p>
                  {
                    meanRadius !== 0
                      ?
                      <p className='data'>{meanRadius} km</p>
                      :
                      <p className='data'>unknown</p>
                  }
                </div>
              </div>
            </div>
          )
        })
        :
        <div>Please choose an option from the dropdown</div>
      }
    </div >
  )
}

export default BodiesList