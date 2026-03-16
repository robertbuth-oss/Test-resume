import robertwebsquare from "/images/robert_web_square.png";

function CompanyRole() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full whitespace-nowrap" data-name="company & role">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1a1a1a] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Deutsche Telekom AG
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#020406] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#020406] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Product Designer
      </p>
    </div>
  );
}

function JobDetail() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[12px] relative shrink-0 w-full" data-name="job detail">
      <CompanyRole />
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[#c2c2c2] text-[9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        2011 - 2017
      </p>
    </div>
  );
}

function Job() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[287px]" data-name="job 2">
      <JobDetail />
      <ul className="block font-['Roboto:Regular',sans-serif] font-normal leading-[0] list-disc relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">UX Beratung und Konzeption für digitale Produkte und Services.</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Entwicklung von UX Konzepten und Customer Journeys</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Durchführung von Design Thinking Workshops</span>
        </li>
        <li className="mb-0 ms-[15px]">
          <span className="leading-[12px]">Erstellung von Wireframes, Prototypen und UX/UI Konzepten</span>
        </li>
        <li className="ms-[15px]">
          <span className="leading-[12px]">Unterstützung von Produktteams bei der Integration von UX Methoden</span>
        </li>
      </ul>
    </div>
  );
}

function CompanyRole1() {
  return (
    <div className="content-stretch flex gap-[8px] items-baseline relative shrink-0 w-full whitespace-nowrap" data-name="company & role">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 text-[#1a1a1a] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Freelancer UX & UI`}</p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#020406] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        |
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#020406] text-[14px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Designer
      </p>
    </div>
  );
}

function JobDetail1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[12px] relative shrink-0 w-full" data-name="job detail">
      <CompanyRole1 />
      <p className="font-['Roboto:Medium',sans-serif] font-medium relative shrink-0 text-[#c2c2c2] text-[9px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        2002 - 2011
      </p>
    </div>
  );
}

function Job1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[287px]" data-name="job 6">
      <JobDetail1 />
      <div className="font-['Roboto:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#75787b] text-[10px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px] mb-0">Arbeit für führende Agenturen und Unternehmen im Bereich digitale Produkte.</p>
        <p className="leading-[12px] mb-0">Selected Clients:</p>
        <ul>
          <ul className="list-disc">
            <li className="mb-0 ms-[30px]">
              <span className="leading-[12px]">{`Deutsche Telekom – Products & Innovation`}</span>
            </li>
            <li className="mb-0 ms-[30px]">
              <span className="leading-[12px]">Jung von Matt 1:1</span>
            </li>
            <li className="mb-0 ms-[30px]">
              <span className="leading-[12px]">Yello Strom</span>
            </li>
            <li className="mb-0 ms-[30px]">
              <span className="leading-[12px]">P1 Club</span>
            </li>
            <li className="ms-[30px]">
              <span className="leading-[12px]">Grundy Entertainment</span>
            </li>
          </ul>
        </ul>
      </div>
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
      <Job1 />
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

function Frame1() {
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
      <div className="absolute left-[536px] size-[16px] top-[100px]" data-name="Component 1">
        <div className="absolute inset-[18.75%] overflow-clip" data-name="t Phone">
          <div className="absolute inset-[12.51%_12.51%_12.49%_12.51%]" data-name="Subtract">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.49806 7.50001">
              <path clipRule="evenodd" d={svgPaths.p23d37b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute left-[536px] size-[16px] top-[138px]" data-name="Component 3">
        <div className="absolute inset-[18.75%_20%_18.75%_17.5%] overflow-clip" data-name="t Mail">
          <div className="absolute inset-[16.67%_8.33%]" data-name="Shape">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33333 6.66667">
              <path clipRule="evenodd" d={svgPaths.p2fe5cb00} fill="var(--fill-0, white)" fillRule="evenodd" id="Shape" />
            </svg>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function NameTitle() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-end leading-[normal] left-[40px] top-[49px] whitespace-nowrap" data-name="name & title">
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

export default function Cv3RobertButh() {
  return (
    <div className="bg-white relative size-full" data-name="CV 3_Robert-Buth">
      <Experiences />
      <div className="absolute h-0 left-[39px] top-[183px] w-[516px]" data-name="centre divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 516 0.5">
            <path d="M0 0.25H516" id="centre divider" stroke="var(--stroke-0, #C2C2C2)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[40px] top-[876px] w-[516px]" data-name="centre divider">
        <div className="absolute inset-[-0.25px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 516 0.5">
            <path d="M0 0.25H516" id="centre divider" stroke="var(--stroke-0, #C2C2C2)" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <Group />
      <NameTitle />
      <Frame />
      <p className="-translate-x-full absolute font-['Roboto:Regular',sans-serif] font-normal leading-[1.365] left-[556px] text-[#050505] text-[9px] text-right top-[890px] w-[202px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Darmstadt, 09.03.2026 - Robert Buth
      </p>
    </div>
  );
}