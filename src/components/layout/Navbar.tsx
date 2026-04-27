"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

const whatWeDoMenu = [
  {
    id: "qa",
    label: "QA / QE",
    description: "Quality Assurance & Engineering",
    links: [
      { label: "Functional Testing", href: "/services/qa-qe/functional-testing" },
      { label: "Functional Automation", href: "/services/qa-qe/automation-testing" },
      { label: "Non-Functional Testing", href: "/services/qa-qe/non-functional-testing" },
      { label: "Observability", href: "/services/qa-qe/observability" },
    ],
  },
  {
    id: "infra",
    label: "Infrastructure",
    description: "On-Premises, Cloud & Core Services",
    links: [
      { label: "On-Premises", href: "#", isHeader: true },
      { label: "Compute Platform", href: "/services/infrastructure/on-premises/compute" },
      { label: "Backup", href: "/services/infrastructure/on-premises/backup" },
      { label: "Storage", href: "/services/infrastructure/on-premises/storage" },
      { label: "Operating System", href: "/services/infrastructure/on-premises/operating-system" },
      { label: "Network (DC/WAN/APS)", href: "/services/infrastructure/on-premises/network" },
      { label: "Network Security", href: "/services/infrastructure/on-premises/network-security" },
      { label: "Cloud", href: "#", isHeader: true },
      { label: "AWS", href: "/services/infrastructure/cloud/aws" },
      { label: "Azure", href: "/services/infrastructure/cloud/azure" },
      { label: "GCP", href: "/services/infrastructure/cloud/gcp" },
      { label: "App Rationalization", href: "/services/infrastructure/cloud/app-rationalization" },
      { label: "Migration", href: "/services/infrastructure/cloud/migration" },
      { label: "Core Services", href: "#", isHeader: true },
      { label: "DDI", href: "/services/infrastructure/core-services/ddi" },
      { label: "Active Directory", href: "/services/infrastructure/core-services/active-directory" },
      { label: "FTP", href: "/services/infrastructure/core-services/ftp" },
    ],
  },
  {
    id: "software",
    label: "Software Development",
    description: "Web, Backend & Mobile",
    links: [
      { label: "Web Development", href: "/services/software-development/web-development" },
      { label: "Back End Development", href: "/services/software-development/backend" },
      { label: "Mobile App Development", href: "/services/software-development/mobile-app" },
    ],
  },
  {
    id: "business",
    label: "Business Transformation",
    description: "ERP & Enterprise Platforms",
    links: [
      { label: "Salesforce", href: "/services/business-transformation/salesforce" },
      { label: "ServiceNow", href: "/services/business-transformation/servicenow" },
      { label: "Workday", href: "/services/business-transformation/workday" },
      { label: "Databricks", href: "/services/business-transformation/databricks" },
    ],
  },
  {
    id: "data",
    label: "Data, Digital & Analytics",
    description: "End-to-end data strategy",
    links: [
      { label: "Define", href: "/services/data-analytics/define" },
      { label: "Analyze", href: "/services/data-analytics/analyze" },
      { label: "Visualize", href: "/services/data-analytics/visualize" },
      { label: "Engineer", href: "/services/data-analytics/engineer" },
      { label: "Govern", href: "/services/data-analytics/govern" },
    ],
  },
  {
    id: "ai",
    label: "AI-First Approach",
    description: "Intelligent transformation",
    links: [
      { label: "IT to AI", href: "/services/ai-first/it-to-ai" },
      { label: "AI Native Roles", href: "/services/ai-first/ai-native-roles" },
      { label: "Gen AI", href: "/services/ai-first/gen-ai" },
    ],
  },
];

