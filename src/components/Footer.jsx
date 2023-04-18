import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className=" text-stone-100 text-center text-sm flex flex-col justify-center my-5">
        <p className="text-sm">
          Created by{' '}
          <Link
            className=" text-accent-pink font-bold hover:text-accent-aero hover:underline"
            href="https://www.emelynbarrientos.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emelyn Barrientos
          </Link>
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </>
  )
}
