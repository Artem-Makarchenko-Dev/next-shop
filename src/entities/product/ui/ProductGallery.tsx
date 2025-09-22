"use client";

import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

type GalleryContextType = {
  current: string;
  setCurrent: Dispatch<SetStateAction<string>>;
};

const GalleryContext = createContext<GalleryContextType | null>(null);

function useGallery() {
  const ctx = useContext(GalleryContext);
  if (!ctx) throw new Error("ProductGallery components must be inside <ProductGallery>");
  return ctx;
}

export function ProductGallery({ images, children }: { images: string[]; children: ReactNode }) {
  const [current, setCurrent] = useState(images[0]);

  return (
    <GalleryContext.Provider value={{ current, setCurrent }}>
      <div className="space-y-4">{children}</div>
    </GalleryContext.Provider>
  );
}

ProductGallery.Main = function Main() {
  const { current } = useGallery();
  const t = useTranslations("product");

  return (
    <div className="aspect-square rounded-2xl flex items-center justify-center bg-background shadow">
      <Image
        src={current}
        alt={t("gallery.title")}
        width={400}
        height={400}
        priority
        className="object-contain h-80 w-auto"
      />
    </div>
  );
};

ProductGallery.Thumbnails = function Thumbnails({ images }: { images: string[] }) {
  const { setCurrent } = useGallery();
  const t = useTranslations("product.gallery");

  return (
    <div className="flex gap-5 justify-between">
      {images.map((img, index) => (
        <Image
          key={index}
          onClick={() => setCurrent(img)}
          src={img}
          alt={t("thumbAlt", { index: index + 1 })}
          width={100}
          height={100}
          className="object-contain h-24 w-24 rounded-xl border-gray-200 bg-background p-2 shadow-sm hover:shadow-md"
        />
      ))}
    </div>
  );
};
