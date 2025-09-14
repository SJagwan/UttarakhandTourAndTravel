import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ClientOnly from "@/components/common/ClientOnly";

import enMessages from "@/messages/en.json";
import hiMessages from "@/messages/hi.json";
import LanguageSelector from "@/components/common/LanguageSelector";

const messagesMap: Record<string, any> = {
  en: enMessages,
  hi: hiMessages,
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "en";
  const messages = messagesMap[locale];

  if (!messages) notFound();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ClientOnly>
            <LanguageSelector />
            <Navbar />
          </ClientOnly>

          {children}

          <ClientOnly>
            <Footer />
          </ClientOnly>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
