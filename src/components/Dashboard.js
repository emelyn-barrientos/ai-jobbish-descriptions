import React, { useState } from 'react'

export default function Dashboard() {
  return (
    <>
      <div>
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
            />
          </div>
        </form>
      </div>
    </>
  )
}
