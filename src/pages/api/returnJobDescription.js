const openAiUrl =
  'https://api.openai.com/v1/engines/text-davinci-003/completions'

const generteDescription = async ({
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
        'Content Type': 'applications/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    })
  } catch (err) {
    console.error(err)
  }
}
