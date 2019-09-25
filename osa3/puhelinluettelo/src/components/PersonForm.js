import React from 'react'

const PersonForm = ({ handleSubmit,
                    handleNameChange,
                    handleNumberChange,
                    valueName,
                    valueNumber }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input
            value={valueName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={valueNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm