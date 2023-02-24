import React from 'react'
import InputField from './InputField'
import TextareaField from './TextareaField'
import SelectField from './SelectField'
import Button from './Button'

export default function Form(props) {
  const {
    handleSubmit,
    handleJobTitle,
    handleIndustry,
    handleKeyWords,
    handleTone,
    handleWordCount,
    jobTitle,
    industry,
    keyWords,
    tone,
    wordCount,
    isGenerating,
  } = props

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <InputField
          label="Job Title"
          name="jobTitle"
          type="text"
          value={jobTitle}
          onChange={handleJobTitle}
          required
        />
        {/* Industry */}
        <InputField
          label="Industry"
          name="industry"
          type="text"
          value={industry}
          onChange={handleIndustry}
          required
        />
        {/* AI Keywords */}
        <TextareaField
          label="Keywords for AI"
          name="keywords"
          value={keyWords}
          onChange={handleKeyWords}
          required
        />
        {/* Tone */}
        <SelectField
          label="Tone"
          name="tone"
          value={tone}
          onChange={handleTone}
          options={[
            { label: 'Select Tone', value: 'default' },
            { label: 'Casual', value: 'casual' },
            { label: 'Formal', value: 'formal' },
            { label: 'Professional', value: 'professional' },
            { label: 'Friendly', value: 'friendly' },
          ]}
          required
        />
        {/* Word Count */}
        <InputField
          label="Word Count (Optional)"
          name="wordCount"
          type="number"
          min={0}
          max={800}
          value={wordCount}
          onChange={handleWordCount}
        />
        {/* Generate Job Description */}
        <Button
          type="submit"
          className="bg-purple-500 w-full hover:bg-purple-700 cursor-pointer text-white font-bold mt-6 py-2 px-4 rounded"
          disabled={
            isGenerating ||
            jobTitle === '' ||
            industry === '' ||
            keyWords === '' ||
            tone === ''
          }
        />
        {isGenerating ? 'Generating...' : 'Generate Job Description'}
      </form>
    </>
  )
}