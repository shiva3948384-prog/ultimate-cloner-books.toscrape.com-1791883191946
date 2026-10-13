import React from 'react';
import { ShoppingBag } from 'lucide-react';

export interface ProductCardProps {
  name: string;
  price?: string;
  imageUrl?: string;
  description?: string;
  inStock?: boolean;
}

export function ProductCard({ name, price, imageUrl, description, inStock = true }: ProductCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-violet-500/50 transition-all flex flex-col justify-between">
      <div>
        <div className="aspect-square w-full rounded-lg bg-zinc-800/60 overflow-hidden mb-3 relative flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-zinc-600 text-xs">No Image</div>
          )}
        </div>
        <h3 className="font-semibold text-sm text-white line-clamp-2 mb-1">{name}</h3>
        {description && <p className="text-xs text-zinc-400 line-clamp-2 mb-2">{description}</p>}
      </div>
      <div className="pt-3 border-t border-zinc-800 flex items-center justify-between mt-auto">
        <span className="text-sm font-bold text-white">{price || '$0.00'}</span>
        <button className="px-3 py-1 bg-violet-600 hover:bg-violet-500 text-white text-xs rounded-md font-medium">
          Add
        </button>
      </div>
    </div>
  );
}
