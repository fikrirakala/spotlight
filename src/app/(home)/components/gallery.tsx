import Image from "next/image";

import image1 from "@/images/gallery/image-1.webp";
import image2 from "@/images/gallery/image-2.webp";
import image3 from "@/images/gallery/image-3.webp";
import image4 from "@/images/gallery/image-4.webp";
import image5 from "@/images/gallery/image-5.webp";
import { cn } from "@/lib/utils";

const images = [
  {
    src: image1,
    rotation: "rotate-2",
  },
  {
    src: image2,
    rotation: "-rotate-2",
  },
  {
    src: image3,
    rotation: "rotate-2",
  },
  {
    src: image4,
    rotation: "-rotate-2",
  },
  {
    src: image5,
    rotation: "rotate-2",
  },
];

export default function Gallery() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "relative aspect-9/10 w-44 flex-none rotate-2 overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl",
              image.rotation
            )}
          >
            <Image
              src={image.src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
