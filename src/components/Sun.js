import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const Sun = () => {
  
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/bodies/sun/')
  }, [navigate])
}

export default Sun