"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
];

export default function LanguageSelector() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const lang = localStorage.getItem("selectedLang");
    if (!lang) {
      setShowModal(true);
    } else {
      if (!window.location.pathname.startsWith(`/${lang}`)) {
        router.replace(`/${lang}`);
      }
    }
  }, [router]);

  if (!mounted || !showModal) return null;

  const selectLanguage = (lang: string) => {
    localStorage.setItem("selectedLang", lang);
    setShowModal(false);
    router.push(`/${lang}`);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
        <h2 className="text-lg font-bold mb-4">Select Your Language</h2>
        <div className="flex justify-center gap-4">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
