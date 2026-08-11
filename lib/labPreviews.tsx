import type { ReactElement } from "react";

/* ─── Technical SVG previews for the security labs ───
   Full-detail architecture / dashboard mockups. Rendered at readable
   size on the project detail pages. */

function SocPreview() {
  return (
    <svg viewBox="0 0 480 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="240" fill="#0C1018"/>
      {[40,80,120,160,200].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,.028)" strokeWidth="1"/>)}
      {[80,160,240,320,400].map(x => <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="rgba(255,255,255,.02)" strokeWidth="1"/>)}
      {/* Active hosts panel */}
      <rect x="16" y="16" width="208" height="96" rx="5" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      <circle cx="30" cy="30" r="3.5" fill="#3ba55d" opacity=".9"/>
      <text x="42" y="34" fontSize="9" fill="rgba(255,255,255,.3)" fontFamily="monospace">ACTIVE HOSTS</text>
      <text x="30" y="88" fontSize="44" fill="rgba(255,255,255,.18)" fontFamily="Georgia,serif" letterSpacing="-3">24</text>
      <text x="92" y="88" fontSize="12" fill="rgba(59,165,93,.4)" fontFamily="monospace" dy="-2">online</text>
      {/* Alert stream panel */}
      <rect x="240" y="16" width="224" height="96" rx="5" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      <text x="256" y="34" fontSize="9" fill="rgba(255,255,255,.3)" fontFamily="monospace">ALERT STREAM</text>
      <rect x="256" y="44" width="148" height="6" rx="2" fill="rgba(220,60,60,.35)"/>
      <rect x="256" y="57" width="108" height="6" rx="2" fill="rgba(245,158,11,.3)"/>
      <rect x="256" y="70" width="168" height="6" rx="2" fill="rgba(59,165,93,.25)"/>
      <rect x="256" y="83" width="88" height="6" rx="2" fill="rgba(220,60,60,.2)"/>
      <rect x="416" y="44" width="36" height="6" rx="2" fill="rgba(220,60,60,.45)"/>
      <rect x="416" y="57" width="36" height="6" rx="2" fill="rgba(245,158,11,.35)"/>
      <rect x="416" y="70" width="36" height="6" rx="2" fill="rgba(59,165,93,.3)"/>
      <rect x="416" y="83" width="36" height="6" rx="2" fill="rgba(100,100,100,.2)"/>
      {/* Log stream panel */}
      <rect x="16" y="128" width="448" height="96" rx="5" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
      <text x="28" y="146" fontSize="9" fill="rgba(255,255,255,.22)" fontFamily="monospace">SYSLOG STREAM</text>
      <text x="28" y="163" fontSize="8.5" fill="rgba(59,165,93,.65)" fontFamily="monospace">{"12:04:31  INFO    sshd: pam_unix: authentication success — user kevin"}</text>
      <text x="28" y="177" fontSize="8.5" fill="rgba(220,60,60,.65)" fontFamily="monospace">{"12:04:58  ALERT   brute-force: 8 SSH auth failures in 60s  [T1110.001]"}</text>
      <text x="28" y="191" fontSize="8.5" fill="rgba(245,158,11,.65)" fontFamily="monospace">{"12:05:12  WARN    /etc/passwd modified — new user added [T1136.001]"}</text>
      <text x="28" y="205" fontSize="8.5" fill="rgba(255,255,255,.2)" fontFamily="monospace">{"12:05:31  INFO    Kibana rule triggered — investigation opened"}</text>
      <text x="452" y="234" textAnchor="end" fontSize="8" fill="rgba(184,134,11,.4)" fontFamily="monospace">WAZUH / GRAFANA / KIBANA</text>
    </svg>
  );
}