const execHiringMenu = [
  {
    id: "exec-search",
    label: "Executive Search",
    description: "C-Suite & Board placements",
    links: [
      { label: "Executive Hiring Overview", href: "/executive-hiring" },
      { label: "Chief Executive Officer", href: "/executive-hiring/executive-search/ceo" },
      { label: "Board of Directors", href: "/executive-hiring/executive-search/board-of-directors" },
      { label: "Digital Officers", href: "/executive-hiring/executive-search/digital-officers" },
      { label: "Financial Officers", href: "/executive-hiring/executive-search/financial-officers" },
      { label: "HR Officers", href: "/executive-hiring/executive-search/hr-officers" },
      { label: "Legal, Risk & Compliance", href: "/executive-hiring/executive-search/legal-risk-compliance" },
      { label: "Operations Officers", href: "/executive-hiring/executive-search/operations-officers" },
      { label: "Technology Officers", href: "/executive-hiring/executive-search/technology-officers" },
    ],
  },
  {
    id: "on-demand",
    label: "On-Demand Talent",
    description: "Interim & fractional leaders",
    links: [
      { label: "Interim Executives", href: "/executive-hiring/on-demand-talent/interim-executives" },
      { label: "On-Demand Leaders & Experts", href: "/executive-hiring/on-demand-talent/on-demand-leaders" },
    ],
  },
  {
    id: "advisory",
    label: "Advisory Search",
    description: "Strategic advisor placement",
    links: [
      { label: "Advisory Search", href: "/executive-hiring/advisory-search" },
    ],
  },
  {
    id: "performance",
    label: "Performance",
    description: "Assessment & Benchmarking",
    links: [
      { label: "CEO Transitions", href: "/executive-hiring/performance/ceo-transitions" },
      { label: "Development & Transitions", href: "/executive-hiring/performance/development-transitions" },
      { label: "Team Effectiveness", href: "/executive-hiring/performance/team-effectiveness" },
      { label: "Leadership Assessment", href: "/executive-hiring/performance/leadership-assessment" },
    ],
  },
  {
    id: "succession",
    label: "Succession Plan",
    description: "Future-proof leadership",
    links: [
      { label: "Board Succession", href: "/executive-hiring/succession-plan/board-succession" },
      { label: "CEO Succession", href: "/executive-hiring/succession-plan/ceo-succession" },
      { label: "C-Suite Succession", href: "/executive-hiring/succession-plan/c-suite-succession" },
    ],
  },
  {
    id: "functions",
    label: "Functions",
    description: "Functional leadership hiring",
    links: [
      { label: "CFO & Financial Executives", href: "/executive-hiring/functions/cfo-financial" },
      { label: "Cybersecurity & Digital", href: "/executive-hiring/functions/cybersecurity-digital" },
      { label: "Marketing and Sales", href: "/executive-hiring/functions/marketing-sales" },
      { label: "Startups and Scale-ups", href: "/executive-hiring/functions/startups-scaleups" },
      { label: "Supply Chain", href: "/executive-hiring/functions/supply-chain" },
      { label: "Operations & Supply Chain", href: "/executive-hiring/functions/operations-supply-chain" },
    ],
  },
];

interface MegaMenuProps {
  sections: typeof whatWeDoMenu;
}

