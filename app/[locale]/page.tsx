"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import {
  Bot,
  Brain,
  Clock,
  Code,
  Database,
  Menu,
  MessageSquare,
  Shield,
  Sparkles,
  X,
  TrendingUp,
  Users,
  Timer,
  DollarSign,
  Check,
  Calendar,
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Logoo from "../../cutdm.png";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Home() {
  const heroT = useTranslations("Hero");
  const howItWorksT = useTranslations("howItWorks");
  const servicesT = useTranslations("services");
  const resultsT = useTranslations("results");
  const pricingT = useTranslations("pricing");
  const consultationT = useTranslations("consultation");
  const footerT = useTranslations("footer");

  const [isAnnual, setIsAnnual] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featureKeys = ["0", "1", "2", "3", "4", "5"];
  const featureKeysPro = ["0", "1", "2", "3", "4", "5", "6", "7"];
  const featureKeysInfinity = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  const consultationKeys = ["0", "1", "2", "3"];

  const listConsultationItems = consultationKeys.map((key) =>
    consultationT(`benefits.${key}`)
  );

  const plans = [
    {
      name: pricingT("plans.standard.name"),
      price: isAnnual ? "5,000" : "500",
      maxPrice: isAnnual ? "8,000" : "800",
      features: featureKeys.map((key) =>
        pricingT(`plans.standard.features.${key}`)
      ),
    },
    {
      name: pricingT("plans.pro.name"),
      price: isAnnual ? "10,000" : "1,000",
      maxPrice: isAnnual ? "15,000" : "1,500",
      features: featureKeysPro.map((key) =>
        pricingT(`plans.pro.features.${key}`)
      ),
      popular: true,
    },
    {
      name: pricingT("plans.infinity.name"),
      price: isAnnual ? "20,000" : "2,000",
      maxPrice: isAnnual ? "50,000" : "5,000",
      features: featureKeysInfinity.map((key) =>
        pricingT(`plans.infinity.features.${key}`)
      ),
    },
  ];

  const achievements = [
    {
      icon: <Timer className="w-8 h-8" />,
      metric: resultsT("metrics.time.value"),
      label: resultsT("metrics.time.label"),
      description: resultsT("metrics.time.description"),
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      metric: resultsT("metrics.cost.value"),
      label: resultsT("metrics.cost.label"),
      description: resultsT("metrics.cost.description"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      metric: resultsT("metrics.satisfaction.value"),
      label: resultsT("metrics.satisfaction.label"),
      description: resultsT("metrics.satisfaction.description"),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      metric: resultsT("metrics.response.value"),
      label: resultsT("metrics.response.label"),
      description: resultsT("metrics.response.description"),
    },
  ];

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
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 blur-3xl animate-pulse" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-white/5 backdrop-blur-lg border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-400" />
            {heroT("welcome")}
          </div>
          <h1 className="text-5xl md:text-7xl max-xs:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-[1.2] pb-4">
            {heroT("title")}
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            {heroT("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href={"/contact"} className="block">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-black font-medium tracking-wide px-8 py-6 rounded-2xl shadow-lg shadow-emerald-400/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-400/30"
              >
                <div className="flex items-center gap-2">
                  {heroT("buildAgent")}
                  <Bot className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Button>
            </Link>
            <Link href={"/contact"} className="block">
              <Button
                size="lg"
                variant="outline"
                className="group relative border-2 border-white/20 hover:border-emerald-400/50 text-white font-medium tracking-wide px-8 py-6 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-emerald-400/5"
              >
                <div className="flex items-center gap-2">
                  {heroT("bookDemo")}
                  <Clock className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent pb-4">
              {howItWorksT("title")}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {howItWorksT("subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Brain className="w-8 h-8 text-emerald-400" />,
                title: howItWorksT("steps.step1.title"),
                description: howItWorksT("steps.step1.description"),
              },
              {
                icon: <Code className="w-8 h-8 text-emerald-400" />,
                title: howItWorksT("steps.step2.title"),
                description: howItWorksT("steps.step2.description"),
              },
              {
                icon: <Clock className="w-8 h-8 text-emerald-400" />,
                title: howItWorksT("steps.step3.title"),
                description: howItWorksT("steps.step3.description"),
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/[0.1]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent pb-4">
              {servicesT("title")}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {servicesT("subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Bot className="w-6 h-6" />,
                title: servicesT("items.chatbots.title"),
                description: servicesT("items.chatbots.description"),
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: servicesT("items.support.title"),
                description: servicesT("items.support.description"),
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: servicesT("items.dataEntry.title"),
                description: servicesT("items.dataEntry.description"),
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: servicesT("items.taskAutomation.title"),
                description: servicesT("items.taskAutomation.description"),
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group relative p-8 bg-gradient-to-b from-white/[0.08] to-transparent border-white/[0.08] backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/[0.1] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent pb-4">
              {resultsT("title")}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {resultsT("subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] backdrop-blur-sm hover:border-emerald-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/[0.1] text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400/10 to-emerald-400/5 text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="space-y-2">
                    <p className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                      {achievement.metric}
                    </p>
                    <p className="text-xl font-semibold text-white">
                      {achievement.label}
                    </p>
                    <p className="text-sm text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent pb-4">
              {pricingT("title")}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              {pricingT("subtitle")}
            </p>

            {/* Modern Toggle */}
            <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isAnnual
                    ? "bg-emerald-400 text-black shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {pricingT("monthly")}
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isAnnual
                    ? "bg-emerald-400 text-black shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {pricingT("annual")}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative group rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "z-10 scale-105 md:scale-110 bg-gradient-to-b from-emerald-400/20 via-emerald-400/10 to-transparent border-emerald-400/20"
                    : "bg-gradient-to-b from-white/[0.08] to-transparent border-white/[0.08]"
                }`}
              >
                {/* Glow effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/0 to-emerald-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:via-emerald-400/20"></div>

                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black text-sm font-medium rounded-full shadow-lg shadow-emerald-400/20 z-20">
                    {pricingT("popular")}
                  </div>
                )}

                <div className="relative p-8 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-emerald-500/50 group-hover:bg-white/[0.03] overflow-hidden">
                  {/* Spotlight effect */}
                  <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-emerald-400/5 to-transparent blur-2xl"></div>
                  </div>

                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                          {plan.price}
                        </span>
                        <span className="text-gray-400">GEL</span>
                        <span className="text-sm text-gray-400">
                          /{isAnnual ? "year" : "month"}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        Up to {plan.maxPrice} {pricingT("currency")}
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-400/30">
                            <Check className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={"/contact"} className="relative z-10">
                      <Button
                        className={`w-full group/button relative overflow-hidden ${
                          plan.popular
                            ? "bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-black shadow-lg shadow-emerald-400/20"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        } transition-all duration-300`}
                      >
                        {pricingT("getStarted")}

                        <div className="absolute inset-0 -translate-x-full group-hover/button:translate-x-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500"></div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side content */}
            <div className="flex-1 text-left">
              <div className="inline-flex items-center rounded-full px-4 py-1 text-sm bg-white/5 backdrop-blur-lg border border-white/10 mb-8">
                <Calendar className="w-4 h-4 mr-2 text-emerald-400" />
                {consultationT("badge")}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent leading-[1.2] pb-4">
                {consultationT("title")}
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-xl">
                {consultationT("subtitle")}
              </p>
              <ul className="space-y-4 mb-8">
                {listConsultationItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side form */}
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

                <div className="relative p-8 rounded-3xl bg-white/[0.08] border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-emerald-500/50 group-hover:bg-white/[0.12]">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder={consultationT("form.name")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                        required
                      />
                      <input
                        type="text"
                        placeholder={consultationT("form.company")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                        required
                      />
                      <input
                        type="email"
                        placeholder={consultationT("form.email")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                        required
                      />
                      <input
                        type="tel"
                        placeholder={consultationT("form.phone")}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500"
                        required
                      />
                      <textarea
                        placeholder={consultationT("form.message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-400/50 focus:outline-none focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 placeholder-gray-500 resize-none"
                        required
                      ></textarea>
                    </div>
                    <Button className="w-full group relative overflow-hidden bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-black shadow-lg shadow-emerald-400/20 transition-all duration-300">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {consultationT("form.submit")}
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
                            {consultationT("form.thanks")}
                          </h2>
                          <p className="text-gray-600 mb-8">
                            {consultationT("form.formSubmitted")}
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
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
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {footerT("about")}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {footerT("quickLinks")}
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 group-hover:bg-emerald-400 transition-colors duration-300"></span>
                    Results
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {footerT("contact")}
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:dmaiautomation@gmail.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                      <Mail className="w-4 h-4 text-emerald-400" />
                    </div>
                    dmaiautomation@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+995592162616"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    +(995) 592-162-616
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {footerT("followUs")}
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.linkedin.com/company/105676638/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                    <Linkedin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61568200016744"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                    <Facebook className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/dmsaiautomationagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-400/10 flex items-center justify-center group-hover:bg-emerald-400/20 transition-all duration-300">
                    <Instagram className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">{footerT("rights")}</p>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                >
                  {footerT("legal.privacy")}
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                >
                  {footerT("legal.terms")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
