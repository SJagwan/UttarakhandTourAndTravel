"use client";

import { Bus, Wallet, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { JSX } from "react";

// Map string names to icons
const iconMap: Record<string, JSX.Element> = {
  Bus: <Bus className="w-10 h-10 text-green-600" />,
  Users: <Users className="w-10 h-10 text-green-600" />,
  Wallet: <Wallet className="w-10 h-10 text-green-600" />,
};

type Feature = {
  icon: string;
  title: string;
  description: string;
};

const WhyChooseUs = () => {
  const t = useTranslations("whyChooseUs");

  // Manually construct the features array using flat message keys
  const features: Feature[] = [
    {
      icon: t("features.feature1.icon") as keyof typeof iconMap,
      title: t("features.feature1.title"),
      description: t("features.feature1.description"),
    },
    {
      icon: t("features.feature2.icon") as keyof typeof iconMap,
      title: t("features.feature2.title"),
      description: t("features.feature2.description"),
    },
    {
      icon: t("features.feature3.icon") as keyof typeof iconMap,
      title: t("features.feature3.title"),
      description: t("features.feature3.description"),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t("heading")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {iconMap[feature.icon] || null}
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
