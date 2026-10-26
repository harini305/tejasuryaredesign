// Generates optimized derivatives from the read-only audit originals.
// Originals in docs/source-audit/assets-original are never modified.
import sharp from "sharp";
import { mkdir, copyFile, stat } from "node:fs/promises";
import path from "node:path";

const SRC = "docs/source-audit/assets-original";
const OUT = "public/images";
const APP = "app";

const jobs = [
  // Hero: teacher meditating in a cosmic scene (1375×600)
  { src: "images/2016/05/test.jpg", out: "hero-1375.webp", width: 1375, quality: 72 },
  // Portrait crop centred on the figure for narrow screens
  { src: "images/2016/05/test.jpg", out: "hero-mobile.webp", extract: { left: 455, top: 0, width: 480, height: 600 }, quality: 74 },
  // Bali sunset (992×508)
  { src: "images/revslider/kiddie/bg-home.jpg", out: "bali-sunset-992.webp", width: 992, quality: 74 },
  { src: "images/revslider/kiddie/bg-home.jpg", out: "bali-sunset-600.webp", width: 600, quality: 74 },
  // Consultation panel figure (transparent PNG)
  { src: "images/2016/05/kacunghome.png", out: "konsultasi.webp", quality: 86, alphaQuality: 90 },
  // Products (500×500)
  { src: "images/buku-meditasi.jpg", out: "produk-buku.webp", width: 440, quality: 78 },
  { src: "images/pertiwicd.jpg", out: "produk-cd.webp", width: 440, quality: 78 },
  { src: "images/vcd-meditasi.jpg", out: "produk-vcd.webp", width: 440, quality: 78 },
  // Section imagery (original article images, 800×450)
  ...[
    ["sikap-meditasi", "pilar-meditasi"],
    ["pembagian-cakra", "pilar-cakra"],
    ["kekuatan-kundalini", "pilar-kundalini"],
    ["latihan-putera-matahari", "pilar-penyembuhan"],
    ["energi-ts", "program-meditasi"],
    ["energi-kasih", "program-penyembuhan"],
    ["sinar-antah-karana", "shaktifat"],
    ["meditasi-angkasa", "meditasi-online"],
  ].map(([src, out]) => ({ src: `images/${src}.jpg`, out: `${out}.webp`, width: 800, quality: 74 })),
  // Logo (253×73, transparent)
  { src: "theme/images/logo.png", out: "logo.webp", lossless: true },
];

await mkdir(OUT, { recursive: true });
for (const j of jobs) {
  let img = sharp(path.join(SRC, j.src));
  if (j.extract) img = img.extract(j.extract);
  if (j.width) img = img.resize({ width: j.width, withoutEnlargement: true });
  const opts = j.lossless ? { lossless: true } : { quality: j.quality, alphaQuality: j.alphaQuality ?? 100 };
  const info = await img.webp(opts).toFile(path.join(OUT, j.out));
  console.log(`${j.out.padEnd(26)} ${info.width}×${info.height}  ${(info.size / 1024).toFixed(1)} KB`);
}

// Favicon + touch icon (App Router file conventions)
await copyFile(path.join(SRC, "theme/images/favicon.ico"), path.join(APP, "favicon.ico"));
// 180×180 is the size iOS uses; a palette PNG keeps it small.
await sharp(path.join(SRC, "theme/images/apple-touch-icon.png")).resize(180, 180).png({ palette: true, quality: 85, effort: 10 }).toFile(path.join(APP, "apple-icon.png"));
console.log("favicon.ico, apple-icon.png copied", (await stat(path.join(APP, "apple-icon.png"))).size);
