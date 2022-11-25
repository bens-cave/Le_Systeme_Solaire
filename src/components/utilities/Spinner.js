import React from 'react'

import blackhole from '../../images/blackhole.webp'

const Spinner = () => {
  return (
    <div id="spinner-container">
      <img src={blackhole} alt="Spinner" className="spinner" />
    </div>
  )
}

export default Spinner