import React from "react";
import Image from "next/image";

export default function SizableImage({ width, height, src, alt }) {
  return (
    <div style={{ width: width, height: height, position: "relative" }}>
      <Image src={src} layout="fill" objectFit="cover" alt={alt || "Graphic"} />
    </div>
  );
}
