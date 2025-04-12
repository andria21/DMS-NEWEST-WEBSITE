"use client";

import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  MapPin,
  Clock,
  ArrowRight,
  X,
} from "lucide-react";
import Image from "next/image";
import Logoo from "../../cutdm.png";

import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Contact() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const contactT = useTranslations("contact");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const companyName = (form[1] as HTMLInputElement).value;
    const email = (form[2] as HTMLInputElement).value;
    const phone = (form[3] as HTMLInputElement).value;
    const message = (form[4] as HTMLTextAreaElement).value;

    try {
      await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          name,
          companyName,
          email,
          phone,
          message,
        }),
      });
      (form as HTMLFormElement).reset();
      setIsPopupVisible(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 blur-3xl animate-pulse" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-[1.2] pb-4">
            {contactT("title")}
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            {contactT("subtitle")}
          </p>
        </div>
      </div>

      {/* Contact Information Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Card - Email */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                  <Mail className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {contactT("emailUs")}
                  </h3>
                  <a
                    href="mailto:dmaiautomation@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    dmaiautomation@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Card - Phone */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {contactT("callUs")}
                  </h3>
                  <a
                    href="tel:+995592162616"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    +(995) 592-162-616
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Card - Hours */}
            <div className="group relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.12] hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {contactT("business")}
                  </h3>
                  <p className="text-gray-400">
                    {contactT("businessHours")}
                    <br />
                    9:00 AM - 6:00 PM GMT+4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

            <div className="relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-emerald-500/50 group-hover:bg-white/[0.12]">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={contactT("form.name")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                  />
                  <input
                    type="text"
                    placeholder={contactT("form.company")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder={contactT("form.email")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                  />
                  <input
                    type="tel"
                    placeholder={contactT("form.phone")}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                  />
                </div>
                <textarea
                  placeholder={contactT("form.message")}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500 resize-none"
                ></textarea>
                <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-black shadow-lg shadow-emerald-400/20 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {contactT("form.submit")}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500"></div>
                </Button>
              </form>
              {/* Popup */}
              {isPopupVisible && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]">
                  <div className="relative bg-white rounded-2xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] w-full max-w-md transform transition-all animate-[slideIn_0.3s_ease-out]">
                    <div className="p-6 sm:p-8">
                      <button
                        onClick={() => setIsPopupVisible(false)}
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close popup"
                      >
                        <X size={20} />
                      </button>

                      <div className="w-12 h-12 mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-emerald-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {contactT("thanks")}
                      </h2>
                      <p className="text-gray-600 mb-8">
                        {contactT("formSubmitted")}
                      </p>

                      <button
                        onClick={() => setIsPopupVisible(false)}
                        className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium
                                   hover:bg-emerald-600 active:bg-emerald-700 
                                   transform transition-all duration-200 
                                   focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.linkedin.com/company/105676638/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.12] hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                <Linkedin className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Follow us on LinkedIn</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61568200016744"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.12] hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                <Facebook className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Facebook</h3>
                <p className="text-gray-400 text-sm">Connect on Facebook</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/dmsaiautomationagency/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-emerald-500/50 hover:bg-white/[0.12] hover:-translate-y-1 flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                <Instagram className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Instagram</h3>
                <p className="text-gray-400 text-sm">Follow us on Instagram</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
