import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="text-center text-sm flex flex-col justify-center mb-4">
        <p className="text-sm">
          Created by{' '}
          <Link
            href="https://www.emelynbarrientos.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emelyn Barrientos
          </Link>
          .
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </>
  )
}
