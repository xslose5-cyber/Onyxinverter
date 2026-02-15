import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "figma:asset/51001a18acd43f0a7ff478e60611befec1c0183b.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <ImageWithFallback
      src={logoImage}
      alt="ONYX 로고"
      className={className}
    />
  );
}