import React, { useState } from 'react'

export default function InputField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}) {
  return (
    <>
      <div className="flex flex-col">
        <label className="sr-only" htmlFor={name}>
          {label}
        </label>
      </div>
    </>
  )
}
