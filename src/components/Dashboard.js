import React, { useState } from 'react'

export default function Dashboard() {
  const [jobTitle, setJobTitle] = useState('')

  const handleJobTitle = (e) => setJobTitle(e.target.value)

  return (
    <>
      <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-12">
        <form>
          <div>
            <label className="sr-only" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
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
    </>
  )
}
