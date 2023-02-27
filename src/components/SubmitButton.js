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
        className="bg-accent-aero w-full hover:bg-accent-pink cursor-pointer text-white font-bold mt-6 py-2 px-4 rounded"
        disabled={
          isGenerating ||
          jobTitle === '' ||
          industry === '' ||
          keyWords === '' ||
          tone === '' ||
          wordCount === ''
        }
      >
        {isGenerating ? 'Generating...' : 'Generate Job Description'}
      </button>
    </>
  )
}