function PentestPreview() {
  return (
    <svg viewBox="0 0 480 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="240" fill="#0C1018"/>
      {[60,120,180].map(y => <line key={y} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,.022)" strokeWidth="1"/>)}
      <line x1="240" y1="0" x2="240" y2="240" stroke="rgba(255,255,255,.045)" strokeWidth="1"/>
      {/* Request panel */}
      <rect x="14" y="14" width="212" height="212" rx="6" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      <text x="24" y="31" fontSize="8.5" fill="rgba(255,255,255,.3)" fontFamily="monospace">REQUEST</text>
      <rect x="22" y="37" width="48" height="12" rx="2" fill="rgba(59,165,93,.25)"/>
      <text x="24" y="47" fontSize="8.5" fill="rgba(59,165,93,.95)" fontFamily="monospace">GET</text>
      <text x="76" y="47" fontSize="8.5" fill="rgba(255,255,255,.5)" fontFamily="monospace">/api/v2/vehicles/3</text>
      <text x="22" y="65" fontSize="8" fill="rgba(255,255,255,.2)" fontFamily="monospace">Host: crapi.io</text>
      <text x="22" y="77" fontSize="8" fill="rgba(255,255,255,.2)" fontFamily="monospace">Authorization: Bearer ey...</text>
      <text x="22" y="89" fontSize="8" fill="rgba(255,255,255,.2)" fontFamily="monospace">Content-Type: application/json</text>
      <line x1="22" y1="103" x2="204" y2="103" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>
      <rect x="14" y="110" width="212" height="46" fill="rgba(220,60,60,.07)" stroke="rgba(220,60,60,.38)" strokeWidth="1"/>
      <text x="22" y="125" fontSize="7.5" fill="rgba(220,60,60,.5)" fontFamily="monospace">BOLA — FIELD MODIFIED</text>
      <text x="22" y="139" fontSize="8" fill="rgba(220,60,60,.8)" fontFamily="monospace">X-User-ID: 3 → 7</text>
      {/* Response panel */}
      <rect x="254" y="14" width="212" height="212" rx="6" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      <text x="264" y="31" fontSize="8.5" fill="rgba(255,255,255,.3)" fontFamily="monospace">RESPONSE</text>
      <rect x="264" y="37" width="52" height="12" rx="2" fill="rgba(220,60,60,.25)"/>
      <text x="266" y="47" fontSize="8.5" fill="rgba(220,60,60,.95)" fontFamily="monospace">200 OK</text>
      <text x="264" y="65" fontSize="8" fill="rgba(255,255,255,.2)" fontFamily="monospace">Content-Type: application/json</text>
      <text x="264" y="81" fontSize="8" fill="rgba(255,255,255,.35)" fontFamily="monospace">{`{`}</text>
      <text x="272" y="93" fontSize="8" fill="rgba(255,255,255,.35)" fontFamily="monospace">{`"id": 7,`}</text>
      <text x="272" y="105" fontSize="8" fill="rgba(245,158,11,.7)" fontFamily="monospace">{`"name": "Jane Doe",`}</text>
      <text x="272" y="117" fontSize="8" fill="rgba(245,158,11,.7)" fontFamily="monospace">{`"location": {...},`}</text>
      <text x="272" y="129" fontSize="8" fill="rgba(245,158,11,.7)" fontFamily="monospace">{`"vehicle": {...}`}</text>
      <text x="264" y="141" fontSize="8" fill="rgba(255,255,255,.35)" fontFamily="monospace">{`}`}</text>
      <text x="452" y="234" textAnchor="end" fontSize="8" fill="rgba(184,134,11,.4)" fontFamily="monospace">BURP SUITE / OWASP ZAP</text>
    </svg>
  );
}

function NetworkPreview() {
  return (
    <svg viewBox="0 0 480 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="240" fill="#0C1018"/>
      <defs>
        <pattern id="lc-hexgrid" x="0" y="0" width="36" height="31.2" patternUnits="userSpaceOnUse">
          <path d="M18 2.6L34 12v18.4L18 40.4 2 30.4V12z" fill="none" stroke="rgba(255,255,255,.026)" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="480" height="240" fill="url(#lc-hexgrid)"/>
      {/* VLAN zone outlines */}
      <rect x="20" y="152" width="84" height="72" rx="6" fill="rgba(59,165,93,.03)" stroke="rgba(59,165,93,.18)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="62" y="216" textAnchor="middle" fontSize="7.5" fill="rgba(59,165,93,.5)" fontFamily="monospace">SERVERS</text>
      <rect x="198" y="152" width="84" height="72" rx="6" fill="rgba(100,130,220,.03)" stroke="rgba(100,130,220,.18)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="240" y="216" textAnchor="middle" fontSize="7.5" fill="rgba(100,130,220,.5)" fontFamily="monospace">USERS</text>
      <rect x="376" y="152" width="84" height="72" rx="6" fill="rgba(245,158,11,.03)" stroke="rgba(245,158,11,.2)" strokeWidth="1" strokeDasharray="4,3"/>
      <text x="418" y="216" textAnchor="middle" fontSize="7.5" fill="rgba(245,158,11,.5)" fontFamily="monospace">IoT</text>
      {/* Connections */}
      <line x1="240" y1="36" x2="240" y2="88" stroke="rgba(255,255,255,.15)" strokeWidth="1.5"/>
      <line x1="240" y1="106" x2="62" y2="158" stroke="rgba(255,255,255,.12)" strokeWidth="1.5"/>
      <line x1="240" y1="106" x2="240" y2="158" stroke="rgba(255,255,255,.12)" strokeWidth="1.5"/>
      <line x1="240" y1="106" x2="418" y2="158" stroke="rgba(255,255,255,.12)" strokeWidth="1.5"/>
      <line x1="418" y1="152" x2="418" y2="106" stroke="rgba(220,60,60,.15)" strokeWidth="1.2" strokeDasharray="4,3"/>
      <text x="435" y="130" fontSize="7" fill="rgba(220,60,60,.4)" fontFamily="monospace">BLOCKED</text>
      {/* Nodes */}
      {([
        { x: 240, y: 24, label: "Internet", r: 12, accent: false, warn: false },
        { x: 240, y: 97, label: "pfSense", r: 14, accent: true, warn: false },
        { x: 62,  y: 171, label: "SRV",    r: 10, accent: false, warn: false },
        { x: 240, y: 171, label: "PC",     r: 10, accent: false, warn: false },
        { x: 418, y: 171, label: "IoT",    r: 10, accent: false, warn: true  },
      ] as const).map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill="rgba(255,255,255,.022)"/>
          <circle cx={n.x} cy={n.y} r={n.r}
            fill={n.accent ? "rgba(184,134,11,.18)" : n.warn ? "rgba(220,60,60,.14)" : "rgba(255,255,255,.07)"}
            stroke={n.accent ? "rgba(184,134,11,.7)" : n.warn ? "rgba(220,60,60,.6)" : "rgba(255,255,255,.26)"}
            strokeWidth="1.5"/>
          <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,.4)" fontFamily="monospace">{n.label}</text>
        </g>
      ))}
      <text x="452" y="234" textAnchor="end" fontSize="8" fill="rgba(184,134,11,.4)" fontFamily="monospace">pfSENSE / ZEEK / WIRESHARK</text>
    </svg>
  );
}

