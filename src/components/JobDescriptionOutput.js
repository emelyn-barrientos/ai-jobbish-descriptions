import React, { useState, useRef, useEffect } from 'react'
import CopyButton from './CopyButton'

export default function JobDescriptionOutput({ jobDescription }) {
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const [jobDescriptionState, setJobDescriptionState] = useState(jobDescription)

  const setJobDescriptionSafe = (value) => {
    if (isMountedRef.current) {
      setJobDescriptionState(value)
    }
  }

  const handleChange = (event) => {
    const value = event.target.value
    setJobDescriptionSafe(value)
  }

  return (
    <>
      <div className="flex flex-col">
        <label className="sr-only" htmlFor="output">
          Job Description Output
        </label>
        <textarea
          rows={
            jobDescriptionState === ''
              ? 7
              : jobDescriptionState.split('\\n').length + 12
          }
          className="block w-full rounded-md bg-stone-100 border-2 border-accent-aero focus:outline-none focus:border-accent-pink sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
          name="output"
          placeholder="AI Generated Job Description"
          id="output"
          value={jobDescriptionState}
          onChange={handleChange}
        />
        <CopyButton jobDescription={jobDescriptionState} />
      </div>
    </>
  )
}
