import React from 'react'

export default function Button(props) {
  return (
    <>
      <button
        type={props.type}
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </>
  )
}
