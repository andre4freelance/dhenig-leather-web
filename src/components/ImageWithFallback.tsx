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
    <div className={`relative overflow-hidden bg-[#e8e2d5] ${aspectRatio} ${className}`}>
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
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center bg-[#eae3d5] text-[#6b3310]">
          <div className="w-12 h-12 rounded-lg bg-[#6b3310]/10 flex items-center justify-center mb-2.5 text-[#6b3310] border border-[#6b3310]/20">
            <Layers className="w-6 h-6" />
          </div>
          <span className="font-serif font-bold text-xs sm:text-sm text-[#1e1915] max-w-[200px] line-clamp-2">
            {alt}
          </span>
          <span className="text-[10px] font-medium text-[#746a5c] uppercase tracking-wider mt-1">
            Genuine Leather Swatch
          </span>
          {badgeLabel && (
            <span className="mt-2 text-[10px] bg-[#fdfbf7] border border-[#dcd4c5] text-[#4a4237] font-medium px-2 py-0.5 rounded">
              {badgeLabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
