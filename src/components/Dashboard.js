import React, { useState } from 'react'

export default function Dashboard() {
  const [jobTitle, setJobTitle] = useState('')

  const handleJobTitle = (e) => setJobTitle(e.target.value)

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12">
        <form>
          <div>
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
        </form>
      </div>
    </div>
  )
}
