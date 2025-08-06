
import { getPage } from '../lib/pages-store';
import TextSection from '../components/TextSection';
import ImageBlock from '../components/ImageBlock';
import Card from '../components/Card';
import StatsBox from '../components/StatsBox';
import CTA from '../components/CTA';

const componentMap: Record<string, any> = {
  TextSection,
  ImageBlock,
  Card,
  StatsBox,
  CTA,
};

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blocks = getPage(slug);

  if (!blocks) {
    return (
      <main className="min-h-screen flex items-center justify-center text-red-500">
        Page not found or not yet created.
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">
    {blocks.map((block: { type: string; props: any }, index: number) => {
      const Component = componentMap[block.type];
      return Component ? <Component key={index} {...block.props} /> : null;
    })}
  </main>
  );
}
