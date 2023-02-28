import Head from 'next/head'
import { Inter } from '@next/font/google'
import Dashboard from '@/components/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jobbish</title>
        <meta name="description" content="AI Job Description Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'bg-oxford-blue min-h-screen '}>
        <div className="flex flex-col items-center justify-center px-4 py-2">
          <h1 className="text-4xl md:text-6xl font-bold text-stone-100">
            Job<span className="text-accent-aero">-</span>ish
            <span className="text-4xl md:text-6xl font-bold text-accent-aero">
              .
            </span>
          </h1>
          <p className="mt-3 text-2xl text-stone-100">
            Writing{' '}
            <span className=" text-accent-pink font-bold">
              Job Descriptions
            </span>{' '}
            Has Never Been Easier
          </p>
        </div>
        <Dashboard />
      </main>
    </>
  )
}
