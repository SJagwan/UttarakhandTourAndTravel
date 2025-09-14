"use client";

import { useTranslations } from "next-intl";

const BookingForm = () => {
  const t = useTranslations("booking"); // namespace in your JSON

  return (
    <section id="booking" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">{t("title")}</h2>
      <form className="max-w-3xl mx-auto grid gap-4 px-6">
        <input
          type="text"
          placeholder={t("namePlaceholder")}
          className="p-3 border rounded-lg w-full"
        />
        <input
          type="tel"
          placeholder={t("phonePlaceholder")}
          className="p-3 border rounded-lg w-full"
        />
        <input
          type="date"
          placeholder={t("datePlaceholder")}
          className="p-3 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder={t("pickupPlaceholder")}
          className="p-3 border rounded-lg w-full"
        />
        <textarea
          placeholder={t("messagePlaceholder")}
          className="p-3 border rounded-lg w-full"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          {t("submitButton")}
        </button>
      </form>
      <p className="mt-4 text-gray-600">
        {t("orCall")}{" "}
        <a href={`tel:${t("phone")}`} className="text-green-700 font-semibold">
          {t("phone")}
        </a>
      </p>
    </section>
  );
};

export default BookingForm;
