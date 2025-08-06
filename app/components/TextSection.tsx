export default function TextSection({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-white dark:bg-zinc-900 rounded-lg shadow p-4 space-y-1">
      <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{title}</h2>
      <p className="text-zinc-700 dark:text-zinc-300 text-lg">{text}</p>
    </section>
  );
}