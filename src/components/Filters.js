import React from 'react'

const Filters = ({ filters, bodyTypes, handleChange }) => {
  return (
    <div className="filter-container">
      <select name="bodyType" value={filters.bodyType} onChange={handleChange}>
        <option value="all">All</option>
        {bodyTypes.map(bodyType => <option key={bodyType} value={bodyType}>{bodyType}</option>)}
      </select>
      <input type="text" name="searchTerm" placeholder='Search...' value={filters.searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Filters