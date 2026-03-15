import { motion } from "motion/react";

type Language = "de" | "en";

interface DisclaimerProps {
  language: Language;
}

const disclaimerContent = {
  en: {
    title: "Legal Notice",
    sections: [
      {
        heading: "Information according to § 5 TMG",
        content: `Robert Buth
UX Lead | CX Specialist
Darmstadt, Germany

Contact:
Phone: +49 179 14 31 285
E-Mail: robert.buth@googlemail.com`,
      },
      {
        heading: "Disclaimer",
        content: `Liability for Content:
The contents of this portfolio have been created with the greatest possible care. However, I cannot guarantee the accuracy, completeness and timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with general laws. However, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.

Liability for Links:
This portfolio contains links to external websites over which I have no control. Therefore, I cannot assume any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.

Copyright:
The content and works created by the site operator on these pages are subject to German copyright law. All portfolio works, designs, and materials are protected by copyright and are the intellectual property of Robert Buth unless otherwise stated. Reproduction, editing, distribution and any kind of exploitation outside the limits of copyright law require written consent.`,
      },
      {
        heading: "Data Protection",
        content: `This is a static portfolio website that does not collect, store or process any personal data. No cookies are used, and no tracking or analytics tools are implemented. If you contact me via the provided email or phone number, your communication will be handled in accordance with applicable data protection regulations (GDPR).`,
      },
    ],
    footer: "Last updated: March 2026",
  },
  de: {
    title: "Impressum & Haftungsausschluss",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG",
        content: `Robert Buth
UX Lead | CX Specialist
Darmstadt, Deutschland

Kontakt:
Telefon: +49 179 14 31 285
E-Mail: robert.buth@googlemail.com`,
      },
      {
        heading: "Haftungsausschluss",
        content: `Haftung für Inhalte:
Die Inhalte dieses Portfolios wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.

Haftung für Links:
Dieses Portfolio enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.

Urheberrecht:
Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Alle Portfolio-Arbeiten, Designs und Materialien sind urheberrechtlich geschützt und stellen geistiges Eigentum von Robert Buth dar, sofern nicht anders angegeben. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.`,
      },
      {
        heading: "Datenschutz",
        content: `Dies ist eine statische Portfolio-Website, die keine personenbezogenen Daten erfasst, speichert oder verarbeitet. Es werden keine Cookies verwendet und keine Tracking- oder Analyse-Tools eingesetzt. Wenn Sie mich über die angegebene E-Mail-Adresse oder Telefonnummer kontaktieren, wird Ihre Kommunikation gemäß den geltenden Datenschutzbestimmungen (DSGVO) behandelt.`,
      },
    ],
    footer: "Zuletzt aktualisiert: März 2026",
  },
};

export function Disclaimer({ language }: DisclaimerProps) {
  const content = disclaimerContent[language];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-20 pt-12 border-t border-gray-800"
    >
      <div className="space-y-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
          {content.title}
        </h2>

        {content.sections.map((section, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold text-cyan-300">
              {section.heading}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
              {section.content}
            </p>
          </motion.div>
        ))}

        <div className="pt-6 text-center text-gray-500 text-xs">
          <p>{content.footer}</p>
        </div>
      </div>
    </motion.footer>
  );
}
