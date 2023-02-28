import React, { useState } from 'react'

export default function InputField({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
}) {
  const [isFilled, setIsFilled] = useState(false)

  return (
    <>
      <div className="flex flex-col">
        <label className="sr-only" htmlFor={name}>
          {label}
        </label>
        <input
          type="text"
          className="block w-full rounded-md bg-stone-100 border-2 border-accent-aero focus:outline-none focus:border-accent-pink sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </>
  )
}
