import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import PortfolioRobertButhResponsive from "../../imports/PortfolioRobertButhResponsive";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import robert_web_square from "/images/robert_web_square.png";
import { Disclaimer } from "./Disclaimer";

type Language = "de" | "en";

interface PortfolioWithEffectsProps {
  language: Language;
}

// Translation mapping for portfolio content
const translations = {
  en: {
    title: "Portfolio",
    subtitle: "Selected Projects & Experience",
    header: {
      name: "Robert Buth",
      title: "UX Lead | CX Specialist",
      location: "Darmstadt, Germany",
      phone: "+49 179 14 31 285",
      email: "robert.buth@googlemail.com",
      linkedin: "linkedin.com/in/robert-buth-ux",
    },
    projects: {
      unionInvestment: {
        title: "Union Investment Wertvoll",
        period: "2023 – 2024",
        description: "Redesign of the online magazine for Union Investment with focus on modern UX and accessibility.",
        readMore: "Read more",
      },
      tolino: {
        title: "tolino - Digital Reading Platform",
        period: "2017 – 2023",
        description: "UX Lead for Germany's leading e-reading platform with 15+ million users.",
        readMore: "Read more",
      },
      pageplace: {
        title: "Deutsche Telekom AG - PagePlace",
        period: "2013 – 2017",
        description: "Digital reading platform and e-book store for Deutsche Telekom.",
        readMore: "Read more",
      },
      gambuu: {
        title: "Gambuu - Gamification Platform",
        period: "2016",
        description: "Interactive gamification platform for brands and retailers.",
        readMore: "Read more",
      },
      polylooks: {
        title: "polylooks - Visual Search",
        period: "2015 – 2016",
        description: "AI-powered visual search platform for fashion and lifestyle products.",
        readMore: "Read more",
      },
      yello: {
        title: "yello Strom - Energy Provider",
        period: "2014 – 2015",
        description: "Digital customer experience for innovative energy provider.",
        readMore: "Read more",
      },
      montblanc: {
        title: "Montblanc - Luxury Brand",
        period: "2013 – 2014",
        description: "E-commerce platform for premium writing instruments and accessories.",
        readMore: "Read more",
      },
      freestyle: {
        title: "Freestyle Work",
        period: "2010 – 2013",
        description: "Selected freelance projects and creative experiments.",
        readMore: "Read more",
      },
    },
  },
  de: {
    title: "Portfolio",
    subtitle: "Ausgewählte Projekte & Erfahrungen",
    header: {
      name: "Robert Buth",
      title: "UX Lead | CX Specialist",
      location: "Darmstadt, Deutschland",
      phone: "+49 179 14 31 285",
      email: "robert.buth@googlemail.com",
      linkedin: "linkedin.com/in/robert-buth-ux",
    },
    projects: {
      unionInvestment: {
        title: "Union Investment Wertvoll",
        period: "2023 – 2024",
        description: "Redesign des Online-Magazins für Union Investment mit Fokus auf moderne UX und Barrierefreiheit.",
        readMore: "Mehr erfahren",
      },
      tolino: {
        title: "tolino - Digitale Leseplattform",
        period: "2017 – 2023",
        description: "UX Lead für Deutschlands führende E-Reading-Plattform mit über 15 Millionen Nutzern.",
        readMore: "Mehr erfahren",
      },
      pageplace: {
        title: "Deutsche Telekom AG - PagePlace",
        period: "2013 – 2017",
        description: "Digitale Leseplattform und E-Book-Store für die Deutsche Telekom.",
        readMore: "Mehr erfahren",
      },
      gambuu: {
        title: "Gambuu - Gamification Plattform",
        period: "2016",
        description: "Interaktive Gamification-Plattform für Marken und Händler.",
        readMore: "Mehr erfahren",
      },
      polylooks: {
        title: "polylooks - Visual Search",
        period: "2015 – 2016",
        description: "KI-gestützte visuelle Suchplattform für Mode und Lifestyle-Produkte.",
        readMore: "Mehr erfahren",
      },
      yello: {
        title: "yello Strom - Energieanbieter",
        period: "2014 – 2015",
        description: "Digitale Customer Experience für innovativen Energieanbieter.",
        readMore: "Mehr erfahren",
      },
      montblanc: {
        title: "Montblanc - Luxusmarke",
        period: "2013 – 2014",
        description: "E-Commerce-Plattform für Premium-Schreibgeräte und Accessoires.",
        readMore: "Mehr erfahren",
      },
      freestyle: {
        title: "Freestyle Work",
        period: "2010 – 2013",
        description: "Ausgewählte Freelance-Projekte und kreative Experimente.",
        readMore: "Mehr erfahren",
      },
    },
  },
};

