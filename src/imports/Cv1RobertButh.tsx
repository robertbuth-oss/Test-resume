const robertwebsquare = "/images/robert_web_square.png";

function InstitutionDegree() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="institution & degree">
      <div className="font-['Roboto:Bold',sans-serif] font-bold h-[21px] leading-[12px] relative shrink-0 text-[#1a1a1a] text-[10px] w-[158px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`KISD - Köln International School `}</p>
        <p>of Design</p>
      </div>
    </div>
  );
}

function JobDetail() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job detail">
      <InstitutionDegree />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] min-w-full relative shrink-0 text-[#c2c2c2] text-[9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2005-2009
      </p>
    </div>
  );
}

function Ug() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-full" data-name="UG">
      <JobDetail />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#75787b] text-[10px] w-[173px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Diplom-Designer FH (Dipl. Des)
      </p>
    </div>
  );
}

function InstitutionDegree1() {
  return (
    <div className="content-stretch flex h-[21px] items-baseline relative shrink-0" data-name="institution & degree">
      <div className="font-['Roboto:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[#1a1a1a] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Hochschule Rhein-Main</p>
        <p>FH Wiesbaden</p>
      </div>
    </div>
  );
}

function JobDetail1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job detail">
      <InstitutionDegree1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] min-w-full relative shrink-0 text-[#c2c2c2] text-[9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2002 - 2005
      </p>
    </div>
  );
}

function Ug1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="UG">
      <JobDetail1 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vordiplom Kommunikations-Design
      </p>
    </div>
  );
}

function Education() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="education">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c2c2c2] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        EDUCATION
      </p>
      <Ug />
      <Ug1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start leading-[12px] relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold h-[9px] relative shrink-0 text-[#1a1a1a] text-[10px] w-[191px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        15+ internationalen Design Awards
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#c2c2c2] text-[9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2011 - 2022
      </p>
    </div>
  );
}

function DesignTools() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="design tools">
      <Frame1 />
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#75787b] text-[10px] w-[191px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] mb-0">Auswahl:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[15px]">
            <span className="leading-[12px]">Red Dot Design Award</span>
          </li>
          <li className="mb-0 ms-[15px]">
            <span className="leading-[12px]">iF Design Award</span>
          </li>
          <li className="mb-0 ms-[15px]">
            <span className="leading-[12px]">Good Design Award</span>
          </li>
          <li className="mb-0 ms-[15px]">
            <span className="leading-[12px]">DDC Award</span>
          </li>
          <li className="ms-[15px]">
            <span className="leading-[12px]">Annual Multimedia Award</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SkillsLanguages() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[191px]" data-name="skills & languages">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c2c2c2] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AWARDS
      </p>
      <DesignTools />
    </div>
  );
}

function InstitutionDegree2() {
  return (
    <div className="content-stretch flex h-[11px] items-baseline relative shrink-0" data-name="institution & degree">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#1a1a1a] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        LEGO® SERIOUS PLAY® Facilitator
      </p>
    </div>
  );
}

function JobDetail2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job detail">
      <InstitutionDegree2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] min-w-full relative shrink-0 text-[#c2c2c2] text-[9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2025
      </p>
    </div>
  );
}

function Institute() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="institute">
      <JobDetail2 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        HelloAgile
      </p>
    </div>
  );
}

function InstitutionDegree3() {
  return (
    <div className="content-stretch flex h-[11px] items-baseline relative shrink-0" data-name="institution & degree">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#1a1a1a] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`GRID Leadership 4.0 `}</p>
    </div>
  );
}

function JobDetail3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job detail">
      <InstitutionDegree3 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] min-w-full relative shrink-0 text-[#c2c2c2] text-[9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2024
      </p>
    </div>
  );
}

function Institute1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="institute">
      <JobDetail3 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ausbildung zum Teamleiter
      </p>
    </div>
  );
}

function InstitutionDegree4() {
  return (
    <div className="content-stretch flex items-baseline relative shrink-0" data-name="institution & degree">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#1a1a1a] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Product Owner `}</p>
    </div>
  );
}

function JobDetail4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="job detail">
      <InstitutionDegree4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] min-w-full relative shrink-0 text-[#c2c2c2] text-[9px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        2023
      </p>
    </div>
  );
}

function Institute2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="institute">
      <JobDetail4 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Scrum.org
      </p>
    </div>
  );
}

function Certificate() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[191px]" data-name="certificate">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c2c2c2] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        RECENT CERTIFICATES
      </p>
      <Institute />
      <Institute1 />
      <Institute2 />
    </div>
  );
}

