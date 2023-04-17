export default function SubmitButton({
  jobTitle,
  industry,
  keyWords,
  tone,
  wordCount,
  isGenerating,
}) {
  return (
    <>
      <button
        type="submit"
        className="btn relative w-full rou mt-6 py-2 px-4 inline-block font-medium group"
        disabled={
          isGenerating ||
          jobTitle === '' ||
          industry === '' ||
          keyWords === '' ||
          tone === '' ||
          wordCount === ''
        }
      >
        <span className="absolute bg-black rounded inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-accent-aero border-2 rounded border-black group-hover:bg-accent-pink group-hover:ease-in-out duration-100"></span>
        <span className="relative text-black cursor-pointer font-bold mt-6 py-2 px-4 rounded group-hover:text-stone-100">
          {isGenerating ? 'Generating...' : 'Generate Job Description'}
        </span>
      </button>
    </>
  )
}

{
  /* <button
        type="button"
        className="bg-purple-500 w-full hover:bg-purple-700 cursor-pointer text-white font-bold mt-6 py-2 px-4 rounded" */
}