function MegaMenuPanel({ sections }: MegaMenuProps) {
  const [activeTab, setActiveTab] = useState(sections[0].id);
  const active = sections.find((s) => s.id === activeTab) || sections[0];

  return (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[900px] max-w-[95vw] rounded-b-[8px] overflow-hidden shadow-2xl border-t-2 z-50"
      style={{
        background: "#fff",
        borderTopColor: "transparent",
        borderImage: "linear-gradient(to right, #635bff, #00d4ff) 1",
      }}
    >
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 shrink-0 bg-[#f7f8fc] p-4 flex flex-col gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onMouseEnter={() => setActiveTab(s.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === s.id
                  ? "bg-white text-[#635bff] border-l-2 border-[#635bff] shadow-sm"
                  : "text-gray-600 hover:text-[#635bff] hover:bg-white/70"
              }`}
            >
              <span className="block font-semibold text-[0.85rem]">{s.label}</span>
              <span className="block text-xs text-gray-400 mt-0.5">{s.description}</span>
            </button>
          ))}
        </div>
        {/* Links panel */}
        <div className="flex-1 p-6 columns-2 gap-6">
          {active.links.map((link) =>
            link.isHeader ? (
              <p
                key={link.label}
                className="text-[0.7rem] font-bold tracking-widest uppercase text-[#635bff] mt-4 mb-1 break-inside-avoid"
              >
                {link.label}
              </p>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-[0.85rem] text-gray-700 hover:text-[#635bff] py-1.5 transition-colors group break-inside-avoid"
              >
                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#635bff]" />
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (id: string) => {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setActiveMenu(id);
  };

  const closeMenu = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9995] transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm ring-1 ring-[#0a2540]/10"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-[78px]">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/CGIT_LLC horizontal.png"
            alt="ConglomerateIT"
            width={180}
            height={48}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">Who We Are</NavLink>

          {/* What We Do mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("services")}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#0a2540]/75 hover:text-[#0a2540] transition-colors">
              What We Do
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMenu === "services" && (
              <MegaMenuPanel sections={whatWeDoMenu} />
            )}
          </div>

          <NavLink href="/solutions">Solutions</NavLink>
          <NavLink href="/delivery-models">Delivery</NavLink>
          <NavLink href="/case-studies">Case Studies</NavLink>

          {/* Executive Hiring mega menu */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("exec")}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#0a2540]/75 hover:text-[#0a2540] transition-colors">
              Executive Hiring
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "exec" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMenu === "exec" && (
              <MegaMenuPanel sections={execHiringMenu} />
            )}
          </div>

          <NavLink href="/gcc">GCC</NavLink>

          {/* Insights dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openMenu("insights")}
            onMouseLeave={closeMenu}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-[#0a2540]/75 hover:text-[#0a2540] transition-colors">
              Insights
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "insights" ? "rotate-180" : ""}`}
              />
            </button>
            {activeMenu === "insights" && (
              <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-2xl py-2 z-50">
                <Link
                  href="/insights/blog"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#214daa] hover:bg-gray-50 transition-colors"
                >
                  Blogs
                </Link>
                <Link
                  href="/insights/careers"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#214daa] hover:bg-gray-50 transition-colors"
                >
                  Careers
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-semibold rounded-full bg-[#0a2540] text-white hover:bg-[#635bff] transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#0a2540]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#0a2540]/10 max-h-[85vh] overflow-y-auto shadow-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            <MobileLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileLink>
            <MobileLink href="/about" onClick={() => setMobileOpen(false)}>Who We Are</MobileLink>
            <MobileLink href="/solutions" onClick={() => setMobileOpen(false)}>Solutions</MobileLink>
            <MobileLink href="/delivery-models" onClick={() => setMobileOpen(false)}>Delivery Models</MobileLink>
            <MobileLink href="/case-studies" onClick={() => setMobileOpen(false)}>Case Studies</MobileLink>

            <MobileAccordion
              label="What We Do"
              isOpen={mobileExpanded === "services"}
              onToggle={() =>
                setMobileExpanded(mobileExpanded === "services" ? null : "services")
              }
            >
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm font-semibold text-[#0a2540]"
              >
                All Services
              </Link>
              {whatWeDoMenu.map((section) => (
                <div key={section.id} className="mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#635bff] mb-1 px-3">
                    {section.label}
                  </p>
                  {section.links
                    .filter((l) => !l.isHeader)
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2 text-sm text-[#425466] hover:text-[#0a2540]"
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Executive Hiring"
              isOpen={mobileExpanded === "exec"}
              onToggle={() =>
                setMobileExpanded(mobileExpanded === "exec" ? null : "exec")
              }
            >
              {execHiringMenu.map((section) => (
                <div key={section.id} className="mb-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#635bff] mb-1 px-3">
                    {section.label}
                  </p>
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-[#425466] hover:text-[#0a2540]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileAccordion>

            <MobileLink href="/gcc" onClick={() => setMobileOpen(false)}>GCC</MobileLink>
            <MobileLink href="/insights/blog" onClick={() => setMobileOpen(false)}>Blog</MobileLink>
            <MobileLink href="/insights/careers" onClick={() => setMobileOpen(false)}>Careers</MobileLink>

            <div className="mt-4 pt-4 border-t border-[#0a2540]/10">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary w-full justify-center text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-sm font-semibold text-[#0a2540]/75 hover:text-[#0a2540] transition-colors group"
    >
      {children}
      <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full scale-x-0 bg-[#635bff] transition-transform duration-200 origin-left group-hover:scale-x-100" />
    </Link>
  );
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 text-sm font-semibold text-[#0a2540]/75 hover:text-[#0a2540] border-b border-[#0a2540]/5"
    >
      {children}
    </Link>
  );
}

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[#0a2540]/5">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-3 py-3 text-sm font-semibold text-[#0a2540]/75 hover:text-[#0a2540]"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && <div className="pb-2">{children}</div>}
    </div>
  );
}
