import { NextResponse } from 'next/server';
import { savePage } from '../../lib/pages-store';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { slug, components } = body;

    if (!slug || !Array.isArray(components)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    savePage(slug,components);

    return NextResponse.json({ message: `Page '/${slug}' created.` }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
