import fs from 'fs';
import path from 'path';


export type ComponentType = 'TextSection' | 'ImageBlock' | 'Card' | 'StatsBox' | 'CTA';

export type PageComponent = {
  type: ComponentType;
  props: Record<string, unknown>;
};


const DATA_PATH = path.join(process.cwd(), 'pages.json');

export function savePage(slug: string, components: PageComponent[]) {
  const data: Record<string, PageComponent[]> = fs.existsSync(DATA_PATH)
    ? JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
    : {};

  data[slug] = components;
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export function getPage(slug: string): PageComponent[] | null {
  if (!fs.existsSync(DATA_PATH)) return null;
  const data: Record<string, PageComponent[]> = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  return data[slug] || null;
}
