// src/app/[locale]/page.tsx
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Destinations from "@/components/home/Destinations";
import BookingForm from "@/components/booking/BookingForm";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }];
}

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <WhyChooseUs />
      <Destinations />
      <BookingForm />
    </main>
  );
}
