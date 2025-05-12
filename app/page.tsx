// app/page.tsx
"use client";

import Link from "next/link";
import { useLanguage } from "./contexts/LanguageContext";

const homeContent = {
  en: {
    hero: {
      heading: "Expert Auto Repair & Maintenance",
      subheading: "Professional service you can trust",
    },
    intro: {
      title: "Welcome to Gabi & Aryeh's Auto Garage",
      description:
        "With over 30 years of experience, we provide quality auto repair and maintenance services. Our certified technicians use the latest diagnostic equipment to ensure your vehicle runs at its best.",
    },
    services: {
      title: "Our Services",
      list: [
        "General Repairs & Maintenance",
        "Diagnostics & Electrical Systems",
        "Brake Service & Repair",
        "Engine & Transmission",
        "Air Conditioning & Heating",
      ],
    },
    cta: "Schedule Service",
  },
  he: {
    hero: {
      heading: "תיקון ותחזוקת רכב מומחים",
      subheading: "שירות מקצועי שאפשר לסמוך עליו",
    },
    intro: {
      title: "ברוכים הבאים למושך גבי את אריה",
      description:
        "עם ניסיון של מעל 30 שנה, אנו מספקים שירותי תיקון ותחזוקת רכב באיכות גבוהה. הטכנאים המוסמכים שלנו משתמשים בציוד אבחון מתקדם כדי להבטיח שהרכב שלך יעבוד בצורה הטובה ביותר.",
    },
    services: {
      title: "השירותים שלנו",
      list: [
        "תיקונים ותחזוקה כללית",
        "אבחון ומערכות חשמל",
        "שירות ותיקון בלמים",
        "מנוע ותמסורת",
        "מיזוג אוויר וחימום",
      ],
    },
    cta: "קביעת שירות",
  },
};

export default function Home() {
  const { language, isRTL } = useLanguage();
  const content = homeContent[language];

  const directionClass = isRTL ? "text-right" : "text-left";

  return (
    <main className={`flex min-h-screen flex-col ${directionClass}`}>
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-gray-800 opacity-70"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-4">{content.hero.heading}</h1>
          <p className="text-xl mb-8">{content.hero.subheading}</p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            {content.cta}
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">{content.intro.title}</h2>
        <p className="text-gray-700 text-lg mb-8">
          {content.intro.description}
        </p>

        {/* Services Preview */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6">
            {content.services.title}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.services.list.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              >
                {service}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
            >
              {language === "en" ? "View All Services" : "צפה בכל השירותים"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
