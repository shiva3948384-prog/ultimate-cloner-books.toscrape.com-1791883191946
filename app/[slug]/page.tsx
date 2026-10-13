import { notFound } from 'next/navigation';
import catalogData from '../../data/catalog.json';
import pagesData from '../../data/pages.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(pagesData).map((slug) => ({ slug }));
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = (pagesData as Record<string, any>)[slug];

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#09090b] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <a href="/" className="text-violet-400 hover:underline text-sm mb-6 inline-block">
          &larr; Back to Home
        </a>
        <h1 className="text-4xl font-extrabold mb-4">{page.title}</h1>
        <p className="text-zinc-400 mb-8">{page.metaDescription || 'Reconstructed page view.'}</p>
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2">Source URL</h2>
          <code className="text-xs text-violet-300 font-mono">{page.url}</code>
        </div>

        {page.products && page.products.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Related Products ({page.products.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {page.products.map((p: any) => (
                <div key={p.id} className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg">
                  <h3 className="font-semibold text-white mb-1">{p.name}</h3>
                  <p className="text-violet-400 font-bold">{p.price || '$99.00'}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
