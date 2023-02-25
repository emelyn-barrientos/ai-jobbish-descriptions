import React, { useState } from 'react'

import Form from './Form'

export default function Dashboard() {
  const [jobDescription, setJobDescription] = useState('')

  const [jobTitle, setJobTitle] = useState('')
  const [industry, setIndustry] = useState('')
  const [keyWords, setKeyWords] = useState('')
  const [tone, setTone] = useState('')
  const [wordCount, setWordCount] = useState('')

  const [isGenerating, setIsGenerating] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const handleJobTitle = (e) => setJobTitle(e.target.value)
  const handleIndustry = (e) => setIndustry(e.target.value)
  const handleKeyWords = (e) => setKeyWords(e.target.value)
  const handleTone = (e) => setTone(e.target.value)
  const handleWordCount = (e) => setWordCount(e.target.value)
  const handleJobDescription = (e) => setJobDescription(e.target.value)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsGenerating(true)

    const res = await fetch('/api/returnJobDescription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jobTitle,
        industry,
        keyWords,
        tone,
        wordCount,
      }),
    })
    setIsGenerating(false)
    const data = await res.json()
    setJobDescription(data.jobDescription.trim())
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(jobDescription)
    setIsCopied(true)
  }

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12">
        <Form
          handleSubmit={handleSubmit}
          handleJobTitle={handleJobTitle}
          handleIndustry={handleIndustry}
          handleKeyWords={handleKeyWords}
          handleTone={handleTone}
          handleWordCount={handleWordCount}
          handleJobDescription={handleJobDescription}
          jobTitle={jobTitle}
          industry={industry}
          keyWords={keyWords}
          tone={tone}
          wordCount={wordCount}
          isGenerating={isGenerating}
          isCopied={isCopied}
          onCopy={handleCopy}
          jobDescription={jobDescription}
        />
        {/* Job Description Output */}*{' '}
        <div className="flex flex-col">
          <label className="sr-only" htmlFor="output">
            Output
          </label>
          <textarea
            rows={
              jobDescription === ''
                ? 7
                : jobDescription.split('\\n').length + 12
            }
            className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
            name="output"
            placeholder="AI Generated Job Description"
            id="output"
            value={jobDescription}
            onChange={handleJobDescription}
            disabled={jobDescription === ''}
          />
          {/* Copy Button */}
          <button
            type="submit"
            className="bg-purple-500 w-full hover:bg-purple-700 cursor-pointer text-white font-bold mt-6 py-2 px-4 rounded"
            onClick={handleCopy}
            disabled={jobDescription === ''}
          >
            {isCopied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
      </div>
    </div>
  )
}
