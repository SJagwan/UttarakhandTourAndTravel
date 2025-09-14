"use client";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer id="contact" className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} {t("copyright")}
        </p>
        <p>
          📞{" "}
          <a href={`tel:${t("phone")}`} className="text-green-400">
            {t("phone")}
          </a>{" "}
          - {t("callText")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
