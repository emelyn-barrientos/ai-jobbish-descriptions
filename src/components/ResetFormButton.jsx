export default function ResetFormButton({ formRef, handleFormReset }) {
  const handleReset = (e) => {
    e.preventDefault()
    formRef.current.reset()
    handleFormReset()
  }

  return (
    <button
      type="button"
      className="btn relative w-full rou mt-6 py-2 px-4 inline-block font-medium group"
      onClick={handleReset}
    >
      <span className="absolute bg-black rounded inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-accent-aero border-2 rounded border-black group-hover:bg-accent-pink group-hover:ease-in-out duration-100"></span>
      <span className="relative text-black cursor-pointer font-bold mt-6 py-2 px-4 rounded group-hover:text-stone-100">
        Reset Form
      </span>
    </button>
  )
}
