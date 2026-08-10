export type Status = "Live lab" | "Shipped" | "Beta" | "In dev" | "Stealth";

export type SecurityLab = {
  slug: string;
  name: string;
  status: Status;
  summary: string;
  stack: string;
};

export type Product = {
  name: string;
  status: Status;
  stack: string;
  desc: string;
  href: string;
};

export const SECURITY_LABS: SecurityLab[] = [
  {
    slug: "home-soc-lab",
    name: "Home SOC Lab",
    status: "Live lab",
    summary:
      "Wazuh SIEM deployed across Linux and Windows hosts. Custom detection rules, multi-source log ingestion, Grafana dashboards, and a structured analyst investigation workflow.",
    stack: "Wazuh · SIEM · Grafana · Detection Engineering",
  },
  {
    slug: "web-api-pentesting",
    name: "Web App & API Pentesting",
    status: "Live lab",
    summary:
      "OWASP Top 10 and API Security Top 10 testing against intentionally vulnerable targets. All findings documented to professional report standard with CVSS scoring and remediation guidance.",
    stack: "Burp Suite · OWASP ZAP · API Security · OWASP Top 10",
  },
  {
    slug: "home-network-security",
    name: "Home Network Security Lab",
    status: "Live lab",
    summary:
      "pfSense firewall with 5-VLAN segmentation, Zeek passive traffic analysis, and Wireshark validation. Mirrors real enterprise network segmentation architecture.",
    stack: "pfSense · VLANs · Zeek · Wireshark",
  },
  {
    slug: "active-directory",
    name: "Active Directory Attack & Defense",
    status: "Live lab",
    summary:
      "Two-phase lab: attack a virtualised Windows Server AD environment using Kerberoasting, Pass-the-Hash, and BloodHound, then harden the same environment with Sysmon and Wazuh detections.",
    stack: "Active Directory · BloodHound · Kerberoasting · Sysmon",
  },
];

export const PRODUCTS: Product[] = [
  {
    name: "GanjiFlow",
    status: "Beta",
    stack: "React · TypeScript · M-Pesa API",
    desc: "Privacy-first M-Pesa statement analyser. All parsing and computation runs locally in the browser; no financial data leaves the device. Built for the Kenyan mobile-money market.",
    href: "#",
  },
  {
    name: "Famio",
    status: "Beta",
    stack: "Firebase · Dart",
    desc: "Gamified family engagement app: shared challenges, progress tracking, milestone celebrations. From product strategy through working prototype.",
    href: "#",
  },
  {
    name: "NamePrint",
    status: "In dev",
    stack: "Web App · React",
    desc: "Platform for parents to explore baby names by cultural origin, meaning, and phonetics, with shortlisting and side-by-side comparison tools.",
    href: "#",
  },
  {
    name: "DebtHuru",
    status: "Stealth",
    stack: "React · Node.js · Mobile-first",
    desc: "Debt-freedom platform for the East African market. Maps all debts in one place and generates a personalised payoff plan using avalanche or snowball strategy, with local payment integrations and a running progress tracker. 'Huru' means freedom in Swahili.",
    href: "#",
  },
];
