"use client";

import { useTranslations } from "next-intl";

const Destinations = () => {
  const t = useTranslations("destinations");

  // Fetch places as an array from translations
  const places = t.raw("places") as { name: string; img: string }[];

  return (
    <section id="destinations" className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">{t("title")}</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {places.map((p, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden shadow-md bg-white"
          >
            <img
              src={p.img}
              alt={p.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 font-semibold">{p.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