function ADPreview() {
  return (
    <svg viewBox="0 0 480 240" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="480" height="240" fill="#0C1018"/>
      {[60,110,160].map(r => (
        <circle key={r} cx="240" cy="280" r={r * 1.5} fill="none" stroke="rgba(255,255,255,.028)" strokeWidth="1"/>
      ))}
      {/* Domain root */}
      <circle cx="240" cy="30" r="16" fill="rgba(100,130,220,.18)" stroke="rgba(100,130,220,.6)" strokeWidth="1.5"/>
      <text x="240" y="34" textAnchor="middle" fontSize="8" fill="rgba(100,130,220,.9)" fontFamily="monospace">DC</text>
      <text x="240" y="14" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,.22)" fontFamily="monospace">corp.local</text>
      {/* OU connections */}
      <line x1="240" y1="46" x2="100" y2="100" stroke="rgba(255,255,255,.14)" strokeWidth="1.5"/>
      <line x1="240" y1="46" x2="240" y2="100" stroke="rgba(255,255,255,.14)" strokeWidth="1.5"/>
      <line x1="240" y1="46" x2="380" y2="100" stroke="rgba(255,255,255,.14)" strokeWidth="1.5"/>
      {/* OUs */}
      {([
        { x: 100, y: 110, label: "SVC", red: false },
        { x: 240, y: 110, label: "USERS", red: false },
        { x: 380, y: 110, label: "ADMINS", red: true },
      ] as const).map((ou, i) => (
        <g key={i}>
          <circle cx={ou.x} cy={ou.y} r={13}
            fill="rgba(255,255,255,.05)"
            stroke={ou.red ? "rgba(220,60,60,.6)" : "rgba(255,255,255,.2)"}
            strokeWidth="1.5"/>
          <text x={ou.x} y={ou.y + 4} textAnchor="middle" fontSize="6.5"
            fill={ou.red ? "rgba(220,60,60,.9)" : "rgba(255,255,255,.45)"} fontFamily="monospace">
            {ou.label}
          </text>
        </g>
      ))}
      {/* Users under USERS OU */}
      <line x1="240" y1="123" x2="188" y2="162" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
      <line x1="240" y1="123" x2="292" y2="162" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
      <circle cx="188" cy="170" r="9" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.16)" strokeWidth="1"/>
      <circle cx="292" cy="170" r="9" fill="rgba(255,255,255,.04)" stroke="rgba(255,255,255,.16)" strokeWidth="1"/>
      <text x="188" y="174" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.3)" fontFamily="monospace">svc</text>
      <text x="292" y="174" textAnchor="middle" fontSize="6" fill="rgba(255,255,255,.3)" fontFamily="monospace">usr</text>
      {/* BloodHound attack path */}
      <path d="M188 162 Q240 145 292 162 Q340 138 380 110"
        fill="none" stroke="rgba(220,60,60,.55)" strokeWidth="2" strokeDasharray="4,2.5"/>
      {/* MITRE labels */}
      <text x="20" y="196" fontSize="8" fill="rgba(245,158,11,.45)" fontFamily="monospace">Kerberoasting: T1558.003</text>
      <text x="20" y="210" fontSize="8" fill="rgba(220,60,60,.4)" fontFamily="monospace">Pass-the-Hash: T1550.002</text>
      <text x="20" y="224" fontSize="8" fill="rgba(59,165,93,.4)" fontFamily="monospace">Detection: EID 4769 RC4 flag</text>
      <text x="452" y="234" textAnchor="end" fontSize="8" fill="rgba(184,134,11,.4)" fontFamily="monospace">BLOODHOUND / SYSMON / WAZUH</text>
    </svg>
  );
}

export const LAB_PREVIEWS: Record<string, ReactElement> = {
  "home-soc-lab":          <SocPreview />,
  "web-api-pentesting":    <PentestPreview />,
  "home-network-security": <NetworkPreview />,
  "active-directory":      <ADPreview />,
};
