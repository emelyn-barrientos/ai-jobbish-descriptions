import React from 'react'
import InputField from './InputField'
import TextareaField from './TextareaField'
import SelectField from './SelectField'

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
        {/* Inudstry */}
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
            { lable: 'Select Tone', value: 'default' },
            { label: 'Casual', value: 'casual' },
            { label: 'Formal', value: 'formal' },
            { label: 'Professional', value: 'professional' },
            { label: 'Friendly', value: 'friendly' },
          ]}
          required
        />
      </form>
    </>
  )
}