function SkillsEducationCertificate() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[364px] top-[213px]" data-name="skills, education, certificate">
      <Education />
      <SkillsLanguages />
      <Certificate />
    </div>
  );
}

function CompanyRole() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-name="company & role">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Intro
      </p>
    </div>
  );
}

function JobDetail5() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="job detail">
      <CompanyRole />
    </div>
  );
}

function Job() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[287px]" data-name="job 1">
      <JobDetail5 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Passionierter Design Leader mit über 20 Jahren Erfahrung in UX, Product Design und Digital Experience. Ich verbinde starken visuellen Design-Background mit strategischem Denken und Hands-on-Mentalität. Fokus auf nutzerzentrierte Produktentwicklung, klare UX-Prozesse und messbare Designwirkung durch UX-Maturity-Modelle und KPIs. Führung internationaler UX-Teams und enge Zusammenarbeit mit Product und Engineering.
      </p>
    </div>
  );
}

function CompanyRole1() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-name="company & role">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Leadership
      </p>
    </div>
  );
}

function JobDetail6() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="job detail">
      <CompanyRole1 />
    </div>
  );
}

function Job2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[287px]" data-name="job 6">
      <JobDetail6 />
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Über 20 Jahre Erfahrung in UI und UX, Product Design und Digital Experiences</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Seit mehr als 15 Jahren Erfahrung in agilen Projektumfeldern</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">{`Leitung internationaler UX Teams (>10 Designer)`}</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Aufbau und Skalierung von Design Systemen für globale Produkte</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Einführung strukturierter UX Prozesse und Design Operations</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Moderation von Design Sprints und Innovationsworkshops</span>
        </li>
        <li className="ms-[15px]">
          <span className="leading-[12px]">Zusammenarbeit mit global agierenden Produkt- und Engineering Teams</span>
        </li>
      </ul>
    </div>
  );
}

function CompanyRole2() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full" data-name="company & role">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[12px] relative shrink-0 text-[#1a1a1a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Core Expertise
      </p>
    </div>
  );
}

function JobDetail7() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="job detail">
      <CompanyRole2 />
    </div>
  );
}

function Job1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[287px]" data-name="job 5">
      <JobDetail7 />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#c2c2c2] text-[9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        DESIGN LEADERSHIP
      </p>
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">{`Design Strategy `}</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">{`Design Operations & UX Governance`}</span>
        </li>
        <li className="ms-[15px]">
          <span className="leading-[12px]">{`UX-Team Leadership & Coaching (GRID certified)`}</span>
        </li>
      </ul>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#c2c2c2] text-[9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`PRODUCT & EXPERIENCE`}</p>
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">User-Centered Design</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Agile Envoronments (SAFe + Scrum)</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Double Diamond Process</span>
        </li>
        <li className="ms-[15px]">
          <span className="leading-[12px]">UX Architecture</span>
        </li>
      </ul>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#c2c2c2] text-[9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`DESIGN SYSTEMS & SCALING`}</p>
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">{`Aufbau und Skalierung von Design Systemen `}</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Cross-Platform Design Standards</span>
        </li>
        <li className="ms-[15px]">
          <span className="leading-[12px]">{`UX Maturity Model & UX KPIs`}</span>
        </li>
      </ul>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[12px] relative shrink-0 text-[#c2c2c2] text-[9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>{`FACILITATION & INNOVATION`}</p>
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Design Thinking</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Design Sprints</span>
        </li>
        <li className="ms-[15px]">
          <span className="leading-[12px]">Workshop Facilitation</span>
        </li>
      </ul>
    </div>
  );
}

function Experiences() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[40px] top-[213px]" data-name="experiences">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c2c2c2] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        EXPERIENCE
      </p>
      <Job />
      <Job2 />
      <Job1 />
    </div>
  );
}

function NameTitle() {
  return (
    <div className="content-stretch flex gap-[10px] items-end leading-[normal] relative shrink-0 whitespace-nowrap" data-name="name & title">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1a1a1a] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Robert Buth
      </p>
      <p className="font-['Mona-Sans:Medium',sans-serif] not-italic relative shrink-0 text-[#c2c2c2] text-[21px]">|</p>
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[#c2c2c2] text-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CX Specialist + UX Lead
      </p>
    </div>
  );
}

function NameBio() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="name & bio">
      <NameTitle />
    </div>
  );
}

function NameBioContact() {
  return (
    <div className="absolute content-stretch flex gap-[88px] items-center left-[40px] top-[50px]" data-name="name, bio, contact">
      <NameBio />
    </div>
  );
}

