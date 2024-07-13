import React from 'react'

const Button = ({btntext, functionApplier}:any) => {
  return (
    <button className="custom-btn" onClick={functionApplier}>{btntext}</button>
  )
}

export default Button