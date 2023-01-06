import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'

const Moons = ({ planet }) => {

  const [moons, setMoons] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getMoons = async () => {
      try {
        const { data } = await axios.get(`https://api.le-systeme-solaire.net/rest/bodies?filter[]=aroundPlanet,eq,${planet.id}`)
        console.log(data.bodies)
        setMoons(data.bodies)
      } catch (err) {
        console.log(err.message)
        setErrors(true)
      }
    }
    getMoons()
  }, [planet])

  return (
    <div className='body-list'>
      {
        !errors && moons
          ?
          moons.map(moon => {
            const { id, englishName, discoveredBy, discoveryDate, avgTemp, mass, gravity, meanRadius } = moon
            return (
              <div className='body-list-item' key={id}>
                <h2>{englishName}</h2>
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
                        <p className='data'>{mass.massValue} x 10^{mass.massExponent} kg</p>
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
          <Spinner />
      }
    </div>
  )
}

export default Moons