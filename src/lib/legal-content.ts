export type LegalSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  table?: {
    columns: string[];
    rows: string[][];
  };
};

export type LegalPageContent = {
  title: string;
  description: string;
  source: string;
  sections: LegalSection[];
};

export const legalPages: Record<string, LegalPageContent> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description:
      "How ConglomerateIT collects, uses, protects, and handles personal information across its website and services.",
    source: "privacypolicy.php",
    sections: [
      {
        title: "Information We Collect",
        body: [
          "Personal information may include name, email address, phone number, company name, job title, and details provided when contacting us or using our services.",
          "Technical information may include IP address, browser type, device details, operating system, and browsing behavior on our website.",
          "We use cookies and similar tracking technologies to enhance user experience, analyze website performance, and provide personalized content.",
        ],
      },
      {
        title: "Legal Basis for Data Processing",
        table: {
          columns: ["Basis", "Description"],
          rows: [
            ["Consent", "When you provide explicit consent for marketing communications or optional services."],
            ["Contractual Necessity", "When processing is required to deliver our services to you."],
            ["Legitimate Interests", "To improve our website, enhance security, and conduct business analysis."],
            ["Legal Compliance", "When necessary to comply with legal obligations."],
          ],
        },
      },
      {
        title: "How We Use Your Information",
        bullets: [
          "Providing and improving our IT solutions and services.",
          "Responding to inquiries and customer support requests.",
          "Personalizing your experience on our website.",
          "Sending relevant updates, newsletters, and promotional content with your consent.",
          "Ensuring security, fraud prevention, and compliance with legal obligations.",
          "Conducting research and business analytics to improve our offerings.",
        ],
      },
      {
        title: "Data Security Measures",
        bullets: [
          "SSL/TLS encryption to secure data transmission.",
          "Role-based access controls to restrict sensitive data access.",
          "Multi-factor authentication for authorized personnel.",
          "Regular security audits and compliance checks.",
          "Secure data backup and disaster recovery protocols.",
          "Employee training on data protection and privacy.",
        ],
      },
      {
        title: "Data Sharing and Third-Party Disclosure",
        body: ["We do not sell or trade your personal data. We may share information only where required to operate, protect, or legally support our services."],
        table: {
          columns: ["Party", "Reason"],
          rows: [
            ["Trusted Service Providers", "Assisting in hosting, analytics, and IT operations."],
            ["Legal Authorities", "If required by law or to protect our rights."],
            ["Business Partners", "When necessary to deliver integrated solutions."],
            ["International Transfers", "With appropriate safeguards if data is transferred outside your country."],
          ],
        },
      },
      {
        title: "Your Rights",
        bullets: [
          "Access your personal data and request copies.",
          "Correct inaccurate or incomplete information.",
          "Request deletion of your personal data.",
          "Object to processing of your personal data.",
          "Request data portability.",
          "Withdraw consent at any time.",
        ],
        body: ["Contact for privacy requests: info@conglomerateIt.com"],
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    description:
      "Terms governing access to and use of the ConglomerateIT website, content, trademarks, and services.",
    source: "termsofuse.php",
    sections: [
      {
        title: "Acceptance of Terms",
        body: [
          "By accessing or using this site, you acknowledge that you have read, understood, and agree to abide by these Terms of Use and our Privacy Notice. If you do not agree, please do not use this site.",
        ],
      },
      {
        title: "Use of the Site",
        body: [
          "You agree to use this site solely for lawful purposes and in a manner that does not infringe upon the rights of or restrict the use and enjoyment of this site by any third party.",
        ],
      },
      {
        title: "Intellectual Property Rights",
        body: [
          "All content, trademarks, logos, graphics, text, software, and other materials on this site are owned by or licensed to ConglomerateIT. Unauthorized use, reproduction, or distribution is strictly prohibited.",
        ],
      },
      {
        title: "User Conduct: Prohibited Activities",
        bullets: [
          "Engaging in any activity that may disrupt the site.",
          "Attempting to gain unauthorized access to systems or data.",
          "Uploading or transmitting harmful software or spam.",
          "Misrepresenting your identity or intentions.",
        ],
      },
      {
        title: "Third-Party Links and Services",
        body: [
          "Our site may contain links to third-party websites for convenience. These sites are not under our control, and we are not responsible for their content, availability, or privacy practices.",
        ],
      },
      {
        title: "Disclaimer of Warranties",
        body: [
          'This site is provided "as is" and "as available," without warranties of any kind, either express or implied. ConglomerateIT disclaims all warranties including merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        title: "Limitation of Liability",
        body: [
          "To the maximum extent permitted by applicable law, ConglomerateIT shall not be liable for direct, indirect, incidental, special, or consequential damages resulting from use of or inability to use the site.",
        ],
      },
      {
        title: "Indemnification",
        body: [
          "You agree to indemnify, defend, and hold harmless ConglomerateIT, its affiliates, officers, directors, employees, and agents from claims, damages, obligations, losses, liabilities, and expenses arising from your use of the site or violation of these Terms.",
        ],
      },
      {
        title: "Changes, Governing Law, and Termination",
        bullets: [
          "ConglomerateIT may modify these Terms of Use at any time. Continued site use indicates acceptance of updated terms.",
          "These Terms are governed by the laws of India and, where applicable, the laws of the United States.",
          "ConglomerateIT may suspend or terminate access if these Terms are violated or harmful conduct occurs.",
        ],
      },
    ],
  },
  "legal-info": {
    title: "Legal Information",
    description:
      "Legal entity, intellectual property, confidentiality, security, and liability information for ConglomerateIT.",
    source: "legalinfo.php",
    sections: [
      {
        title: "Legal Entity Information",
        body: [
          "ConglomerateIT is a global IT services and consulting company offering technology solutions, staff augmentation, and digital transformation services across healthcare, fintech, retail, and enterprise IT.",
        ],
        table: {
          columns: ["Field", "Detail"],
          rows: [
            ["Registered Business Name", "ConglomerateIT"],
            ["Business Locations", "United States, United Kingdom, India, Canada"],
            ["Primary Services", "QA and testing, software development, infrastructure, ERP solutions, AI and analytics, staff augmentation"],
          ],
        },
      },
      {
        title: "Intellectual Property Rights",
        body: [
          "All content, designs, code, data, and technology on this website or delivered through our services are the intellectual property of ConglomerateIT or our licensors.",
        ],
        bullets: [
          "No portion of our content may be reproduced, distributed, or transmitted without prior written consent.",
          "Logos, trademarks, and brand elements are protected under applicable trademark laws.",
        ],
      },
      {
        title: "Confidentiality and Data Security",
        body: [
          "We are committed to protecting client data and maintaining confidentiality. Non-public project, client, or proprietary information is handled under NDA and industry best practices for security and privacy.",
        ],
      },
      {
        title: "Limitation of Liability",
        body: [
          "ConglomerateIT is not liable for direct, indirect, incidental, or consequential damages arising out of the use or inability to use our services, including service interruptions or data loss.",
        ],
      },
      {
        title: "Changes to This Policy",
        body: [
          "We reserve the right to modify this Legal Information policy at any time. Continued use of our services constitutes acceptance of updated terms.",
        ],
      },
    ],
  },
  compliance: {
    title: "Compliance",
    description:
      "ConglomerateIT security, compliance, governance, privacy, and incident-response practices.",
    source: "compliance.php",
    sections: [
      {
        title: "Our Approach to Compliance",
        bullets: [
          "Advanced security measures including end-to-end encryption, multi-factor authentication, and real-time threat monitoring.",
          "Regulatory and risk assessments through proactive auditing and compliance gap analysis.",
          "Data governance and privacy policies with strict access controls and data protection strategies.",
          "Employee training and awareness for IT teams and stakeholders.",
          "Incident response and business continuity planning to support fast recovery from security events.",
        ],
      },
      {
        title: "Healthcare and Life Sciences",
        bullets: ["HIPAA", "HITECH", "GDPR", "PIPEDA", "21 CFR Part 11"],
      },
      {
        title: "Financial Services and Banking",
        bullets: ["PCI-DSS", "SOX", "SOC 1", "SOC 2", "GLBA", "PSD2"],
      },
      {
        title: "Technology and Cloud Security",
        bullets: ["ISO 27001", "NIST Framework", "FedRAMP", "CCPA"],
      },
      {
        title: "Manufacturing, Retail, and Public Sector",
        bullets: ["ITAR", "CMMC", "ISO 9001", "ISO 14001", "FISMA", "FedRAMP"],
      },
    ],
  },
  "acceptable-use": {
    title: "Acceptable Use Policy",
    description:
      "Rules for lawful, responsible, secure, and non-abusive use of ConglomerateIT platforms, services, and website content.",
    source: "acceptableuse.php",
    sections: [
      {
        title: "Acceptable Use",
        body: [
          "You agree to use ConglomerateIT services and platforms only for lawful purposes and in a manner that protects our systems, clients, users, and intellectual property.",
        ],
      },
      {
        title: "You Must Not",
        bullets: [
          "Engage in unauthorized access or hacking of systems or networks.",
          "Upload, transmit, or distribute viruses, malware, or harmful code.",
          "Infringe upon the intellectual property rights of ConglomerateIT or third parties.",
          "Use our platforms for abusive, threatening, or fraudulent behavior.",
          "Interfere with or disrupt the integrity or performance of our services.",
        ],
      },
      {
        title: "Enforcement",
        body: [
          "Any violation may result in termination of access and legal action where appropriate.",
        ],
      },
      {
        title: "Contact",
        body: [
          "For legal and acceptable-use matters, contact info@conglomerateIt.com.",
        ],
      },
    ],
  },
};

export const legalSlugs = Object.keys(legalPages);
