import React, { useState } from 'react'

export default function Dashboard() {
  const [jobTitle, setJobTitle] = useState('')
  const [industry, setIndustry] = useState('')

  const handleJobTitle = (e) => setJobTitle(e.target.value)
  const handleIndustry = (e) => setIndustry(e.target.value)

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
          <div>
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
        </form>
      </div>
    </div>
  )
}
