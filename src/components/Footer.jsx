export default function Footer() {
  return (
    <>
      <div className="text-center flex justify-center mb-4">
        <h6 className="text-xs mb-1 sm:text-center">
          Built with Next.js & Tailwind CSS
        </h6>
        <h6 className="text-xs mb-1 sm:text-center">
          Illustrations by the talented{' '}
          <a
            className="underline underline-offset-2 decoration-1 transition ease-in-out hover:text-accent-green hover:duration-75"
            href="https://rubyash.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ruby Ash
          </a>
        </h6>
      </div>
    </>
  )
}
