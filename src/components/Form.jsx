import InputField from './InputField'
import TextareaField from './TextareaField'
import SelectField from './SelectField'
import SubmitButton from './SubmitButton'

export default function Form({
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
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Job Title */}
        <InputField
          label="Job Title"
          name="jobTitle"
          placeholder="Job Title"
          type="text"
          value={jobTitle}
          onChange={handleJobTitle}
          required
        />
        {/* Industry */}
        <InputField
          label="Industry"
          name="industry"
          placeholder="Industry"
          type="text"
          value={industry}
          onChange={handleIndustry}
          required
        />
        {/* AI Keywords */}
        <TextareaField
          label="Keywords for AI"
          name="keywords"
          placeholder="Enter job description keywords for AI (press RETURN after each word)"
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
            { label: 'Casual', value: 'casual' },
            { label: 'Formal', value: 'formal' },
            { label: 'Professional', value: 'professional' },
            { label: 'Friendly', value: 'friendly' },
          ]}
          required
        />
        {/* Word Count */}
        <InputField
          label="Word Count"
          name="wordCount"
          placeholder="Word Count (default 200)"
          type="number"
          min={0}
          max={800}
          value={wordCount}
          onChange={handleWordCount}
          required
        />
        {/* Generate Job Description */}
        <SubmitButton
          jobtitle={jobTitle}
          industry={industry}
          keyWords={keyWords}
          tone={tone}
          wordCount={wordCount}
          isGenerating={isGenerating}
        />
      </form>
    </>
  )
}
