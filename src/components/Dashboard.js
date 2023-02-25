import React, { useState } from 'react'
import CopyButton from './CopyButton'

import Form from './Form'
import JobDescriptionOutput from './JobDescriptionOutput'

export default function Dashboard() {
  const [jobDescription, setJobDescription] = useState('')

  const [jobTitle, setJobTitle] = useState('')
  const [industry, setIndustry] = useState('')
  const [keyWords, setKeyWords] = useState('')
  const [tone, setTone] = useState('')
  const [wordCount, setWordCount] = useState('')

  const [isGenerating, setIsGenerating] = useState(false)

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
          jobTitle={jobTitle}
          industry={industry}
          keyWords={keyWords}
          tone={tone}
          wordCount={wordCount}
          isGenerating={isGenerating}
        />
        <JobDescriptionOutput jobDescription={jobDescription} />
      </div>
    </div>
  )
}
