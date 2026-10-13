import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function Navbar({ title = 'Cloned Site' }: { title?: string }) {
  return (
    <header className="w-full border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
      <div className="font-bold text-lg text-white">{title}</div>
      <nav className="flex items-center gap-6 text-sm text-zinc-400">
        <a href="/" className="text-white hover:text-violet-400">Home</a>
        <a href="/#products" className="hover:text-white">Catalog</a>
      </nav>
      <button className="p-2 text-zinc-300 hover:text-white">
        <ShoppingBag className="w-5 h-5" />
      </button>
    </header>
  );
}
