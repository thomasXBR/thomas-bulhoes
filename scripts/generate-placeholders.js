const fs = require('fs');
const path = require('path');

function createSvg({ title, subtitle, accentColor = '#38bdf8', bgGradient = ['#0f172a', '#020617'], type = 'gameplay', tags = [] }) {
  const tagsSvg = tags.map((tag, i) => `
    <g transform="translate(${40 + i * 140}, 390)">
      <rect width="130" height="32" rx="6" fill="#1e293b" stroke="${accentColor}" stroke-opacity="0.4" />
      <text x="65" y="21" fill="#e2e8f0" font-size="12" font-family="sans-serif" font-weight="600" text-anchor="middle">${tag}</text>
    </g>
  `).join('');

  let visualElement = '';
  if (type === 'wireframe') {
    visualElement = `
      <!-- Wireframe Grid and Mesh -->
      <g stroke="${accentColor}" stroke-width="1.2" opacity="0.85" fill="none">
        <polygon points="400,100 580,180 520,320 280,320 220,180" />
        <polygon points="400,140 520,195 480,290 320,290 280,195" />
        <line x1="400" y1="100" x2="400" y2="140" />
        <line x1="580" y1="180" x2="520" y2="195" />
        <line x1="520" y1="320" x2="480" y2="290" />
        <line x1="280" y1="320" x2="320" y2="290" />
        <line x1="220" y1="180" x2="280" y2="195" />
        <line x1="400" y1="140" x2="400" y2="290" />
        <line x1="280" y1="195" x2="520" y2="195" />
        <line x1="320" y1="290" x2="480" y2="290" />
        <!-- Cross edges -->
        <line x1="400" y1="100" x2="520" y2="195" stroke-dasharray="3,3" />
        <line x1="400" y1="100" x2="280" y2="195" stroke-dasharray="3,3" />
        <line x1="220" y1="180" x2="320" y2="290" stroke-dasharray="3,3" />
        <line x1="580" y1="180" x2="480" y2="290" stroke-dasharray="3,3" />
      </g>
      <!-- Vertex points -->
      <g fill="${accentColor}">
        <circle cx="400" cy="100" r="4" />
        <circle cx="580" cy="180" r="4" />
        <circle cx="520" cy="320" r="4" />
        <circle cx="280" cy="320" r="4" />
        <circle cx="220" cy="180" r="4" />
        <circle cx="400" cy="140" r="3" />
      </g>
    `;
  } else if (type === 'uv') {
    visualElement = `
      <!-- UV Layout Islands -->
      <g stroke="${accentColor}" stroke-width="1.5" fill="${accentColor}" fill-opacity="0.12">
        <rect x="220" y="90" width="160" height="130" rx="4" />
        <rect x="420" y="90" width="160" height="90" rx="4" />
        <polygon points="220,250 350,250 380,330 250,330" />
        <polygon points="420,210 560,210 580,310 440,310" />
        <circle cx="390" cy="270" r="28" />
        <circle cx="390" cy="325" r="20" />
      </g>
      <!-- Checkerboard texture grid background -->
      <pattern id="uvGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="10" height="10" fill="#334155" fill-opacity="0.25" />
        <rect x="10" y="10" width="10" height="10" fill="#334155" fill-opacity="0.25" />
      </pattern>
      <rect x="200" y="70" width="400" height="280" fill="url(#uvGrid)" stroke="#475569" stroke-width="1" rx="8" />
    `;
  } else if (type === 'textured') {
    visualElement = `
      <!-- 3D Drone Body Shell with Shading and Glow -->
      <g filter="url(#glow)">
        <polygon points="400,90 560,170 510,310 290,310 240,170" fill="#1e293b" stroke="${accentColor}" stroke-width="2" />
        <!-- Cockpit Canopy -->
        <polygon points="400,120 480,170 450,230 350,230 320,170" fill="${accentColor}" fill-opacity="0.25" stroke="${accentColor}" stroke-width="1.5" />
        <!-- Thrusters -->
        <rect x="210" y="150" width="30" height="70" rx="6" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" />
        <rect x="560" y="150" width="30" height="70" rx="6" fill="#0f172a" stroke="#06b6d4" stroke-width="1.5" />
        <polygon points="215,220 235,220 225,260" fill="#38bdf8" opacity="0.8" />
        <polygon points="565,220 585,220 575,260" fill="#38bdf8" opacity="0.8" />
        <!-- Core light -->
        <circle cx="400" cy="265" r="14" fill="${accentColor}" />
        <circle cx="400" cy="265" r="7" fill="#ffffff" />
      </g>
    `;
  } else {
    // Default gameplay visualization with grid, character/particles, UI telemetry
    visualElement = `
      <!-- Perspective Arena Grid -->
      <g stroke="${accentColor}" stroke-opacity="0.25" stroke-width="1">
        <line x1="80" y1="340" x2="720" y2="340" />
        <line x1="120" y1="280" x2="680" y2="280" />
        <line x1="160" y1="230" x2="640" y2="230" />
        <line x1="200" y1="190" x2="600" y2="190" />
        <line x1="100" y1="360" x2="350" y2="180" />
        <line x1="700" y1="360" x2="450" y2="180" />
        <line x1="280" y1="360" x2="380" y2="180" />
        <line x1="520" y1="360" x2="420" y2="180" />
        <line x1="400" y1="360" x2="400" y2="180" />
      </g>
      <!-- Central Action Unit -->
      <g transform="translate(400, 240)">
        <circle cx="0" cy="0" r="48" fill="#1e1b4b" stroke="${accentColor}" stroke-width="2.5" />
        <polygon points="0,-24 24,18 -24,18" fill="${accentColor}" opacity="0.9" />
        <!-- Slash Wave or Radar Ring -->
        <circle cx="0" cy="0" r="85" fill="none" stroke="${accentColor}" stroke-dasharray="6,8" stroke-width="1.5" opacity="0.6" />
        <!-- Target Reticle -->
        <line x1="-120" y1="0" x2="-70" y2="0" stroke="#f43f5e" stroke-width="2" />
        <line x1="70" y1="0" x2="120" y2="0" stroke="#f43f5e" stroke-width="2" />
        <circle cx="100" cy="0" r="16" fill="none" stroke="#f43f5e" stroke-width="2" />
      </g>
      <!-- Floating HUD / Telemetry Box -->
      <g transform="translate(48, 60)">
        <rect width="180" height="64" rx="8" fill="#030712" fill-opacity="0.8" stroke="#334155" stroke-width="1" />
        <text x="16" y="24" fill="#94a3b8" font-size="10" font-family="monospace">FPS: 60.0 | GC: 0B</text>
        <text x="16" y="44" fill="#22c55e" font-size="12" font-family="monospace">STATE: ATTACK_COMBO</text>
      </g>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${bgGradient[0]}" />
      <stop offset="100%" stop-color="${bgGradient[1]}" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Base -->
  <rect width="800" height="450" fill="url(#bgGrad)" />

  <!-- Subtle Top Tech Stripe -->
  <rect x="0" y="0" width="800" height="4" fill="${accentColor}" />

  <!-- Grid Pattern Overlay -->
  <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
    <line x1="0" y1="75" x2="800" y2="75" />
    <line x1="0" y1="150" x2="800" y2="150" />
    <line x1="0" y1="225" x2="800" y2="225" />
    <line x1="0" y1="300" x2="800" y2="300" />
    <line x1="0" y1="375" x2="800" y2="375" />
    <line x1="160" y1="0" x2="160" y2="450" />
    <line x1="320" y1="0" x2="320" y2="450" />
    <line x1="480" y1="0" x2="480" y2="450" />
    <line x1="640" y1="0" x2="640" y2="450" />
  </g>

  <!-- Visual Central Element -->
  ${visualElement}

  <!-- Header Text -->
  <g transform="translate(48, 50)">
    <text x="0" y="0" fill="#f8fafc" font-size="20" font-family="sans-serif" font-weight="700">${title}</text>
    <text x="0" y="20" fill="#94a3b8" font-size="12" font-family="sans-serif">${subtitle}</text>
  </g>

  <!-- Tags / Specs Footer -->
  ${tagsSvg}
</svg>`;
}

const items = [
  // Relic Fall
  { file: 'public/games/relic-fall-preview.svg', title: 'RELIC FALL: CHRONICLES', subtitle: 'Fast-Paced Action Roguelite Gameplay Loop', accentColor: '#38bdf8', bgGradient: ['#0f172a', '#020617'], tags: ['Unity 2D', '60 FPS', 'FSM Combat', 'Zero-GC'] },
  { file: 'public/games/relic-fall-screen1.svg', title: 'HIERARCHICAL BOSS FSM', subtitle: 'State Transition Phase Graphs & Telegraph Timers', accentColor: '#a855f7', bgGradient: ['#1e1b4b', '#09090b'], tags: ['Phase Logic', 'Hitboxes', 'NonAlloc'] },
  { file: 'public/games/relic-fall-screen2.svg', title: 'COMBAT FEEL & PARTICLES', subtitle: 'Hitstop Buffers, Frame Pauses & Trauma Shakes', accentColor: '#f43f5e', bgGradient: ['#31101e', '#09090b'], tags: ['Game Juice', 'Cinemachine', 'Feedback'] },
  { file: 'public/games/relic-fall-screen3.svg', title: 'RELIC MODIFIER MATRIX', subtitle: 'ScriptableObject Modifiers & Real-Time Stats', accentColor: '#10b981', bgGradient: ['#064e3b', '#022c22'], tags: ['Architecture', 'ScriptableObjects', 'Synergies'] },

  // Void Recon
  { file: 'public/games/void-recon-preview.svg', title: 'VOID RECON PROTOCOL', subtitle: '3D Tactical Stealth & Field-Of-View Mesh', accentColor: '#06b6d4', bgGradient: ['#082f49', '#020617'], tags: ['Unity 6', 'Vision Cones', 'Acoustic Sound'] },
  { file: 'public/games/void-recon-screen1.svg', title: 'PROCEDURAL CONE MESH', subtitle: 'Real-Time Wall Occlusion & Raycast Sweep', accentColor: '#0ea5e9', bgGradient: ['#075985', '#0f172a'], tags: ['Custom Mesh', 'Raycasting', 'Obstacle Clip'] },
  { file: 'public/games/void-recon-screen2.svg', title: 'ACOUSTIC PROPAGATION', subtitle: 'Spherical Footstep Sound Wave Inquiries', accentColor: '#eab308', bgGradient: ['#422006', '#1c1917'], tags: ['Audio Range', 'NavMesh', 'Guard Alert'] },
  { file: 'public/games/void-recon-screen3.svg', title: 'DIEGETIC TERMINAL DISPLAY', subtitle: 'RenderTexture Surveillance & Terminal Cameras', accentColor: '#22c55e', bgGradient: ['#14532d', '#052e16'], tags: ['RenderTexture', 'Canvas Camera', 'Interactive'] },

  // Aether Drifter
  { file: 'public/games/aether-drifter-preview.svg', title: 'AETHER DRIFTER', subtitle: 'Arcade Hover Physics & High-Speed Cornering', accentColor: '#ec4899', bgGradient: ['#500724', '#0f172a'], tags: ['Physics', 'Raycast Suspension', 'Hooke Law'] },
  { file: 'public/games/aether-drifter-screen1.svg', title: '4-POINT RAYCAST DAMPER', subtitle: 'Spring-Damper Physics Vector Alignment', accentColor: '#f59e0b', bgGradient: ['#451a03', '#18181b'], tags: ['RigidBody', 'Springs', 'Surface Normal'] },
  { file: 'public/games/aether-drifter-screen2.svg', title: 'SPLINE CAMERA & DRIFT', subtitle: 'Cinemachine Dolly Paths & Velocity FOV', accentColor: '#8b5cf6', bgGradient: ['#2e1065', '#09090b'], tags: ['Splines', 'Speed Trail', 'Dynamic FOV'] },

  // 3D Model
  { file: 'public/models/drone-textured.svg', title: 'AERO-SCOUT MK.IV (TEXTURED)', subtitle: 'PBR Shaded Mesh with Channel-Packed Roughness/Metallic', accentColor: '#38bdf8', bgGradient: ['#0f172a', '#020617'], type: 'textured', tags: ['PBR 2K', 'Unity URP', 'DirectX Normal', '4,820 Tris'] },
  { file: 'public/models/drone-wireframe.svg', title: 'AERO-SCOUT MK.IV (WIREFRAME)', subtitle: 'Optimized Game Topology & Clean Edge Loops', accentColor: '#22c55e', bgGradient: ['#052e16', '#020617'], type: 'wireframe', tags: ['Clean Topology', 'No N-Gons', 'Bevel Weight', 'Low-Poly'] },
  { file: 'public/models/drone-uv.svg', title: 'UV ATLAS PACKING (82% DENSITY)', subtitle: 'Symmetrical Mirroring & Uniform Texel Resolution', accentColor: '#f59e0b', bgGradient: ['#291e0a', '#0a0a0a'], type: 'uv', tags: ['Texel Density', '82% Pack', 'Channel ORM', 'Zero Bleed'] }
];

// Turntable angles (8 frames: 0 to 315)
for (let angle = 0; angle < 360; angle += 45) {
  items.push({
    file: `public/models/drone-angle-${angle}.svg`,
    title: `AERO-SCOUT TURNTABLE (${angle}°)`,
    subtitle: `Real-time Orbit View Perspective at ${angle} degrees`,
    accentColor: '#38bdf8',
    bgGradient: ['#0f172a', '#020617'],
    type: 'textured',
    tags: [`Angle: ${angle}°`, 'Unity Ready', 'FBX 1.0 Scale']
  });
}

for (const item of items) {
  const destPath = path.resolve(__dirname, '..', item.file);
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(destPath, createSvg(item));
  console.log('Created:', item.file);
}

