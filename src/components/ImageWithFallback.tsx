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
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  aspectRatio = "aspect-[4/3]",
  badgeLabel
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#f5f1ea] ${aspectRatio} ${className}`}>
      {!error ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          onError={() => setError(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#f5f1ea] via-[#ebe5da] to-[#dfd7c9] text-[#78350f]">
          <div className="w-14 h-14 rounded-2xl bg-[#78350f]/10 flex items-center justify-center mb-3 text-[#78350f] border border-[#78350f]/20">
            <Layers className="w-7 h-7" />
          </div>
          <span className="font-serif font-bold text-sm tracking-wide text-[#1c1917] max-w-[200px] line-clamp-2">
            {alt}
          </span>
          <span className="text-[11px] font-medium text-[#78350f] tracking-wider uppercase mt-1">
            Genuine Leather Swatch
          </span>
          {badgeLabel && (
            <span className="mt-2 text-[10px] bg-[#78350f]/15 text-[#451a03] font-semibold px-2.5 py-0.5 rounded-full">
              {badgeLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
