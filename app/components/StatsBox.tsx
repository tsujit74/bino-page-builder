export default function StatsBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 rounded-xl px-6 py-4 text-center shadow-md">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-sm uppercase tracking-wide mt-1">{label}</div>
    </div>
  );
}
