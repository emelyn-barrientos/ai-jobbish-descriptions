const openAiUrl =
  'https://api.openai.com/v1/engines/text-davinci-003/completions'

const generateDescription = async ({
  jobTitle,
  industry,
  keyWords,
  tone,
  wordCount,
}) => {
  try {
    const response = await fetch(openAiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `Write a job description for a ${jobTitle} role in ${industry} that is ${wordCount} words in a ${tone}. Incorporate the following keywords: ${keyWords}. The job position should be described in a way that is SEO friendly, highlighting its unique features and benefits.`,
        max_tokens: 1000,
        temperature: 0.5,
      }),
    })
    const data = await response.json()
    return data.choices[0].text
  } catch (err) {
    console.error(err)
  }
}

export default async function handler(req, res) {
  const { jobTitle, industry, keyWords, tone, wordCount } = req.body

  const jobDescription = await generateDescription({
    jobTitle,
    industry,
    keyWords,
    tone,
    wordCount,
  })

  res.status(200).json({
    jobDescription,
  })
}
