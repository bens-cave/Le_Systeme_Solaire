import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useParams } from 'react-router-dom'

import Hero from './Hero'
import PlanetInfo from './PlanetInfo'
import Moons from './Moons'
import NotFound from './NotFound'

const PlanetShow = () => {

  const { id } = useParams()

  const [planet, setPlanet] = useState('')
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const { data } = await axios.get(`/rest/bodies/${id}`)
        setPlanet(data)
      } catch (err) {
        console.log(err.message)
        setErrors(true)
      }
    }
    getPlanet()
  }, [id])

  return (
    <>
      {
        errors
          ?
          <NotFound />
          :
          planet
            ?
            <>
              <Hero planet={planet} />
              <PlanetInfo planet={planet} />
              <Moons planet={planet} />
            </>
            :
            <NotFound />
      }
    </>
  )
}

export default PlanetShow