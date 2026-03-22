"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type Props = ImageProps & {
  fallback?: string;
};

export default function FallbackImage({
  src,
  alt,
  fallback = "/avatar.svg",
  ...props
}: Props) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
    />
  );
}