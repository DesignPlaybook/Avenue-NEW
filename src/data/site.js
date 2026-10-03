import { Package, Sprout, Building2, Car, Leaf, Cpu, FlaskConical, GraduationCap, HeartPulse, Globe2, Snowflake, Wheat, Fuel, HandHeart } from 'lucide-react'

export const site = {
  name: 'Avenue Group',
  tagline: 'Creating Values Through Trust',
  // TODO: replace placeholder contact details with real ones
  email: 'info@avenuegroup.example',
  phone: '+91 20 6900 0098',
  address: 'No 222 Apex Tower, Opposite Magarpatta Season\'s Mall, Amanora Park Town, Hadapsar, Pune 411028, India',
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Companies', to: '/companies', dropdown: true },
  { label: 'Innovation', to: '/innovation' },
  { label: 'Global Presence', to: '/global-presence' },
  { label: 'Foundation', to: '/foundation' },
  { label: 'Contact', to: '/contact' },
]

export const companies = [
  { slug: 'avenue-packs', name: 'Avenue Packs', sector: 'Packaging', icon: Package,
    blurb: 'Sustainable packaging solutions built for a lower-carbon future.' },
  { slug: 'agrovan', name: 'Agrovan', sector: 'Agriculture', icon: Sprout,
    blurb: 'A 360° agricultural ecosystem, from seeds to farmer collaboration.' },
  { slug: 'avenue-properties', name: 'Avenue Buildcon', sector: 'Real Estate', icon: Building2,
    blurb: 'Thoughtfully designed developments for living and business.' },
  { slug: 'avenue-corporation', name: 'Avenue Corporation', sector: 'Automotive', icon: Car,
    blurb: 'Reliable automotive solutions backed by long-term partnerships.' },
]

export const innovations = [
  { title: 'EcoGauge', icon: Leaf, text: 'A carbon-emission calculator that helps customers measure and cut packaging impact.' },
  { title: 'Agro-Based Solutions', icon: FlaskConical, text: 'Farm-first products and practices that raise yield while protecting the soil.' },
  { title: 'Green Technologies', icon: Cpu, text: 'Cleaner processes and smarter manufacturing across every business.' },
]

export const stats = [
  { value: 36, suffix: '', label: 'Countries served' },
  { value: 10000, suffix: '+', label: 'Customers worldwide' },
  { value: 6000, suffix: '+', label: 'Farmers empowered' },
  { value: 12000, suffix: '', label: 'Acres under contract' },
]

// Full portfolio from the 2025 brochure. Only companies with a slug have detail pages.
export const group = [
  { name: 'Avenue Packs', sector: 'Packaging', icon: Package, slug: 'avenue-packs', img: 'p10', blurb: 'Best-in-class industrial packaging from three plants in Pune, guided by EcoGauge.' },
  { name: 'Agrovan India', sector: 'Agriculture', icon: Sprout, slug: 'agrovan', img: 'p17', blurb: 'Frozen, fresh and canned produce for global markets, grown with 6,000+ farmers.' },
  { name: 'Avenue Corporation', sector: 'Automotive', icon: Car, slug: 'avenue-corporation', img: 'p8', blurb: 'Official Indian distributor of high-performance automotive sensors.' },
  { name: 'La Ruche Food Stuffs', sector: 'Frozen foods, Dubai', icon: Snowflake, img: 'p23', blurb: 'A frozen food distribution chain run end to end across Dubai.' },
  { name: 'Avenue Buildcon', sector: 'Real Estate', icon: Building2, slug: 'avenue-properties', img: 'p32', blurb: 'Land and building developer in Pune, built on quality and sustainability.' },
  { name: 'Agrovan Farm Producing Company', sector: 'Farmer collaboration', icon: Wheat, img: 'p15', blurb: 'Direct collaboration with local growers to lift productivity.' },
  { name: 'Sarvesh Petro Hub', sector: 'Fuel and oil', icon: Fuel, blurb: 'Reliable fuel and oil supply to major industries.' },
  { name: 'Avenue Foundation', sector: 'Social responsibility', icon: HandHeart, blurb: "Meeting children's educational needs and promoting equal opportunity." },
]

export const foundation = [
  { title: 'Education', icon: GraduationCap, text: 'Empowering young minds.' },
  { title: 'Healthcare', icon: HeartPulse, text: 'Improving community well-being.' },
  { title: 'Sustainability', icon: Globe2, text: 'Creating a better future.' },
]