export function PortfolioWithEffects({ language }: PortfolioWithEffectsProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const t = translations[language];

  // Add intersection observer for scroll animations
  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('[data-name="ProjectCard"]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background - respects reduced motion with MORE glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {!shouldReduceMotion && (
          <>
            {/* Cyan glow - slow movement */}
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
            />
            {/* Yellow glow - medium speed */}
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
            />
            {/* Teal glow - fastest */}
            <motion.div
              animate={{ x: [0, 50, 0], y: [0, -100, 0] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl"
            />
            {/* Additional Yellow glow - top right, very slow */}
            <motion.div
              animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 right-1/4 w-80 h-80 bg-yellow-400/15 rounded-full blur-3xl"
            />
            {/* Additional Cyan glow - bottom left, medium */}
            <motion.div
              animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl"
            />
            {/* Subtle Yellow shimmer - center, slow rotation */}
            <motion.div
              animate={{ 
                x: [0, 40, -40, 0], 
                y: [0, -40, 40, 0],
                scale: [1, 1.2, 1, 1.2, 1]
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute top-2/3 right-1/3 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"
            />
          </>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* CV-Style Header */}
        <section className="py-12 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.header
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-2xl shadow-cyan-900/20 mb-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                {/* Profile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative flex-shrink-0"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-teal-400 to-yellow-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                  <img
                    src={imgRobertWebSquare}
                    alt="Robert Buth"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50"
                  />
                </motion.div>

                {/* Name and Title */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
                    {t.header.name}
                  </h1>
                  <p className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                    {t.header.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-sm text-gray-300">
                <p className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{t.header.location}</span>
                </p>
                <a
                  href={`tel:${t.header.phone}`}
                  className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-2 group-hover:underline">{t.header.phone}</span>
                </a>
                <a
                  href={`mailto:${t.header.email}`}
                  className="flex items-center gap-3 hover:text-teal-300 transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-2 group-hover:underline">{t.header.email}</span>
                </a>
                <a
                  href={`https://${t.header.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-cyan-300 transition-colors duration-200 group"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="underline-offset-2 group-hover:underline">{t.header.linkedin}</span>
                </a>
              </div>
            </motion.header>
          </div>
        </section>

        {/* Portfolio Title */}
        <section className="py-8 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8, delay: 0.2 }}
              className="text-center mb-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent leading-tight">
                {t.title}
              </h2>
              <p className="text-xl text-gray-400">{t.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Cards with Effects */}
        <section className="py-12 px-8 md:px-12">
          <div className="max-w-6xl mx-auto">
            <div ref={containerRef} className="portfolio-cards-container">
              <PortfolioRobertButhResponsive />
            </div>

            {/* Disclaimer */}
            <Disclaimer language={language} />
          </div>
        </section>
      </div>

      {/* Custom Styles for Card Hover Effects */}
      <style>{`
        .portfolio-cards-container [data-name="ProjectCard"] {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px);
        }

        .portfolio-cards-container [data-name="ProjectCard"].card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Disable animations for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .portfolio-cards-container [data-name="ProjectCard"] {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        /* Hover effect - only when motion is allowed */
        @media (prefers-reduced-motion: no-preference) {
          .portfolio-cards-container [data-name="ProjectCard"]:hover {
            transform: translateY(-4px) scale(1.01);
            box-shadow: 0 20px 60px rgba(0, 211, 243, 0.15),
                        0 0 40px rgba(0, 211, 243, 0.1);
          }

          .portfolio-cards-container [data-name="ProjectCard"]::before {
            content: '';
            position: absolute;
            inset: -2px;
            background: linear-gradient(135deg, 
              rgba(0, 211, 243, 0.3), 
              rgba(20, 184, 166, 0.3), 
              rgba(253, 199, 0, 0.3));
            border-radius: 26px;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            z-index: -1;
            filter: blur(20px);
          }

          .portfolio-cards-container [data-name="ProjectCard"]:hover::before {
            opacity: 0.4;
          }

          /* Hover effect on "Read more" buttons */
          .portfolio-cards-container [data-name="ProjectCard"]:hover a[href="#"] {
            background: linear-gradient(90deg, rgb(0, 211, 243) 0%, rgb(20, 184, 166) 100%);
            box-shadow: 0 0 20px rgba(0, 211, 243, 0.5);
          }

          /* Image hover effects */
          .portfolio-cards-container [data-name="ProjectCard"]:hover img {
            transform: scale(1.05);
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .portfolio-cards-container [data-name="ProjectCard"] img {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }

        /* Focus styles for keyboard navigation */
        .portfolio-cards-container [data-name="ProjectCard"]:focus-within {
          outline: 2px solid rgba(0, 211, 243, 0.6);
          outline-offset: 4px;
        }

        /* Stagger animation delay */
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(1) {
          transition-delay: 0s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(2) {
          transition-delay: 0.1s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(3) {
          transition-delay: 0.2s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(4) {
          transition-delay: 0.3s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(5) {
          transition-delay: 0.4s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(6) {
          transition-delay: 0.5s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(7) {
          transition-delay: 0.6s;
        }
        .portfolio-cards-container [data-name="ProjectCard"]:nth-child(8) {
          transition-delay: 0.7s;
        }
      `}</style>
    </div>
  );
}