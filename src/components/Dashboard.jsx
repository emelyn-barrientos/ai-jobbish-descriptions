import Form from './Form'
import JobDescriptionOutput from './JobDescriptionOutput'
import { useState, useEffect } from 'react'

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsGenerating(true)

    try {
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

      if (!res.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await res.json()
      setJobDescription(data.jobDescription.trim())
    } catch (error) {
      console.error('There was an error:', error)
      setIsGenerating(false)
    }
  }

  const handleFormReset = () => {
    setJobDescription('')
    setJobTitle('')
    setIndustry('')
    setKeyWords('')
    setTone('')
    setWordCount('')
    setIsGenerating(false)
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
          handleFormReset={handleFormReset}
        />
        <JobDescriptionOutput
          jobDescription={jobDescription}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}
