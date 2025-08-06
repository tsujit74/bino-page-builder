export default function Card({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-5 shadow-sm hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-300 mt-2">{content}</p>
    </div>
  );
}