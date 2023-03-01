# About Job-ish 💼 # 

Everyone's talking about ChatGPT and whilst I love using it as a tool to help me learn, I wanted to explore using the OpenAI API.

To create Job-ish, I initially followed this [freeCodeCamp.org](https://www.freecodecamp.org/news/build-a-job-description-generator-with-nextjs-and-chatgpt/) tutorial. I wanted to challenge myself more by refactoring to follow clean code practises by breaking down each segment into separate, reuseable components. 

This project was a fantastic exercise for me in passing props effectively from parent to child components as well as handling multiple useState hooks. I'm interested in stretching this a bit further and creating multiple different forms with other prompts to request from the OpenAI API. 

The deployed app is below. However, I'm currently troubleshooting a trim() method issue in production to actually getr the job description generated. the app works perfectly in playground thought!  

🔗 https://job-ish.vercel.app/

## TECH USED 👩🏽‍💻 ##
- JavaScript
- React.js
- Next.js
- Tailwind CSS
- OpenAI API
- Vercel (deployment)


## NEXT STEPS ▶️ ##
- [ ] Fix trim method issue in production
- [ ] Add reset button


### Installation

```
git clone git@github.com:emelyn-barrientos/ai-jobbish-descriptions.git
cd ai-jobbish-descriptions.git
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).
