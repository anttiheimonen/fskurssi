import React from 'react'

const PersonForm = ({ handleSubmit,
                    handleNameChange,
                    handleNumberChange,
                    valueName,
                    ValueNumber }) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
          name: <input
            value={valueName}
            onChange={handleNameChange }
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm