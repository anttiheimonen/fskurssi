import React from 'react'

const FilterField = ({ value, handleFilterChange}) => {
  return(
    <div>
      filter shown with <input
        value={value}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default FilterField