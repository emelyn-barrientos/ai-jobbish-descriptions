import React from "react"

export default function CopyButton () {

  const [isCopied, setIsCopied] = useState(false) 

  const handleCopy = () => {
    navigator.clipboard.writeText(jobDescription)
    setIsCopied(true)
  }

  return ()
}