function Component7Uj5KzTif() {
  return (
    <div className="h-[16.405px] relative shrink-0 w-[16.082px]" data-name="7UJ5Kz.tif">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0818 16.4048">
        <g id="7UJ5Kz.tif">
          <path d={svgPaths.p30295800} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-[536px] top-[103px] w-[16.082px]">
      <div className="h-[16px] relative shrink-0 w-full" data-name="Component 1">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.0818 16">
          <ellipse cx="8.04089" cy="8" fill="var(--fill-0, black)" id="Ellipse 158" rx="8.04089" ry="8" />
        </svg>
        <div className="absolute inset-[18.75%] overflow-clip" data-name="t Phone">
          <div className="absolute inset-[12.51%_12.51%_12.49%_12.51%]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.53638 7.50001">
              <path clipRule="evenodd" d={svgPaths.p1f03faf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
      <Component7Uj5KzTif />
      <div className="relative shrink-0 size-[16px]" data-name="Component 3">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, black)" id="Ellipse 159" r="8" />
        </svg>
        <div className="absolute inset-[18.75%_20%_18.75%_17.5%] overflow-clip" data-name="t Mail">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 6.66667">
              <path clipRule="evenodd" d={svgPaths.p2fe5cb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[348px] top-[51px]">
      <div className="-translate-x-full absolute font-['EB_Garamond:Regular',sans-serif] font-normal leading-[0] left-[550px] text-[#050505] text-[0px] text-[9px] text-right top-[51px] w-[202px] whitespace-pre-wrap">
        <p className="font-['Roboto:Regular',sans-serif] leading-[1.365] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Robert Buth
        </p>
        <p className="font-['Roboto:Regular',sans-serif] leading-[1.365] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          Artilleriestrasse 11
        </p>
        <p className="font-['Roboto:Regular',sans-serif] leading-[1.365] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>
          64285 Darmstadt
        </p>
        <p className="leading-[1.365] mb-0">&nbsp;</p>
        <p className="font-['Roboto:Regular',sans-serif] leading-[1.96] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`+49 179 14 31 285         `}</p>
        <p className="font-['Roboto:Regular',sans-serif] leading-[1.96] mb-0" style={{ fontVariationSettings: "'wdth' 100" }}>{`www.linkedin.com/in/robert-buth-ux         `}</p>
        <p className="font-['Roboto:Regular',sans-serif] mb-0">
          <span className="leading-[1.96]" style={{ fontVariationSettings: "'wdth' 100" }}>{`robert.buth@googlemail.com  `}</span>
          <span className="leading-[1.82]" style={{ fontVariationSettings: "'wdth' 100" }}>{`       `}</span>
        </p>
        <p className="font-['Roboto:Regular',sans-serif] leading-[1.82]" style={{ fontVariationSettings: "'wdth' 100" }}>{`    `}</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute border-[2.352px] border-solid border-white left-[39px] overflow-clip rounded-[43.68px] shadow-[4.032px_4.032px_4.032px_0px_rgba(0,0,0,0.25)] size-[84px] top-[85px]">
      <div className="absolute left-[-2.35px] size-[84px] top-[-2.35px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 84">
          <circle cx="42" cy="42" fill="var(--fill-0, white)" id="Ellipse 157" r="42" />
        </svg>
      </div>
      <div className="absolute h-[152.544px] left-[-32.59px] top-[-43.01px] w-[114.24px]" data-name="IMG_9009 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg90092} />
      </div>
      <div className="absolute left-[-2.35px] size-[84px] top-[-2.35px]" data-name="robert_web_square 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRobertWebSquare1} />
      </div>
    </div>
  );
}

export default function Cv1RobertButh() {
  return (
    <div className="bg-white relative size-full" data-name="CV 1_Robert-Buth">
      <SkillsEducationCertificate />
      <Experiences />
      <div className="absolute h-0 left-[39px] top-[183px] w-[516px]" data-name="centre divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 516 0.5">
            <path d="M0 0.25H516" id="centre divider" stroke="var(--stroke-0, #C2C2C2)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <NameBioContact />
      <Group />
      <Frame />
      <div className="absolute h-0 left-[40px] top-[876px] w-[516px]" data-name="centre divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 516 0.5">
            <path d="M0 0.25H516" id="centre divider" stroke="var(--stroke-0, #C2C2C2)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[1.365] left-[556px] text-[#050505] text-[9px] text-right top-[890px] w-[202px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Darmstadt, 09.03.2026 - Robert Buth
      </p>
    </div>
  );
}