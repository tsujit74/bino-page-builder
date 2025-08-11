import React from 'react';
import { getPage, PageComponent } from '../lib/pages-store';

const TextSection: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <section>
    <h2 className="text-2xl font-bold">{title}</h2>
    <p>{text}</p>
  </section>
);

const ImageBlock: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img src={src} alt={alt} className="max-w-full rounded" />
);

const Card: React.FC<{ content: string }> = ({ content }) => (
  <div className="p-4 border rounded shadow">{content}</div>
);

const StatsBox: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div>
    <strong>{value}</strong> <span>{label}</span>
  </div>
);

const CTA: React.FC<{ buttonText: string; link: string }> = ({ buttonText, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
    {buttonText}
  </a>
);

const componentMap: Record<string, React.FC<any>> = {
  TextSection,
  ImageBlock,
  Card,
  StatsBox,
  CTA,
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const blocks = getPage(slug);

  if (!blocks) {
    return (
      <main className="min-h-screen flex items-center justify-center text-red-600">
        Page not found or not yet created.
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
      {blocks.map((block: PageComponent, i: number) => {
        const Component = componentMap[block.type];
        return Component ? <Component key={i} {...block.props} /> : null;
      })}
    </main>
  );
}
