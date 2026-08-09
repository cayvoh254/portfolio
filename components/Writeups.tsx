const LABS = [
  {
    num: "01",
    title: "Home SOC Lab",
    subtitle: "Wazuh SIEM · Multi-Host Log Ingestion · Custom Detection Rules · Grafana",
    date: "2026",
    overview: "Replicates the core SOC analyst workflow: ingest logs from multiple hosts, write and tune detection rules, triage alerts, and investigate incidents end-to-end. Goes beyond 'install SIEM and see alerts': custom rules written from scratch, noise tuned out, Grafana dashboards built for analyst use, and a structured investigation workflow applied to every simulated incident.",
    techniques: [
      "Multi-source log ingestion: Linux syslog, auditd, auth.log; Windows Event Logs; Sysmon EIDs 1, 3, 7, 10, 11",
      "Custom Wazuh rules: SSH brute force (rate-based, 8 events/60s), PowerShell encoded command detection, new Linux user creation",
      "Attack simulation: SSH brute force via Hydra, Mimikatz renamed binary, /etc/passwd modification, encoded PowerShell",
      "False positive tuning: suppression rules for known admin sudo activity; threshold calibration",
      "Investigation workflow: triage in Kibana, pivot to full event context, correlated events, MITRE mapping",
    ],
    mitre: ["T1110.001: Brute Force", "T1027: Obfuscated Files", "T1003.001: LSASS Memory", "T1053.005: Scheduled Task"],
    tools: ["Wazuh", "Elasticsearch", "Kibana", "Grafana", "Sysmon", "auditd", "Hydra", "Mimikatz", "VirtualBox"],
    href: "https://github.com/cayvoh254/lab-01-soc-wazuh-siem",
  },
  {
    num: "02",
    title: "Web App & API Pentesting Lab",
    subtitle: "OWASP Top 10 · API Security Top 10 · Burp Suite · Structured Reporting",
    date: "2026",
    overview: "Hands-on penetration testing against intentionally vulnerable targets with a focus on producing professional-grade findings reports, not just exploiting but documenting reproduction steps, impact, and remediation guidance. Lab targets span OWASP Top 10 web vulnerabilities and the OWASP API Security Top 10, with emphasis on the API-specific issues most common in fintech and SaaS environments.",
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
    num: "03",
    title: "Home Network Security Lab",
    subtitle: "pfSense · VLAN Segmentation · Zeek Traffic Analysis · Wireshark",
    date: "2025",
    overview: "Mirrors the segmented network architecture found in enterprise environments: separate VLANs for different trust zones, strict inter-VLAN routing enforced by firewall rules, and passive traffic analysis to validate that isolation is actually working, not just assumed. Built to understand network segmentation decisions from the ground up after years of monitoring enterprise networks without designing them.",
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
    num: "04",
    title: "Active Directory Attack & Defense",
    subtitle: "BloodHound · Kerberoasting · Pass-the-Hash · Sysmon Hardening · Wazuh Detection",
    date: "2026",
    overview: "Two-phase approach: attack a virtualised Windows Server AD environment using real adversary techniques, then harden the same environment and validate that the attacks now produce detectable signals. The two-phase structure is deliberate: detection rules can only be written well if you know exactly what attack traffic and logs look like from the attacker side.",
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
    mitre: ["T1558.003: Kerberoasting", "T1550.002: Pass-the-Hash", "T1069.002: Domain Groups", "T1003.001: LSASS Memory"],
    tools: ["Windows Server 2019", "Kali Linux", "BloodHound", "Impacket", "CrackMapExec", "Sysmon", "Wazuh", "hashcat", "VirtualBox"],
    href: "https://github.com/cayvoh254/lab-04-active-directory-attack-defense",
  },
];

export default function Writeups() {
  return (
    <section className="sec sec-alt" id="writeups">
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num">Writeups</div>
          <p style={{ fontSize: 14, color: "var(--lt-muted)", marginTop: 8, maxWidth: "52ch", lineHeight: 1.7 }}>
            Lab documentation written to professional report standard: setup, methodology, findings, detections, and lessons learned.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {LABS.map((lab) => (
            <article key={lab.num} className="writeup-card" style={{
              background: "var(--lt)",
              border: "1px solid var(--lt-brd)",
              borderRadius: 12,
              padding: "28px 32px",
            }}>
              {/* Header row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 700, color: "var(--lt-dim)",
                      fontVariantNumeric: "tabular-nums", letterSpacing: ".04em",
                    }}>{lab.num}</span>
                    <h3 style={{
                      fontSize: 16, fontWeight: 700, color: "var(--lt-fg)",
                      letterSpacing: "-.02em", lineHeight: 1.2,
                    }}>{lab.title}</h3>
                  </div>
                  <div style={{ fontSize: 11.5, color: "var(--gld)", fontWeight: 500, letterSpacing: ".01em" }}>
                    {lab.subtitle}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 11, color: "var(--lt-dim)" }}>{lab.date}</span>
                  <a
                    href={lab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 5,
                      fontSize: 12, fontWeight: 600, color: "var(--lt-fg)",
                      padding: "6px 14px", border: "1px solid var(--lt-brd)",
                      borderRadius: 6, textDecoration: "none",
                      transition: "border-color .2s, color .2s",
                    }}
                  >
                    <svg viewBox="0 0 24 24" width={13} height={13} fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              <p style={{ fontSize: 13, color: "var(--lt-muted)", lineHeight: 1.78, marginBottom: 20 }}>
                {lab.overview}
              </p>

              <div className="writeup-body" style={{ display: "grid", gridTemplateColumns: "1fr 200px", gap: "0 32px", alignItems: "start" }}>
                {/* Techniques */}
                <div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 10 }}>
                    Techniques Practiced
                  </div>
                  <ul style={{ paddingLeft: 16, display: "flex", flexDirection: "column", gap: 5 }}>
                    {lab.techniques.map((t, i) => (
                      <li key={i} style={{ fontSize: 12.5, color: "var(--lt-muted)", lineHeight: 1.65, listStyleType: "disc" }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column: MITRE + Tools */}
                <div>
                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 8 }}>
                    MITRE ATT&amp;CK
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 20 }}>
                    {lab.mitre.map(m => (
                      <span key={m} style={{
                        fontSize: 11, color: "var(--gld)", fontFamily: "ui-monospace, monospace",
                        fontWeight: 500,
                      }}>{m}</span>
                    ))}
                  </div>

                  <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--lt-dim)", marginBottom: 8 }}>
                    Tools
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {lab.tools.map(t => (
                      <span key={t} className="tag" style={{ fontSize: 10.5 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
