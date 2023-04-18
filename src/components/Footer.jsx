import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className="text-center flex flex-col justify-center mb-4">
        <p>
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
        <p className="text-xs mb-1 sm:text-center">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </>
  )
}
