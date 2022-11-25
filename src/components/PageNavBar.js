import React from 'react'
import { Link } from 'react-router-dom'

const PageNavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link className='button' id='neptuneBtn' to={'/bodies/neptune'}>
            <div className='planet' >
              Neptune
            </div>
          </Link>
          <Link className='button' id='jupiterBtn' to={'/bodies/jupiter'}>
            <div className='planet'>
              Jupiter
            </div>
          </Link>
          <Link className='button' id='earthBtn' to={'/bodies/earth'}>
            <div>
              Earth
            </div>
          </Link>
          <Link className='button' id='mercuryBtn' to={'/bodies/mercure'}>
            <div className='planet'>
              Mercury
            </div>
          </Link>
          <Link className='button' id='sunBtn' to={'/bodies/sun'}>
            <div className='planet'>
              Sun
            </div>
          </Link>
          <Link className='button' id='venusBtn' to={'/bodies/venus'}>
            <div className='planet'>
              Venus
            </div>
          </Link>
          <Link className='button' id='marsBtn' to={'/bodies/mars'}>
            <div className='planet'>
              Mars
            </div>
          </Link>
          <Link className='button' id='saturnBtn' to={'/bodies/saturne'}>
            <div className='planet'>
              Saturn
            </div>
          </Link>
          <Link className='button' id='uranusBtn' to={'/bodies/uranus'}>
            <div className='planet'>
              Uranus
            </div>
          </Link>
          <Link className='button' id='asteroidsBtn' to='/bodies'>
            <div className='planet'>
              Asteroids
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default PageNavBar