import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Linkedin, Award, GraduationCap, FileCheck, Globe } from "lucide-react";
import robert_web_square from "public/images/robert_web_square.png";
import { Disclaimer } from "./Disclaimer";

// Types
type Language = "de" | "en";

interface CVContent {
  header: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
  };
  sections: {
    profile: {
      title: string;
      content: string[];
    };
    achievements: {
      title: string;
      items: string[];
    };
    expertise: {
      title: string;
      categories: {
        title: string;
        items: string[];
      }[];
    };
    experience: {
      title: string;
      jobs: {
        company: string;
        role: string;
        client?: string;
        period: string;
        description: string;
        contributions: string[];
      }[];
    };
    awards: {
      title: string;
      period: string;
      items: string[];
    };
    certifications: {
      title: string;
      items: {
        title: string;
        year: string;
        organization?: string;
      }[];
    };
    education: {
      title: string;
      items: {
        institution: string;
        degree: string;
        period?: string;
      }[];
    };
    languages: {
      title: string;
      items: {
        language: string;
        level: string;
      }[];
    };
  };
}

// Content data
const cvData: Record<Language, CVContent> = {
  en: {
    header: {
      name: "Robert Buth",
      title: "UX Lead | CX Specialist",
      location: "Darmstadt, Germany",
      phone: "+49 179 14 31 285",
      email: "robert.buth@googlemail.com",
      linkedin: "linkedin.com/in/robert-buth-ux",
    },
    sections: {
      profile: {
        title: "Intro",
        content: [
          "Passionate Design Leader with over 20 years of experience in UX, Product Design, and Digital Experience. I combine a strong visual design background with strategic thinking and a hands-on mentality. Focus on user-centered product development, clear UX processes, and measurable design impact through UX maturity models and KPIs. Leading international UX teams and close collaboration with Product and Engineering.",
        ],
      },
      achievements: {
        title: "Key Achievements",
        items: [
          "20+ years in UX, Product Design and Digital Experience",
          "Led international UX teams (10+ designers) across Europe, North America and Asia",
          "15+ international design awards including Red Dot, iF Design Award and Good Design Award",
          "Built and scaled design systems for global digital platforms",
          "Introduced UX maturity models, design operations and governance structures",
          "Facilitated design sprints and innovation workshops across product organizations",
        ],
      },
      expertise: {
        title: "Core Expertise",
        categories: [
          {
            title: "Design Leadership",
            items: [
              "UX Strategy",
              "Design Operations & UX Governance",
              "UX Team Leadership & Coaching",
              "Design System Strategy",
            ],
          },
          {
            title: "Product & Experience Design",
            items: [
              "User-Centered Product Development",
              "UX Architecture & Information Architecture",
              "Customer Journey Design",
              "Digital Platform Design",
            ],
          },
          {
            title: "Methods",
            items: [
              "Design Thinking",
              "Double Diamond",
              "Design Sprints",
              "Agile Product Development (SAFe, Scrum)",
            ],
          },
          {
            title: "Tools",
            items: [
              "Figma · FigJam · Sketch · Adobe Creative Cloud",
              "JIRA · Notion · Trello · HTML/CSS · Basic JavaScript",
            ],
          },
        ],
      },
      experience: {
        title: "Professional Experience",
        jobs: [
          {
            company: "Cofinpro",
            role: "CX Specialist",
            client: "DekaBank",
            period: "2025 – Present",
            description:
              "Advising product and innovation teams on the development of digital investment platforms and customer experiences.",
            contributions: [
              "Facilitated design sprints and innovation workshops within product teams",
              "Developed customer journey concepts for investment and advisory platforms",
              "Expanded and scaled the design system for financial advisory tools",
              "Designed the UX and interaction model for the Deka Savings World platform",
              "Created digital calculators supporting the investment advisory process",
              "Introduced design tokens to improve collaboration between design and development",
              "Provided UX consulting for product teams across the Deka sales platform ecosystem",
            ],
          },
          {
            company: "Cofinpro",
            role: "CX Specialist",
            client: "VisualVest",
            period: "2023 – 2024",
            description:
              "UX Lead for the redesign and strategic evolution of digital investment products.",
            contributions: [
              'Led UX strategy and product design for the premium investment product "WertAnlage"',
              "Built and scaled a design system for wealth management products",
              "Redesigned parts of the VestHub online banking platform",
              "Supported implementation of accessibility guidelines under BFSG regulation",
            ],
          },
          {
            company: "Rakuten Kobo Inc.",
            role: "UX Lead",
            period: "2017 – 2023",
            description:
              "Led an international UX team within a global product organization delivering digital reading platforms and services.",
            contributions: [
              "Led a distributed UX team of 10+ designers across Canada, Japan and Germany",
              "Responsible for UX delivery across multiple global product lines",
              "Built and scaled a global design system used across Kobo platforms",
              "Defined UX strategy and roadmaps within the product organization",
              "Introduced structured UX processes and design governance",
              "Worked closely with engineering and product leadership across global teams",
              "Coordinated UX collaboration with nearshore teams in Europe",
            ],
          },
          {
            company: "Deutsche Telekom AG",
            role: "Product Designer",
            period: "2011 – 2017",
            description:
              "UX consulting and product design for digital services and innovation initiatives.",
            contributions: [
              "Developed UX concepts and customer journeys for digital products",
              "Facilitated design thinking workshops across product teams",
              "Created wireframes, prototypes and UX/UI concepts",
              "Supported product teams in integrating UX methods into product development",
            ],
          },
          {
            company: "Freelance UX & UI Designer",
            role: "",
            period: "2002 – 2011",
            description:
              "Worked with agencies and companies on digital products and experience design.",
            contributions: [
              "Selected Clients: Deutsche Telekom Products & Innovation, Jung von Matt 1:1, Yello Strom, P1 Club, Grundy Entertainment",
            ],
          },
        ],
      },
      awards: {
        title: "Awards",
        period: "15+ International Design Awards (2011–2022)",
        items: [
          "Red Dot Design Award",
          "iF Design Award",
          "Good Design Award",
          "DDC Award",
          "Annual Multimedia Award",
        ],
      },
      certifications: {
        title: "Certifications",
        items: [
          {
            title: "LEGO® Serious Play® Facilitator",
            year: "2025",
            organization: "HelloAgile",
          },
          {
            title: "GRID Leadership 4.0 – Team Leadership Certification",
            year: "2024",
          },
          {
            title: "Product Owner Certification",
            year: "2023",
            organization: "Scrum.org",
          },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            institution: "Köln International School of Design (KISD)",
            degree: "Diplom-Designer (FH), Communication Design",
            period: "2005 – 2009",
          },
          {
            institution: "Hochschule Rhein-Main Wiesbaden",
            degree: "Vordiplom Communication Design",
            period: "2002 – 2005",
          },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { language: "German", level: "Native" },
          { language: "English", level: "Fluent" },
          { language: "Spanish", level: "Basic" },
        ],
      },
    },
  },
  de: {
    header: {
      name: "Robert Buth",
      title: "UX Lead | CX Specialist",
      location: "Darmstadt, Deutschland",
      phone: "+49 179 14 31 285",
      email: "robert.buth@googlemail.com",
      linkedin: "linkedin.com/in/robert-buth-ux",
    },
    sections: {
      profile: {
        title: "Intro",
        content: [
          "Passionierter Design Leader mit über 20 Jahren Erfahrung in UX, Product Design und Digital Experience. Ich verbinde starken visuellen Design-Background mit strategischem Denken und Hands-on-Mentalität. Fokus auf nutzerzentrierte Produktentwicklung, klare UX-Prozesse und messbare Designwirkung durch UX-Maturity-Modelle und KPIs. Führung internationaler UX-Teams und enge Zusammenarbeit mit Product und Engineering.",
        ],
      },
      achievements: {
        title: "Wichtigste Erfolge",
        items: [
          "20+ Jahre Erfahrung in UX, Product Design und Digital Experience",
          "Leitung internationaler UX-Teams (10+ Designer) in Europa, Nordamerika und Asien",
          "15+ internationale Design-Auszeichnungen, darunter Red Dot, iF Design Award und Good Design Award",
          "Aufbau und Skalierung von Design-Systemen für globale digitale Plattformen",
          "Einführung von UX-Reifegradmodellen, Design Operations und Governance-Strukturen",
          "Moderation von Design Sprints und Innovationsworkshops in Produktorganisationen",
        ],
      },
      expertise: {
        title: "Kernkompetenzen",
        categories: [
          {
            title: "Design Leadership",
            items: [
              "UX-Strategie",
              "Design Operations & UX Governance",
              "UX Team Leadership & Coaching",
              "Design-System-Strategie",
            ],
          },
          {
            title: "Product & Experience Design",
            items: [
              "User-Centered Product Development",
              "UX-Architektur & Informationsarchitektur",
              "Customer Journey Design",
              "Digitales Plattform-Design",
            ],
          },
          {
            title: "Methoden",
            items: [
              "Design Thinking",
              "Double Diamond",
              "Design Sprints",
              "Agile Produktentwicklung (SAFe, Scrum)",
            ],
          },
          {
            title: "Tools",
            items: [
              "Figma · FigJam · Sketch · Adobe Creative Cloud",
              "JIRA · Notion · Trello · HTML/CSS · Basic JavaScript",
            ],
          },
        ],
      },
      experience: {
        title: "Berufserfahrung",
        jobs: [
          {
            company: "Cofinpro",
            role: "CX Specialist",
            client: "DekaBank",
            period: "2025 – Heute",
            description:
              "Beratung von Produkt- und Innovationsteams bei der Entwicklung digitaler Investmentplattformen und Customer Experiences.",
            contributions: [
              "Moderation von Design Sprints und Innovationsworkshops in Produktteams",
              "Entwicklung von Customer-Journey-Konzepten für Investment- und Beratungsplattformen",
              "Ausbau und Skalierung des Design-Systems für Finanzberatungstools",
              "Gestaltung des UX- und Interaktionsmodells für die Deka-Sparwelt-Plattform",
              "Erstellung digitaler Rechner zur Unterstützung des Investmentberatungsprozesses",
              "Einführung von Design Tokens zur Verbesserung der Zusammenarbeit zwischen Design und Development",
              "UX-Beratung für Produktteams im gesamten Deka-Vertriebsplattform-Ökosystem",
            ],
          },
          {
            company: "Cofinpro",
            role: "CX Specialist",
            client: "VisualVest",
            period: "2023 – 2024",
            description:
              "UX Lead für die Neugestaltung und strategische Weiterentwicklung digitaler Investmentprodukte.",
            contributions: [
              'Leitung der UX-Strategie und des Produktdesigns für das Premium-Investmentprodukt "WertAnlage"',
              "Aufbau und Skalierung eines Design-Systems für Wealth-Management-Produkte",
              "Neugestaltung von Teilen der VestHub-Online-Banking-Plattform",
              "Unterstützung bei der Implementierung von Barrierefreiheits-Richtlinien gemäß BFSG-Verordnung",
            ],
          },
          {
            company: "Rakuten Kobo Inc.",
            role: "UX Lead",
            period: "2017 – 2023",
            description:
              "Leitung eines internationalen UX-Teams in einer globalen Produktorganisation zur Bereitstellung digitaler Leseplattformen und -dienste.",
            contributions: [
              "Leitung eines verteilten UX-Teams von 10+ Designern in Kanada, Japan und Deutschland",
              "Verantwortlich für UX-Delivery über mehrere globale Produktlinien hinweg",
              "Aufbau und Skalierung eines globalen Design-Systems für Kobo-Plattformen",
              "Definition von UX-Strategie und Roadmaps innerhalb der Produktorganisation",
              "Einführung strukturierter UX-Prozesse und Design Governance",
              "Enge Zusammenarbeit mit Engineering- und Product-Leadership in globalen Teams",
              "Koordination der UX-Zusammenarbeit mit Nearshore-Teams in Europa",
            ],
          },
          {
            company: "Deutsche Telekom AG",
            role: "Product Designer",
            period: "2011 – 2017",
            description:
              "UX-Beratung und Produktdesign für digitale Services und Innovationsinitiativen.",
            contributions: [
              "Entwicklung von UX-Konzepten und Customer Journeys für digitale Produkte",
              "Moderation von Design-Thinking-Workshops in Produktteams",
              "Erstellung von Wireframes, Prototypen und UX/UI-Konzepten",
              "Unterstützung von Produktteams bei der Integration von UX-Methoden in die Produktentwicklung",
            ],
          },
          {
            company: "Freiberuflicher UX- & UI-Designer",
            role: "",
            period: "2002 – 2011",
            description:
              "Zusammenarbeit mit Agenturen und Unternehmen an digitalen Produkten und Experience Design.",
            contributions: [
              "Ausgewählte Kunden: Deutsche Telekom Products & Innovation, Jung von Matt 1:1, Yello Strom, P1 Club, Grundy Entertainment",
            ],
          },
        ],
      },
      awards: {
        title: "Auszeichnungen",
        period: "15+ internationale Design-Auszeichnungen (2011–2022)",
        items: [
          "Red Dot Design Award",
          "iF Design Award",
          "Good Design Award",
          "DDC Award",
          "Annual Multimedia Award",
        ],
      },
      certifications: {
        title: "Zertifizierungen",
        items: [
          {
            title: "LEGO® Serious Play® Facilitator",
            year: "2025",
            organization: "HelloAgile",
          },
          {
            title: "GRID Leadership 4.0 – Team Leadership Zertifizierung",
            year: "2024",
          },
          {
            title: "Product Owner Zertifizierung",
            year: "2023",
            organization: "Scrum.org",
          },
        ],
      },
      education: {
        title: "Ausbildung",
        items: [
          {
            institution: "Köln International School of Design (KISD)",
            degree: "Diplom-Designer (FH), Kommunikationsdesign",
            period: "2005 – 2009",
          },
          {
            institution: "Hochschule Rhein-Main Wiesbaden",
            degree: "Vordiplom Kommunikationsdesign",
            period: "2002 – 2005",
          },
        ],
      },
      languages: {
        title: "Sprachen",
        items: [
          { language: "Deutsch", level: "Muttersprache" },
          { language: "Englisch", level: "Fließend" },
          { language: "Spanisch", level: "Grundkenntnisse" },
        ],
      },
    },
  },
};

