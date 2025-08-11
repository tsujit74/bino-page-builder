import { NextRequest, NextResponse } from 'next/server';
import { savePage } from '../../lib/pages-store';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, components } = body;

    if (!slug || !Array.isArray(components)) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    console.log('Saving page:', slug, components);

    try {
      savePage(slug, components);
    } catch (err) {
      console.error('Error in savePage:', err);
      return NextResponse.json({ error: 'Failed to save page' }, { status: 500 });
    }

    return NextResponse.json({ message: `Page '/${slug}' created.` }, { status: 201 });
  } catch (err) {
    console.error('API POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
