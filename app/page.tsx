export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-50 dark:bg-zinc-950 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
        Bino Page Builder
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
        Instantly create dynamic pages by posting to our API.
      </p>

      <div className="mt-6 text-sm text-zinc-700 dark:text-zinc-400 space-y-2">
        <p>
          Send a <strong>POST</strong> request to{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-mono text-sm">
            /api/pages
          </code>
        </p>
        <p>
          Then visit pages like{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-mono text-sm">
            /about-bino
          </code>{" "}
          or{" "}
          <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded font-mono text-sm">
            /how-it-works
          </code>
        </p>
      </div>

      <div className="mt-10">
        <a
          href="https://bino.bot/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white px-6 py-3 text-sm font-semibold transition hover:scale-105 hover:shadow-lg"
        >
          🔍 Try Bino
        </a>
      </div>
    </main>
  );
}
