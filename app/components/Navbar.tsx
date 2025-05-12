"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, isRTL } = useLanguage();

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "he" : "en");
  };

  return (
    <nav
      className={`bg-gray-800 text-white ${isRTL ? "text-right" : "text-left"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and site name */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="font-bold text-xl">{t.siteName}</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-700">
                {t.home}
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md hover:bg-gray-700"
              >
                {t.about}
              </Link>
              <Link
                href="/services"
                className="px-3 py-2 rounded-md hover:bg-gray-700"
              >
                {t.services}
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md hover:bg-gray-700"
              >
                {t.contact}
              </Link>
              <Link
                href="/jobs"
                className="px-3 py-2 rounded-md hover:bg-gray-700"
              >
                {t.jobs}
              </Link>

              {/* Language toggle button */}
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
              >
                {t.switchLanguage}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {t.home}
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {t.about}
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {t.services}
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {t.contact}
            </Link>
            <Link
              href="/jobs"
              className="block px-3 py-2 rounded-md hover:bg-gray-700"
            >
              {t.jobs}
            </Link>

            {/* Language toggle in mobile menu */}
            <button
              onClick={toggleLanguage}
              className="block w-full text-left px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600"
            >
              {t.switchLanguage}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