interface ExecutiveCVProps {
  initialLanguage?: Language;
  onLanguageChange?: (lang: Language) => void;
}

export function ExecutiveCV({ initialLanguage = "en", onLanguageChange }: ExecutiveCVProps = {}) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const content = cvData[language];

  // Sync with parent language
  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 relative overflow-hidden font-sans">
      {/* Animated Background Blurs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl"
        ></motion.div>
        {/* Additional glows with different speeds - Parallax effect */}
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 50, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-1/4 w-80 h-80 bg-yellow-400/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -80, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-cyan-400/12 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, 40, -40, 0], 
            y: [0, -40, 40, 0],
            scale: [1, 1.2, 1, 1.2, 1]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-2/3 right-1/3 w-64 h-64 bg-yellow-300/8 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page 1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="cv-page mb-16 pb-16 border-b border-gray-800"
        >
          {/* Header with Profile Image */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12 bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 shadow-2xl shadow-cyan-500/10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-6">
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
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
                  {content.header.name}
                </h1>
                <p className="text-xl md:text-2xl mb-4 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                  {content.header.title}
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 text-sm text-gray-300">
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{content.header.location}</span>
              </p>
              <a
                href={`tel:${content.header.phone}`}
                className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 group-hover:underline">{content.header.phone}</span>
              </a>
              <a
                href={`mailto:${content.header.email}`}
                className="flex items-center gap-3 hover:text-teal-300 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 group-hover:underline">{content.header.email}</span>
              </a>
              <a
                href={`https://${content.header.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-300 transition-colors duration-200 group"
              >
                <Linkedin className="w-4 h-4 text-cyan-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 group-hover:underline">{content.header.linkedin}</span>
              </a>
            </div>
          </motion.header>

          {/* Executive Profile */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 pb-3 bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent inline-block">
              {content.sections.profile.title}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
              {content.sections.profile.content.map((paragraph, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.section>

          {/* Key Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 pb-3 bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent inline-block">
              {content.sections.achievements.title}
            </h2>
            <div className="bg-gradient-to-br from-yellow-900/20 to-teal-900/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
              <ul className="space-y-3 text-gray-300">
                {content.sections.achievements.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex gap-3 transition-all"
                  >
                    <span className="text-yellow-400 mt-1.5">▸</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Core Expertise */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 pb-3 bg-gradient-to-r from-cyan-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent inline-block">
              {content.sections.expertise.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.sections.expertise.categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-xl rounded-xl p-5 border border-cyan-500/30 hover:border-yellow-400/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  <h3 className="font-bold text-lg text-cyan-300 mb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {category.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-2">
                        <span className="text-yellow-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        {/* Page 2 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="cv-page"
        >
          {/* Professional Experience */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-8 pb-3 bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent inline-block">
              {content.sections.experience.title}
            </h2>
            <div className="space-y-6">
              {content.sections.experience.jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500 hover:border-yellow-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {job.company}
                      </h3>
                      {job.role && (
                        <p className="text-cyan-400 font-semibold">{job.role}</p>
                      )}
                      {job.client && (
                        <p className="text-sm text-gray-400">
                          Client: {job.client}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 italic border-l-2 border-teal-500/50 pl-4">
                    {job.description}
                  </p>
                  {job.contributions.length > 0 && (
                    <ul className="space-y-2 text-sm text-gray-300">
                      {job.contributions.map((contribution, contIdx) => (
                        <motion.li
                          key={contIdx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: contIdx * 0.05 }}
                          className="flex gap-2"
                        >
                          <span className="text-cyan-400 mt-0.5">▹</span>
                          <span>{contribution}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Bottom Section: Awards, Certifications, Education, Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Awards */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-yellow-900/30 to-teal-900/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mb-3 border border-yellow-400/30">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent text-center">
                  {content.sections.awards.title}
                </h2>
              </div>
              <p className="text-xs font-medium text-gray-400 mb-3 text-center">
                {content.sections.awards.period}
              </p>
              <ul className="space-y-2 text-sm text-gray-300 flex-1">
                {content.sections.awards.items.map((award, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-2 items-start"
                  >
                    <span className="text-yellow-400 mt-0.5">•</span>
                    <span>{award}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Education */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cyan-900/30 to-teal-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 flex items-center justify-center mb-3 border border-cyan-400/30">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent text-center">
                  {content.sections.education.title}
                </h2>
              </div>
              <div className="space-y-4 text-sm flex-1">
                {content.sections.education.items.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <p className="font-semibold text-white leading-snug">
                      {edu.institution}
                    </p>
                    <p className="text-gray-300 text-xs leading-relaxed">{edu.degree}</p>
                    {edu.period && (
                      <p className="text-cyan-400 text-xs mt-0.5">{edu.period}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-teal-900/30 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-teal-500/30 hover:border-teal-400 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-teal-600/20 flex items-center justify-center mb-3 border border-teal-400/30">
                  <FileCheck className="w-8 h-8 text-teal-400" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent text-center">
                  {content.sections.certifications.title}
                </h2>
              </div>
              <div className="space-y-3 text-sm flex-1">
                {content.sections.certifications.items.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-l-2 border-teal-500/50 pl-3"
                  >
                    <p className="font-semibold text-white leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-teal-300 text-xs">
                      {cert.year}
                      {cert.organization && ` – ${cert.organization}`}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Languages */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-cyan-900/30 to-yellow-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30 hover:border-yellow-400 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-yellow-400/20 flex items-center justify-center mb-3 border border-cyan-400/30">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent text-center">
                  {content.sections.languages.title}
                </h2>
              </div>
              <div className="space-y-2 text-sm flex-1">
                {content.sections.languages.items.map((lang, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-gray-300"
                  >
                    <span className="font-semibold text-cyan-300">{lang.language}</span> –{" "}
                    {lang.level}
                  </motion.p>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <Disclaimer language={language} />
      </div>
    </div>
  );
}