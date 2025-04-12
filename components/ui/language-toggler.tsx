"use client";

import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import { useRouter } from "next/navigation";

export function LanguageToggler() {
  const [language, setLanguage] = useState<"en" | "ge">("en");

  const router = useRouter();

  const handleLanguageChange = (selectedLanguage: "en" | "ge") => {
    const currentPath = window.location.pathname;
    const segments = currentPath.split("/").filter(Boolean);
    segments[0] = selectedLanguage;
    const newPath = `/${segments.join("/")}`;
    router.push(newPath);
    localStorage.setItem("preferredLanguage", selectedLanguage);
    setLanguage(selectedLanguage);
  };
  

  useEffect(() => {
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage === "en" || savedLanguage === "ge") {
      setLanguage(savedLanguage);
    }
  }, []);
  return (
    <div className="relative group">
      <button
        onClick={() => handleLanguageChange(language === "en" ? "ge" : "en")}
        className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group-hover:bg-white/[0.08]"
      >
        {/* Glow effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 rounded-full opacity-0 group-hover:opacity-100 group-hover:via-emerald-400/20 blur-sm transition-all duration-500"></div>

        {/* Content */}
        <div className="relative flex items-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-400/10">
            <Globe className="w-3 h-3 text-emerald-400" />
          </div>

          {/* Language Toggle */}
          <div className="relative w-12 h-6 bg-black/20 rounded-full p-1 backdrop-blur-sm">
            <div
              className={`absolute inset-y-1 w-4 h-4 rounded-full bg-emerald-400 transition-all duration-300 ${
                language === "en" ? "left-1" : "left-7"
              }`}
            />
            <div className="absolute inset-0 flex items-center justify-between px-1.5 text-[10px] font-medium">
              <span
                className={`transition-colors duration-300 ${
                  language === "en" ? "text-white" : "text-gray-500"
                }`}
              >
                EN
              </span>
              <span
                className={`transition-colors duration-300 ${
                  language === "ge" ? "text-white" : "text-gray-500"
                }`}
              >
                GE
              </span>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
