export type Lab = {
  slug: string;
  title: string;
  subtitle: string;
  overview: string;
  techniques: string[];
  mitre: string[];
  tools: string[];
  href: string;
};

export const LABS: Lab[] = [
  {
    slug: "home-soc-lab",
    title: "Home SOC Lab",
    subtitle: "Wazuh SIEM · Multi-Host Log Ingestion · Custom Detection Rules · Grafana",
    overview:
      "Replicates the core SOC analyst workflow: ingest logs from multiple hosts, write and tune detection rules, triage alerts, and investigate incidents end-to-end. Goes beyond 'install SIEM and see alerts': custom rules written from scratch, noise tuned out, Grafana dashboards built for analyst use, and a structured investigation workflow applied to every simulated incident.",
    techniques: [
      "Multi-source log ingestion: Linux syslog, auditd, auth.log; Windows Event Logs; Sysmon EIDs 1, 3, 7, 10, 11",
      "Custom Wazuh rules: SSH brute force (rate-based, 8 events/60s), PowerShell encoded command detection, new Linux user creation",
      "Attack simulation: SSH brute force via Hydra, Mimikatz renamed binary, /etc/passwd modification, encoded PowerShell",
      "False positive tuning: suppression rules for known admin sudo activity; threshold calibration",
      "Investigation workflow: triage in Kibana, pivot to full event context, correlated events, MITRE mapping",
    ],
    mitre: [
      "T1110.001: Brute Force",
      "T1027: Obfuscated Files",
      "T1003.001: LSASS Memory",
      "T1053.005: Scheduled Task",
    ],
    tools: ["Wazuh", "Elasticsearch", "Kibana", "Grafana", "Sysmon", "auditd", "Hydra", "Mimikatz", "VirtualBox"],
    href: "https://github.com/cayvoh254/lab-01-soc-wazuh-siem",
  },
  {
    slug: "web-api-pentesting",
    title: "Web App & API Pentesting Lab",
    subtitle: "OWASP Top 10 · API Security Top 10 · Burp Suite · Structured Reporting",
    overview:
      "Hands-on penetration testing against intentionally vulnerable targets with a focus on producing professional-grade findings reports - not just exploiting but documenting reproduction steps, impact, and remediation guidance. Lab targets span OWASP Top 10 web vulnerabilities and the OWASP API Security Top 10, with emphasis on the API-specific issues most common in fintech and SaaS environments.",
    techniques: [
      "BOLA (API1): accessed other users' vehicle location data by modifying GUIDs; no server-side ownership check",
      "OTP brute force (API2): no rate limiting on 4-digit OTP; account takeover via Burp Intruder in under 3 minutes",
      "Rate limiting bypass (API4): X-Forwarded-For header rotation, null byte email mutation, distributed request threading",
      "SQL injection: login bypass and full user table extraction via UNION SELECT; MD5 hashes cracked offline with hashcat",
      "GraphQL introspection enabled: full schema leaked including undocumented admin mutations (deleteUser, resetPassword)",
      "All findings documented to professional report standard: severity (CVSS v3.1), endpoint, reproduction steps, evidence, impact, remediation",
    ],
    mitre: ["API1: BOLA", "API2: Broken Auth", "API4: Rate Limiting", "A03: Injection", "A10: SSRF"],
    tools: ["Burp Suite", "OWASP ZAP", "DVWA", "crAPI", "Juice Shop", "hashcat", "Docker", "Postman"],
    href: "https://github.com/cayvoh254/lab-02-web-api-pentesting",
  },
  {
    slug: "home-network-security",
    title: "Home Network Security Lab",
    subtitle: "pfSense · VLAN Segmentation · Zeek Traffic Analysis · Wireshark",
    overview:
      "Mirrors the segmented network architecture found in enterprise environments: separate VLANs for different trust zones, strict inter-VLAN routing enforced by firewall rules, and passive traffic analysis to validate that isolation is actually working, not just assumed. Built to understand network segmentation decisions from the ground up after years of monitoring enterprise networks without designing them.",
    techniques: [
      "5-VLAN design: Management (high trust), Servers, User Workstations, IoT/Untrusted (internet-only, zero RFC1918 access), DMZ",
      "pfSense firewall rule logic: top-down first-match evaluation; specific denies before broad allows; common misconfiguration identified and corrected",
      "Zeek conn.log analysis: confirmed allowed traffic, verified IoT isolation (S0 state = SYN sent, no SYN-ACK), DNS leak detection",
      "Found DNS traffic bypassing VLAN isolation via a NAT redirect rule left from a previous config; fixed by explicit block on port 53",
      "Detected IoT device making unexpected MQTT (port 1883) connections to unrecognised domain; isolated with host-specific block rule",
      "VLAN hopping test (802.1Q double-tagging via scapy): not viable in virtual environment; limitation documented",
    ],
    mitre: ["T1040: Network Sniffing", "T1018: Remote System Discovery"],
    tools: ["pfSense", "Zeek", "Wireshark", "scapy", "VirtualBox", "Ubuntu"],
    href: "https://github.com/cayvoh254/lab-03-network-security-pfsense",
  },
  {
    slug: "active-directory",
    title: "Active Directory Attack & Defense",
    subtitle: "BloodHound · Kerberoasting · Pass-the-Hash · Sysmon Hardening · Wazuh Detection",
    overview:
      "Two-phase approach: attack a virtualised Windows Server AD environment using real adversary techniques, then harden the same environment and validate that the attacks now produce detectable signals. The two-phase structure is deliberate: detection rules can only be written well if you know exactly what attack traffic and logs look like from the attacker side.",
    techniques: [
      "BloodHound enumeration: shortest path from low-priv domain user to Domain Admin identified in 3 hops via machine account ACL",
      "Kerberoasting via Impacket GetUserSPNs: TGS ticket for SPN service account extracted and cracked in under 2 minutes (rockyou.txt)",
      "Pass-the-Hash via CrackMapExec and psexec.py: SYSTEM shell on workstation using NTLM hash without plaintext password",
      "Custom Wazuh detection rule for Kerberoasting: Event ID 4769 with RC4 encryption type (0x17), a high-confidence indicator",
      "Custom detection for Pass-the-Hash: Event ID 4624 Type 3 NTLM network logons from non-system accounts",
      "Sysmon LSASS access detection (EID 10): tuned to exclude known-good callers (AV, Wazuh agent); Mimikatz still fires",
      "BloodHound detection: Event ID 4662 volume rule, 50+ LDAP queries from single source in 60 seconds",
      "Hardening: gMSA replacement (240-char auto-rotated password), Protected Users group, Credential Guard, GPO audit policies",
    ],
    mitre: [
      "T1558.003: Kerberoasting",
      "T1550.002: Pass-the-Hash",
      "T1069.002: Domain Groups",
      "T1003.001: LSASS Memory",
    ],
    tools: [
      "Windows Server 2019",
      "Kali Linux",
      "BloodHound",
      "Impacket",
      "CrackMapExec",
      "Sysmon",
      "Wazuh",
      "hashcat",
      "VirtualBox",
    ],
    href: "https://github.com/cayvoh254/lab-04-active-directory-attack-defense",
  },
];

export function getLabBySlug(slug: string): Lab | undefined {
  return LABS.find(l => l.slug === slug);
}
