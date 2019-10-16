import React from 'react'

const ValidationComponent = ( props ) => {

  let validationMessage = 'Text too short';
  
  if (props.textLength > 5) {
    validationMessage = 'Text long enough';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  )
}

export default ValidationComponent
