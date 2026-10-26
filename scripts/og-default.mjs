// Renders public/og-default.png (1200x630) and public/favicon.ico. Run: node scripts/og-default.mjs
import sharp from 'sharp';

const lanes = ['#2f5d8c', '#6a4a98', '#2d7653', '#9a6417'];
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
	<rect width="1200" height="630" fill="#f3f5f4"/>
	${lanes.map((c, i) => `<rect x="96" y="${150 + i * 84}" width="14" height="70" fill="${c}"/>`).join('')}
	<text x="150" y="250" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="84" fill="#16211d">Markus Tobler</text>
	<text x="150" y="330" font-family="Georgia, serif" font-size="44" fill="#4a5752">Field notes on AI transformation,</text>
	<text x="150" y="390" font-family="Georgia, serif" font-size="44" fill="#4a5752">citizen development and enablement</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');

const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#16211d"/><path d="M8 6h5v20H8z" fill="#6a4a98"/></svg>`;
const png = await sharp(Buffer.from(icon)).resize(32, 32).png().toBuffer();
// Minimal ICO container with one PNG image.
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
const { writeFile } = await import('node:fs/promises');
await writeFile('public/favicon.ico', Buffer.concat([header, png]));
