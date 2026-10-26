// Verified content from the Phase 1 audit (docs/source-audit), translated into English.
// Wording is condensed from the original Indonesian pages; meaning is unchanged.

export const WHATSAPP_NUMBER = "6285792640996";

export function waLink(text) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const contact = {
  address: ["Jl. Antasura, Gg. Dewi Sita I No. 4", "Denpasar - Bali"],
  phoneDisplay: "+62 857 9264 0996",
  phoneHref: "tel:+6285792640996",
  email: "wayaneka@tejasurya.com",
  facebook: "https://facebook.com/meditasitejasurya",
  youtube: "https://www.youtube.com/channel/UCuaRy9hyNP9Db5dBfo1Tx-A/videos",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "programs", label: "Programs" },
  { id: "shaktifat", label: "Shaktifat" },
  { id: "online", label: "Online Meditation" },
  { id: "products", label: "Products" },
  { id: "contact", label: "Contact" },
];

export const pillars = [
  {
    title: "Meditation",
    image: "/images/pilar-meditasi.webp",
    alt: "A person meditating facing the sea at sunrise",
    text: "Uniting oneself with the universe to know consciousness and one's true self.",
  },
  {
    title: "Chakra",
    image: "/images/pilar-cakra.webp",
    alt: "Illustration of the seven main chakras on a meditating body",
    text: "Wheel-shaped energy centres that channel energy throughout the body.",
  },
  {
    title: "Kundalini",
    image: "/images/pilar-kundalini.webp",
    alt: "Illustration of kundalini energy glowing along the spine",
    text: "A great energy hidden within every person's body.",
  },
  {
    title: "Healing",
    image: "/images/pilar-penyembuhan.webp",
    alt: "Bright sunlight over an open field",
    text: "Bright white light (the sun) that can be used for healing.",
  },
];

export const aboutPoints = [
  "Open to all religions and beliefs",
  "No fasting or vegetarian requirements",
  "Only a firm intention and commitment",
];

export const programs = [
  {
    id: "meditation",
    title: "Meditation Program",
    image: "/images/program-meditasi.webp",
    alt: "Illustration of a glowing figure within a web of universal energy",
    intro: "Four stages towards realising one's true self.",
    stages: ["Self-Cleansing Meditation", "Chakra Activation Meditation", "Hredaya Meditation", "AKU (Self) Meditation"],
    wa: "Hello TejaSurya, I would like to ask about the Meditation Program.",
  },
  {
    id: "healing",
    title: "Self-Healing Program",
    image: "/images/program-penyembuhan.webp",
    alt: "Illustration of a meditating figure in pink light",
    intro: "Healing with prana energy for yourself and those close to you.",
    stages: ["Healing with White Light", "Healing with the Light Spectrum", "Healing with Solar Prana"],
    wa: "Hello TejaSurya, I would like to ask about the Self-Healing Program.",
  },
];

export const shaktifatBenefits = [
  "Feel the flow of divine energy sooner",
  "Reach dhyana more quickly in meditation",
  "Opens the Sushumna, Ida and Pingala nadis",
  "Activates chakras used in healing techniques",
  "Connect with God more quickly",
];

export const kundaliniRequirements = [
  "Completion of the TS Meditation program",
  "Higher awareness and knowledge",
  "Passing the guide's readiness assessment",
];

export const onlineFeatures = [
  { icon: "heart", title: "IDR 100,000 / month", text: "Monthly participant donation" },
  { icon: "spark", title: "No Shaktifat needed", text: "No special requirements" },
  { icon: "chat", title: "Messenger / group chat", text: "Or another conferencing app" },
  { icon: "users", title: "Open to everyone", text: "All ages, religions and beliefs" },
];

export const products = [
  {
    name: "TejaSurya Book",
    meta: "Bali Post · 176 pages",
    price: "IDR 80,000",
    image: "/images/produk-buku.webp",
    alt: "Cover of the TejaSurya book, Meditasi & Penyembuhan",
    text: "Meditation techniques, chakra activation and healing.",
  },
  {
    name: "Pertiwi Akasa CD",
    meta: "Audio CD",
    price: "IDR 60,000",
    image: "/images/produk-cd.webp",
    alt: "Cover of the TejaSurya Pertiwi Akasa meditation CD",
    text: "Guided Pertiwi Akasa I and Hredaya I meditations.",
  },
  {
    name: "Surya Sewana VCD",
    meta: "VCD",
    price: "IDR 60,000",
    image: "/images/produk-vcd.webp",
    alt: "Cover of the TejaSurya Surya Sewana guided meditation VCD",
    text: "Guided meditation facing the sun.",
  },
];
