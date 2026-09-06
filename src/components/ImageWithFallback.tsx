"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Layers } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  badgeLabel?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  badgeLabel,
  priority = false
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#14110f] ${aspectRatio} ${className}`}>
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-[#1e1916] text-amber-500 border border-[#342b23]">
          <div className="w-12 h-12 rounded-lg bg-amber-950/60 flex items-center justify-center mb-2.5 text-amber-400 border border-amber-800/40">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-serif font-bold text-xs sm:text-sm text-[#f5f0eb] max-w-[200px] line-clamp-2">
            {alt}
          </span>
          <span className="text-[10px] font-medium text-amber-500/80 uppercase tracking-wider mt-1">
            Genuine Leather Swatch
          </span>
          {badgeLabel && (
            <span className="mt-2 text-[10px] bg-[#14110f] border border-[#342b23] text-stone-300 font-medium px-2 py-0.5 rounded">
              {badgeLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
