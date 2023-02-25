import React from 'react'

export default function CopyButton() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(jobDescription)
    setIsCopied(true)
  }

  return (
    <>
      <button
        type="button"
        className="bg-purple-500 w-full hover:bg-purple-700 cursor-pointer text-white font-bold mt-6 py-2 px-4 rounded"
        onClick={}
        disabled={}
      ></button>
    </>
  )
}
