import React, { useRef, useEffect } from 'react'
import CopyButton from './CopyButton'

export default function JobDescriptionOutput({ jobDescription }) {
  const isMountedRef = useRef(false)

  return (
    <>
      <div className="flex flex-col">
        <label className="sr-only" htmlFor="output">
          Job Description Output
        </label>
        <textarea
          rows={
            jobDescription === '' ? 7 : jobDescription.split('\\n').length + 12
          }
          className="block w-full rounded-md bg-stone-100 border-2 border-accent-aero focus:outline-none focus:border-accent-pink sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
          name="output"
          placeholder="AI Generated Job Description"
          id="output"
          value={jobDescription}
          // onChange={handleSubmit}
          disabled={jobDescription === ''}
        />
        <CopyButton jobDescription={jobDescription} />
      </div>
    </>
  )
}
