import React from 'react'

export default function SubmitButton({
  jobTitle,
  industry,
  keyWords,
  tone,
  wordCount,
  isGenerating,
}) {
  return (
    <>
      <button
        type="submit"
        className="btn relative inline-block font-medium group"
        disabled={
          isGenerating ||
          jobTitle === '' ||
          industry === '' ||
          keyWords === '' ||
          tone === '' ||
          wordCount === ''
        }
      >
        <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-red-300"></span>
        <span className="relative text-black group-hover:text-white">
          {isGenerating ? 'Generating...' : 'Generate Job Description'}
        </span>
      </button>
    </>
  )
}
