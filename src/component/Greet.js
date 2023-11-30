import React from 'react'

export const Greet = (props) => {
  return (
    <div>
        <h1>
            Hello React !!
        </h1>
        {props.children}
    </div>
  )
}

export default Greet