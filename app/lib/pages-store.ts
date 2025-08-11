export type ComponentType = 'TextSection' | 'ImageBlock' | 'Card' | 'StatsBox' | 'CTA';

export type PageComponent = {
  type: ComponentType;
  props: Record<string, unknown>;
};

const pagesStore = new Map<string, PageComponent[]>();

export function savePage(slug: string, components: PageComponent[]) {
  pagesStore.set(slug, components);
}

export function getPage(slug: string): PageComponent[] | null {
  return pagesStore.get(slug) || null;
}
