import { optimizeFonts } from 'next.config'
import React, { useState } from 'react'

export default function SelectField({
  label,
  name,
  options,
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
        <select
          className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
        >
          <option value="default">Select {label}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}