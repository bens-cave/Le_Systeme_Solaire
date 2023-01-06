import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filters from './Filters'
import BodiesList from './BodiesList'

const Bodies = () => {

  const [ bodies, setBodies ] = useState([])
  const [ bodyTypes, setBodyTypes ] = useState([])
  const [ filteredBodies, setFilteredBodies ] = useState([])
  const [ filters, setFilters ] = useState({
    bodyType: '',
    searchTerm: '',
  })

  useEffect(() => {
    const getBodies = async () => {
      try {
        const { data } = await axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
        console.log(data.bodies)
        setBodies(data.bodies)
      } catch (err) {
        console.log(err.message)
      }
    }
    getBodies()
  }, [])

  const handleChange = (e) => {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value,
    }
    setFilters(newObj)
  }

  useEffect(() => {
    if (bodies.length){
      const bodiesList = []
      bodies.forEach(body => bodiesList.includes(body.bodyType) ? '' : bodiesList.push(body.bodyType))
      setBodyTypes(bodiesList)
    }
  }, [bodies])

  useEffect(() => {
    if (bodies.length){
      const regexSearch = new RegExp(filters.searchTerm, 'i')
      const filtered = bodies.filter(body => {
        return regexSearch.test(body.englishName) && (body.bodyType === filters.bodyType || filters.bodyType === '')
      })
      setFilteredBodies(filtered)
    }
  }, [filters, bodies])


  return (
    <>
      <Filters filters={filters} bodyTypes={bodyTypes} handleChange={handleChange} />
      <BodiesList filteredBodies={filteredBodies} />
    </>
  )
}

export default Bodies