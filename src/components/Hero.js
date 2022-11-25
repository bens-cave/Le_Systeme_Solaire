import React from 'react'

const Hero = ({ planet }) => {

  return (
    <div className='hero-container'>
      <div id={planet.id} className='hero'>
        <h2>{planet.englishName}</h2>
        {
          planet.discoveredBy
          &&
          <>
            <p className='discovered'>{planet.discoveredBy}</p>
          </>
        }

        {
          planet.discoveryDate
          &&
          <>
            <p className='discoveryDate'>{planet.discoveryDate}</p>
          </>
        }
      </div>
    </div>
  )
}

export default Hero