const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

const svgs = {
    'backgrounds/blue50.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#002966"/></svg>`,
    'backgrounds/blue60.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#003380"/></svg>`,
    'backgrounds/darkblue30.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#001a4d"/></svg>`,
    'backgrounds/darkblue50.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#002266"/></svg>`,
    'backgrounds/darkblue70.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#002b80"/></svg>`,
    'backgrounds/green50.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#006622"/></svg>`,
    'backgrounds/green60.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#00802b"/></svg>`,
    'backgrounds/green70.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#009933"/></svg>`,
    'backgrounds/grey40.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#666666"/></svg>`,
    'backgrounds/grey70.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#b3b3b3"/></svg>`,
    'backgrounds/grey80.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#cccccc"/></svg>`,
    'backgrounds/red50.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#cc0000"/></svg>`,
    'backgrounds/red60.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#e60000"/></svg>`,
    'backgrounds/red70.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#ff0000"/></svg>`,
    'backgrounds/yellow50.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#cccc00"/></svg>`,
    'backgrounds/yellow60.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#e6e600"/></svg>`,
    'backgrounds/yellow70.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="500" fill="#ffff00"/></svg>`,

    'neck/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 250 L350 250 L350 450 L150 450 Z" fill="#dddddd"/></svg>`,
    'neck/bend-backward.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 250 L350 250 L380 450 L120 450 Z" fill="#dddddd"/></svg>`,
    'neck/bend-forward.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 250 L350 250 L320 450 L180 450 Z" fill="#dddddd"/></svg>`,
    'neck/thick.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M120 250 L380 250 L380 450 L120 450 Z" fill="#dddddd"/></svg>`,

    'ears/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M160 150 L180 80 L200 150 Z" fill="#dddddd"/><path d="M300 150 L320 80 L340 150 Z" fill="#dddddd"/></svg>`,
    'ears/tilt-backward.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M140 160 L140 90 L180 150 Z" fill="#dddddd"/><path d="M320 160 L360 90 L360 150 Z" fill="#dddddd"/></svg>`,
    'ears/tilt-forward.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M180 160 L200 90 L220 160 Z" fill="#dddddd"/><path d="M280 160 L300 90 L320 160 Z" fill="#dddddd"/></svg>`,

    'hair/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="150" r="60" fill="#aaaaaa"/></svg>`,
    'hair/bang.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M190 150 Q250 200 310 150 L310 100 L190 100 Z" fill="#aaaaaa"/></svg>`,
    'hair/curls.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="220" cy="140" r="20" fill="#aaaaaa"/><circle cx="250" cy="130" r="20" fill="#aaaaaa"/><circle cx="280" cy="140" r="20" fill="#aaaaaa"/></svg>`,
    'hair/elegant.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M200 150 Q250 100 300 150 L300 120 Q250 80 200 120 Z" fill="#aaaaaa"/></svg>`,
    'hair/fancy.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250 100 L220 150 L280 150 Z" fill="#aaaaaa"/></svg>`,
    'hair/quiff.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M250 100 Q280 120 250 150 Q220 120 250 100 Z" fill="#aaaaaa"/></svg>`,
    'hair/short.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="200" y="120" width="100" height="30" fill="#aaaaaa"/></svg>`,

    'eyes/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="220" cy="200" r="10" fill="black"/><circle cx="280" cy="200" r="10" fill="black"/></svg>`,
    'eyes/angry.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M210 190 L230 200" stroke="black" stroke-width="3"/><path d="M290 190 L270 200" stroke="black" stroke-width="3"/><circle cx="220" cy="205" r="8" fill="black"/><circle cx="280" cy="205" r="8" fill="black"/></svg>`,
    'eyes/naughty.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="220" cy="200" r="10" fill="black"/><path d="M270 195 L290 205" stroke="black" stroke-width="3"/><path d="M270 205 L290 195" stroke="black" stroke-width="3"/></svg>`,
    'eyes/panda.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="220" cy="200" r="15" fill="#333"/><circle cx="280" cy="200" r="15" fill="#333"/><circle cx="220" cy="200" r="5" fill="white"/><circle cx="280" cy="200" r="5" fill="white"/></svg>`,
    'eyes/smart.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="205" y="190" width="30" height="20" stroke="black" fill="none"/><rect x="265" y="190" width="30" height="20" stroke="black" fill="none"/><line x1="235" y1="200" x2="265" y2="200" stroke="black"/><circle cx="220" cy="200" r="5" fill="black"/><circle cx="280" cy="200" r="5" fill="black"/></svg>`,
    'eyes/star.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M220 190 L225 210 L210 200 L230 200 L215 210 Z" fill="black"/><path d="M280 190 L285 210 L270 200 L290 200 L275 210 Z" fill="black"/></svg>`,

    'mouth/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240 230 Q250 240 260 230" stroke="black" fill="none"/></svg>`,
    'mouth/astonished.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="250" cy="235" r="10" fill="black"/></svg>`,
    'mouth/eating.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240 230 Q250 240 260 230" stroke="black" fill="none"/><circle cx="270" cy="230" r="5" fill="#654321"/></svg>`,
    'mouth/laugh.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M235 230 Q250 250 265 230 Z" fill="black"/></svg>`,
    'mouth/tongue.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240 230 Q250 240 260 230" stroke="black" fill="none"/><path d="M245 235 Q250 250 255 235" fill="pink"/></svg>`,

    'leg/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="400" width="50" height="100" fill="#dddddd"/><rect x="300" y="400" width="50" height="100" fill="#dddddd"/></svg>`,
    'leg/bubble-tea.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="400" width="50" height="100" fill="#dddddd"/><rect x="300" y="400" width="50" height="100" fill="#dddddd"/><rect x="360" y="420" width="30" height="40" fill="brown"/></svg>`,
    'leg/cookie.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="400" width="50" height="100" fill="#dddddd"/><rect x="300" y="400" width="50" height="100" fill="#dddddd"/><circle cx="370" cy="440" r="15" fill="brown"/></svg>`,
    'leg/game-console.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="150" y="400" width="50" height="100" fill="#dddddd"/><rect x="300" y="400" width="50" height="100" fill="#dddddd"/><rect x="360" y="430" width="40" height="20" fill="grey"/></svg>`,
    'leg/tilt-backward.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 400 L200 400 L180 500 L130 500 Z" fill="#dddddd"/><path d="M300 400 L350 400 L330 500 L280 500 Z" fill="#dddddd"/></svg>`,
    'leg/tilt-forward.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 400 L200 400 L220 500 L170 500 Z" fill="#dddddd"/><path d="M300 400 L350 400 L370 500 L320 500 Z" fill="#dddddd"/></svg>`,

    'accessories/default.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>`,
    'accessories/earings.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="180" r="5" fill="gold"/><circle cx="350" cy="180" r="5" fill="gold"/></svg>`,
    'accessories/flower.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="300" cy="120" r="10" fill="pink"/></svg>`,
    'accessories/glasses.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="220" cy="200" r="15" stroke="black" fill="none"/><circle cx="280" cy="200" r="15" stroke="black" fill="none"/><line x1="235" y1="200" x2="265" y2="200" stroke="black"/></svg>`,
    'accessories/headphone.svg': `<svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M150 200 Q250 100 350 200" stroke="black" stroke-width="5" fill="none"/><rect x="140" y="180" width="20" height="40" fill="black"/><rect x="340" y="180" width="20" height="40" fill="black"/></svg>`,
};

for (const [filePath, content] of Object.entries(svgs)) {
    const fullPath = path.join(assetsDir, filePath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    fs.writeFileSync(fullPath, content);
    console.log(`Created ${fullPath}`);
}
