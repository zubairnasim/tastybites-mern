import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="min-h-screen bg-yellow-300 flex items-center justify-center px-6 text-center">

      <div>
        <p className="text-sm uppercase tracking-[0.2em] font-bold">
          Error 404
        </p>

        <h1 className="text-8xl sm:text-[10rem] font-black tracking-[-0.08em] leading-none mt-4">
          OOPS.
        </h1>

        <p className="mt-6 text-sm opacity-60">
          This page doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-black text-yellow-300 px-7 py-4 text-sm uppercase font-bold hover:bg-white hover:text-black transition"
        >
          Back Home ↗
        </Link>
      </div>

    </main>
  )
}

export default NotFound