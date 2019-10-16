import React from 'react'

const ValidationComponent = ( props ) => {
  return (
    <div>
      {props.isValid 
        
        ? 
        <p>Text long enough</p>
        :
        <p>Text too short</p>
    }
    </div>
  )
}

export default ValidationComponent
