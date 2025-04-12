"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import Logoo from "../../cutdm.png";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { LanguageToggler } from "./language-toggler";

export default function Navbar() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      } ${
        isMobileMenuOpen ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Logoo}
              alt="DM's AI Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
                DM&apos;s AI
              </span>
              <span className="text-xs tracking-wide text-emerald-400">
                Automation Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-12">
              <Link
                href="/#how-it-works"
                className="text-gray-300 hover:text-white transition-colors relative group tracking-wide text-sm font-medium"
              >
                {t("howItWorks")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#services"
                className="text-gray-300 hover:text-white transition-colors relative group tracking-wide text-sm font-medium"
              >
                {t("services")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#testimonials"
                className="text-gray-300 hover:text-white transition-colors relative group tracking-wide text-sm font-medium"
              >
                {t("results")}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/#pricing"
                className="text-gray-300 hover:text-white transition-colors relative group tracking-wide text-sm font-medium"
              >
                {t('pricing')}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggler />
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300 px-6 py-2 rounded-full font-medium tracking-wide text-sm"
              >
                {t('contact')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-4">
            <LanguageToggler />
            <Link
              href="/#how-it-works"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide text-sm font-medium"
            >
               {t("howItWorks")}
            </Link>
            <Link
              href="/#services"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide text-sm font-medium"
            >
              {t("services")}
            </Link>
            <Link
              href="/#testimonials"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide text-sm font-medium"
            >
              {t("results")}
            </Link>
            <Link
              href="/#pricing"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors tracking-wide text-sm font-medium"
            >
              {t("pricing")}
            </Link>

            <div className="px-4 pt-2">
              <Link href="/contact">
                <Button
                  className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300 rounded-full tracking-wide text-sm font-medium"
                  variant="outline"
                >
                  {t('contact')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
