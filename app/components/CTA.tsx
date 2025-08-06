export default function CTA({ buttonText, link }: { buttonText: string; link: string }) {
  return (
    <div className="flex justify-center mt-8">
      <a
        href={link}
        target="_blank"
        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
      >
        {buttonText} →
      </a>
    </div>
  );
}