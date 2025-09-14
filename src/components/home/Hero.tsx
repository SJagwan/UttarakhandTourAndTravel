"use client";

import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section
      className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/uttarakhand-hero.jpg')" }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-xl">
        <h2 className="text-4xl md:text-5xl font-bold">{t("heading")}</h2>
        <p className="mt-4 text-lg">{t("subheading")}</p>
        <div className="mt-6 space-x-4">
          <a
            href="#booking"
            className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            {t("bookNow")}
          </a>
          <a
            href={`tel:${t("phone")}`}
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            {t("callUs")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
