import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Clean NURIS Emblem SVG matching the exact logo
const nurisEmblemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" fill="none">
  <!-- Orange geometric accents -->
  <g fill="#ea8a28">
    <!-- Top diamond dot 1 -->
    <rect x="238" y="18" width="36" height="36" transform="rotate(45 256 36)" rx="3" />
    <!-- Top diamond dot 2 -->
    <rect x="231" y="70" width="50" height="50" transform="rotate(45 256 95)" rx="4" />
    <!-- Center Chevron V -->
    <path d="M 154 148 L 256 282 L 358 148 L 312 148 L 256 222 L 200 148 Z" />
  </g>

  <!-- Green Islamic Calligraphic Geometric Frame (#0e8043) -->
  <g fill="#0e8043">
    <!-- Left Top Arm -->
    <path d="M 76 200 L 178 98 L 216 136 L 150 202 L 188 240 L 150 278 L 76 204 Z" />
    <!-- Right Top Arm -->
    <path d="M 436 200 L 334 98 L 296 136 L 362 202 L 324 240 L 362 278 L 436 204 Z" />

    <!-- Left Wing Main -->
    <path d="M 20 256 L 178 98 L 223 143 L 105 261 L 176 332 L 221 287 L 256 322 L 256 492 L 20 256 Z" />
    <!-- Right Wing Main -->
    <path d="M 492 256 L 334 98 L 289 143 L 407 261 L 336 332 L 291 287 L 256 322 L 256 492 L 492 256 Z" />

    <!-- Bottom Center V Contour -->
    <path d="M 256 492 L 90 326 L 135 281 L 256 402 L 377 281 L 422 326 Z" />

    <!-- Inner dots -->
    <rect x="301" y="288" width="36" height="36" transform="rotate(45 319 306)" rx="3" />
    <rect x="175" y="288" width="36" height="36" transform="rotate(45 193 306)" rx="3" />
  </g>
</svg>`;

async function run() {
  const publicDir = path.resolve('public');
  const assetsDir = path.resolve('public/assets');

  // 1. Ensure public/logo-nuris.png is an exact copy of the uploaded PNG
  const uploadedPngPath = path.join(publicDir, 'LOGO NURIS KOTAK tanpa tulisan.png');
  const logoNurisPng = path.join(publicDir, 'logo-nuris.png');
  const assetLogoNuris = path.join(assetsDir, 'logo-nuris-kotak.png');

  if (fs.existsSync(uploadedPngPath)) {
    fs.copyFileSync(uploadedPngPath, logoNurisPng);
    fs.copyFileSync(uploadedPngPath, assetLogoNuris);
    console.log('✅ Synchronized official uploaded logo to logo-nuris.png and assets/logo-nuris-kotak.png');
  }

  // 2. Render SVG favicon
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), nurisEmblemSvg);
  fs.writeFileSync(path.join(assetsDir, 'logo-nuris-kotak.svg'), nurisEmblemSvg);
  console.log('✅ Generated public/favicon.svg and assets/logo-nuris-kotak.svg');

  // 3. Render multi-size PNGs using Resvg
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngBuffers = {};

  for (const size of sizes) {
    const resvg = new Resvg(nurisEmblemSvg, {
      fitTo: { mode: 'width', value: size }
    });
    const png = resvg.render().asPng();
    pngBuffers[size] = png;

    if (size === 16) {
      fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png);
    } else if (size === 32) {
      fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png);
      fs.writeFileSync(path.join(publicDir, 'favicon.png'), png);
    } else if (size === 180) {
      fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png);
    }
  }

  // 4. Construct Windows/Chrome Multi-size .ICO file with 16x16, 32x32, 48x48 PNG entries
  const icoSizes = [16, 32, 48];
  const headerLen = 6;
  const dirEntryLen = 16;
  const count = icoSizes.length;
  let offset = headerLen + dirEntryLen * count;

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4); // count of images

  const dirEntries = [];
  const imageBuffers = [];

  for (const s of icoSizes) {
    const imgBuf = pngBuffers[s];
    imageBuffers.push(imgBuf);

    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(s === 256 ? 0 : s, 0); // width
    entry.writeUInt8(s === 256 ? 0 : s, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(imgBuf.length, 8); // image size in bytes
    entry.writeUInt32LE(offset, 12); // image offset

    dirEntries.push(entry);
    offset += imgBuf.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...imageBuffers]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('✅ Generated valid multi-resolution public/favicon.ico (16px, 32px, 48px)');
}

run().catch(console.error);
