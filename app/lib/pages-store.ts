
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'pages.json');

export function savePage(slug: string, components: any[]) {
  const data = fs.existsSync(DATA_PATH)
    ? JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'))
    : {};

  data[slug] = components;
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

export function getPage(slug: string) {
  if (!fs.existsSync(DATA_PATH)) return null;
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
  return data[slug] || null;
}
