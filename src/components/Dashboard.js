import React, { useState } from 'react'

export default function Dashboard() {
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

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12">
        <form>
          {/* Job Title */}
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              name="jobTitle"
              placeholder="Job Title"
              id="jobTitle"
              value={jobTitle}
              onChange={handleJobTitle}
              required
            />
          </div>
          {/* Industry */}
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="industry">
              Industry
            </label>
            <input
              type="text"
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              name="industry"
              placeholder="Industry"
              id="industry"
              value={industry}
              onChange={handleIndustry}
              required
            />
          </div>
          {/* AI Keywords */}
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="keywords">
              Keywords for AI
            </label>
            <textarea
              rows={7}
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              name="keywords"
              placeholder="Keywords for AI"
              id="keywords"
              value={keyWords}
              onChange={handleKeyWords}
              required
            />
          </div>
          {/* Tone */}
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="tone">
              Tone
            </label>
            <select
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              name="tone"
              id="tone"
              value={tone}
              onChange={handleTone}
              required
            >
              <option value="default">Select Tone</option>
              <option value="casual">Casual</option>
              <option value="formal">Formal</option>
              <option value="professional">Professional</option>
              <option value="friendly">Friendly</option>
            </select>
          </div>
          {/* Word Count */}
          <div className="flex flex-col">
            <label className="sr-only" htmlFor="wordCount">
              Word Count (Optional)
            </label>
            <input
              type="number"
              className="block w-full rounded-md bg-white border border-gray-400 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm px-4 py-2 placeholder-gray-500 my-2 text-gray-900"
              name="wordCount"
              placeholder="Word Count - Default 200 (Optional)"
              min={0}
              max={800}
              id="wordCount"
              value={wordCount}
              onChange={handleWordCount}
            />
            <button
              type="submit"
              disabled={
                isGenerating ||
                jobTitle === '' ||
                industry === '' ||
                keyWords === '' ||
                tone === ''
              }
            >
              {isGenerating ? 'Generating...' : 'Generate Job Description'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
