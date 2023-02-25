import React from 'react'

export default function JobDescriptionOutput({ jobDescription }) {
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
          className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
          name="output"
          placeholder="AI Generated Job Description"
          id="output"
          value={jobDescription}
          disabled={jobDescription === ''}
        />
      </div>
    </>
  )
}
