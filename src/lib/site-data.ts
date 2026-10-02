import hero from "@/assets/hero.jpg";
import svcInterior from "@/assets/svc-interior.jpg";
import svcArch from "@/assets/svc-architecture.jpg";
import svcFurniture from "@/assets/svc-furniture.jpg";
import svcLighting from "@/assets/svc-lighting.jpg";
import workBedroom from "@/assets/work-bedroom.jpg";
import workKitchen from "@/assets/work-kitchen.jpg";
import workLobby from "@/assets/work-lobby.jpg";

export const company = {
  name: "Designer Elite",
  city: "Karachi",
  country: "Pakistan",
  founder: "Syed Sheeraz Ali",
  education: [
    "Master's in Project Management (University of Sunderland)",
    "Graduate (N.E.D University)",
  ],
  experience: "10+ years",
  phone: "0332 0211102",
  whatsapp: "https://wa.me/923320211102",
  email: "designerelite_interiors@outlook.com",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
};

export const images = { hero, svcInterior, svcArch, svcFurniture, svcLighting, workBedroom, workKitchen, workLobby };

export const services = [
  {
    slug: "interior-design",
    title: "Interior Design",
    short: "Residential, commercial and corporate interiors shaped around how you live and work.",
    image: svcInterior,
    body: "From private residences to corporate floors, we plan layouts, materials and finishes as one coherent story. Every space is drawn, sampled and detailed in-house, so what you approve is exactly what gets built.",
    points: ["Residential homes & apartments", "Commercial & retail spaces", "Corporate offices", "Material & finish curation"],
  },
  {
    slug: "architecture",
    title: "Architecture & Structural Planning",
    short: "Considered architecture and sound structural planning from first sketch to site.",
    image: svcArch,
    body: "We design buildings that are calm, efficient and built to last. Our engineering background means structural logic is part of the design from day one, not an afterthought.",
    points: ["Concept & massing studies", "Structural planning", "Approvals drawings", "Site supervision"],
  },
  {
    slug: "bespoke-furniture",
    title: "Bespoke Luxury Furniture",
    short: "Custom furniture made to measure in our own production workshop.",
    image: svcFurniture,
    body: "Sofas, dining tables, wardrobes and statement pieces — designed for your room and produced by our craftsmen in solid woods, stone, brass and fine upholstery.",
    points: ["Made-to-measure pieces", "Solid wood & veneer work", "Upholstery & leather", "Metal & stone details"],
  },
  {
    slug: "lighting-design",
    title: "Lighting Design & Planning",
    short: "Layered lighting plans that make every room feel right, day and night.",
    image: svcLighting,
    body: "Light changes everything. We plan ambient, task and accent lighting together with fixtures and controls, so each space has the mood you want at every hour.",
    points: ["Lighting layouts", "Fixture selection", "Scene & dimming control", "Feature & cove lighting"],
  },
];

export const projects = [
  { slug: "dha-residence", title: "DHA Phase 8 Residence", category: "Residential", image: workBedroom, year: "2025", area: "6,500 sq ft", body: "A family home reworked around warm walnut walls, linen textures and soft indirect light." },
  { slug: "clifton-kitchen", title: "Clifton Penthouse Kitchen", category: "Residential", image: workKitchen, year: "2024", area: "1,200 sq ft", body: "A marble-clad island anchors an open kitchen built for entertaining." },
  { slug: "boutique-lobby", title: "Boutique Hotel Lobby", category: "Commercial", image: workLobby, year: "2024", area: "3,800 sq ft", body: "Travertine, brass and wood create a welcoming, quietly grand arrival." },
  { slug: "corporate-hq", title: "Corporate Headquarters", category: "Corporate", image: svcInterior, year: "2023", area: "12,000 sq ft", body: "Oak-lined boardrooms and focused workspaces for a growing firm." },
  { slug: "sunset-villa", title: "Sunset Villa", category: "Architecture", image: svcArch, year: "2023", area: "8,000 sq ft", body: "A two-storey villa opening fully to the view and the evening light." },
  { slug: "dining-room", title: "The Dark Dining Room", category: "Lighting", image: svcLighting, year: "2025", area: "900 sq ft", body: "Sculptural brass pendants turn dinner into an occasion." },
];

export const posts = [
  { slug: "choosing-natural-materials", title: "Choosing natural materials that age beautifully", date: "Sep 12, 2026", image: workKitchen, excerpt: "Stone, wood and linen get better with time. Here's how we pick them." },
  { slug: "layered-lighting", title: "Why every room needs three layers of light", date: "Aug 28, 2026", image: svcLighting, excerpt: "Ambient, task and accent — the simple rule behind rooms that feel right." },
  { slug: "bespoke-vs-ready-made", title: "Bespoke vs. ready-made furniture: what's worth it?", date: "Aug 03, 2026", image: svcFurniture, excerpt: "When custom pieces pay off, and when they don't." },
];

export const testimonials = [
  { name: "Ayesha Khan", date: "July 2026", initials: "AK", text: "Designer Elite turned our house into a home we never want to leave. Every detail was thought through and the furniture is simply stunning." },
  { name: "Omar Siddiqui", date: "May 2026", initials: "OS", text: "Our new office feels calm and professional. The team managed everything on time and the lighting plan made a huge difference." },
  { name: "Fatima Raza", date: "March 2026", initials: "FR", text: "Sheeraz and his team listened carefully and delivered beyond what we imagined. Highly recommended for anyone who cares about quality." },
];

export const awards = [
  { title: "Best Residential Interior", city: "Karachi", date: "2025" },
  { title: "Excellence in Bespoke Furniture", city: "Lahore", date: "2024" },
  { title: "Commercial Interior of the Year", city: "Karachi", date: "2023" },
  { title: "Lighting Design Distinction", city: "Islamabad", date: "2022" },
  { title: "Emerging Design Studio", city: "Karachi", date: "2020" },
];

export const process = [
  { title: "Consultation", text: "We meet, listen and understand your space, budget and the way you live.", image: hero },
  { title: "Planning", text: "Layouts, structure and timelines are planned in detail before anything begins.", image: svcArch },
  { title: "Design", text: "Materials, furniture and lighting come together in drawings and 3D views.", image: svcFurniture },
  { title: "Execution", text: "Our team builds, produces and installs — and hands over a finished space.", image: workLobby },
];
