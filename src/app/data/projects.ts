export type Project = {
  slug: string;
  name: string;
  tagline: string;
  year: string;
  status: "active" | "archived" | "development";
  category: string;
  platform: string;
  color: string;
  accent: string;
  textLight: boolean;
  coverImage?: string;
  description: string;
  longDescription: string;
  features: { title: string; body: string }[];
  tech: { label: string; value: string }[];
  appStoreUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "bose-sound-controller",
    coverImage: "/images/hero-phone.jpg",
    name: "Bose Sound Controller",
    tagline: "Complete iOS controller for Bose audio devices",
    year: "2025",
    status: "active",
    category: "Companion App",
    platform: "iOS",
    color: "#0a0a0a",
    accent: "#B5920A",
    textLight: true,
    description:
      "A native iOS companion app for compatible Bose audio devices — music playback, device discovery, sound settings, and full AirPlay support in one focused interface.",
    longDescription:
      "Bose Sound Controller is our flagship product and the most technically sophisticated app we have shipped. It operates as a companion app for the Bose ecosystem, giving iPhone and iPad users a single interface for device discovery, audio playback, sound personalization, and device configuration. The app connects to compatible Bose speakers and headphones over local Wi-Fi using Bose's proprietary protocol stack and exposes controls through a clean, native iOS interface.",
    features: [
      { title: "Device Discovery", body: "Automatic detection of compatible Bose devices on the local Wi-Fi network — no manual pairing required." },
      { title: "Music Playback", body: "Full playback controls: play, pause, skip, scrub, and volume. Album art and track metadata always visible." },
      { title: "Sound Settings", body: "Per-device audio personalization — equalizer presets, bass adjustment, and output preferences." },
      { title: "AirPlay Support", body: "Stream audio from any AirPlay-compatible source to your Bose device via the app." },
      { title: "Device Configuration", body: "Manage connected device settings, connection status, and firmware information." },
      { title: "Native iOS Design", body: "Built with UIKit and SwiftUI, following Apple Human Interface Guidelines for a fast and native experience." },
    ],
    tech: [
      { label: "Platform", value: "iOS 15.0+" },
      { label: "Compatible", value: "iPhone, iPad" },
      { label: "Price", value: "Free" },
      { label: "Category", value: "Music" },
      { label: "Developer", value: "PAR-NEPAR d.o.o." },
      { label: "App Store ID", value: "6803135475" },
    ],
    appStoreUrl: "https://apps.apple.com/app/id6803135475",
  },
  {
    slug: "splitly",
    coverImage: "/images/cover-splitly.jpg",
    name: "Splitly",
    tagline: "Split expenses with your group. Zero friction.",
    year: "2023",
    status: "active",
    category: "Finance Utility",
    platform: "iOS",
    color: "#0B2A1A",
    accent: "#2ECC71",
    textLight: true,
    description:
      "A lightweight iOS app for splitting group expenses — trips, dinners, shared costs. No accounts, no cloud sync, no complexity.",
    longDescription:
      "Splitly grew out of a recurring problem our team faced on group trips — every existing expense-splitting app was either too complex, required sign-up, or pushed subscriptions. We built Splitly to be the opposite: local-first, account-free, and usable in under 30 seconds. You create a group, add people, enter what was paid and by whom, and Splitly calculates the minimum number of transactions to settle all debts. Data stays on device. No server, no sync, no tracking.",
    features: [
      { title: "Local-first", body: "All data stored on device. No accounts, no cloud, no tracking — your finances stay private." },
      { title: "Instant groups", body: "Create a group and start adding expenses in seconds. Name participants, no sign-up needed." },
      { title: "Smart settlement", body: "Debt minimization algorithm calculates the fewest transactions needed to settle the group." },
      { title: "Expense history", body: "Full log of all added expenses per group with payer and split details." },
      { title: "Multiple currencies", body: "Per-expense currency support for international trips — automatic conversion display." },
      { title: "iCloud Backup", body: "Optional iCloud backup keeps your data safe across device restores without a Company account." },
    ],
    tech: [
      { label: "Platform", value: "iOS 16.0+" },
      { label: "Compatible", value: "iPhone" },
      { label: "Price", value: "Free" },
      { label: "Category", value: "Finance" },
      { label: "Developer", value: "PAR-NEPAR d.o.o." },
      { label: "Released", value: "2023" },
    ],
  },
  {
    slug: "waymark",
    coverImage: "/images/cover-waymark.jpg",
    name: "Waymark",
    tagline: "Log your travels. Keep the memory.",
    year: "2022",
    status: "active",
    category: "Travel & Navigation",
    platform: "iOS",
    color: "#0D1B3E",
    accent: "#4A90D9",
    textLight: true,
    description:
      "A travel journaling app for iPhone — log routes, add notes and photos, and build a personal map of everywhere you've been.",
    longDescription:
      "Waymark started as an internal side project during a team trip to the Dalmatian coast. We wanted a simple way to log a walking route, pin a restaurant we liked, and add a quick note — without the complexity of full travel apps or the data-harvesting of mapping platforms. The result is a minimal travel log that stays private and works offline. Every trip becomes a visual map you can revisit, share as a PDF, or export as a GPX file.",
    features: [
      { title: "Route logging", body: "Tap to start tracking — Waymark records your route using on-device GPS with battery-efficient background tracking." },
      { title: "Map pins", body: "Drop pins anywhere with a note, photo, and category tag. Restaurants, viewpoints, hotels, and more." },
      { title: "Trip journal", body: "Each trip gets its own page: route map, distance, duration, elevation, and all your pinned notes." },
      { title: "Offline maps", body: "Download map regions before you travel — Waymark works without cellular or Wi-Fi." },
      { title: "GPX export", body: "Export any route as a .gpx file for use in other mapping and fitness applications." },
      { title: "Privacy-first", body: "No account, no backend, no location data sent to servers. Your travel history stays on your device." },
    ],
    tech: [
      { label: "Platform", value: "iOS 15.0+" },
      { label: "Compatible", value: "iPhone, iPad" },
      { label: "Price", value: "Free + Pro" },
      { label: "Category", value: "Travel" },
      { label: "Developer", value: "PAR-NEPAR d.o.o." },
      { label: "Released", value: "2022" },
    ],
  },
  {
    slug: "focusd",
    coverImage: "/images/cover-focusd.jpg",
    name: "Focusd",
    tagline: "Do one thing. Then the next.",
    year: "2024",
    status: "active",
    category: "Productivity",
    platform: "iOS",
    color: "#1C0A00",
    accent: "#E07B2A",
    textLight: true,
    description:
      "A minimal focus timer for iPhone. One session at a time, no configuration overhead, deep work mode built in.",
    longDescription:
      "Focusd is our response to productivity apps that have become productivity problems themselves. The concept is deliberately narrow: set a focus duration, start the timer, work. When it ends, log what you did. Over time, the app shows you a simple history of completed sessions and your consistency streak. No projects, no tags, no complexity — just focused time, logged.",
    features: [
      { title: "Single-task timer", body: "One timer, one task. Set a duration and go. No project setup or configuration required." },
      { title: "Deep work mode", body: "Locks the screen to minimize notifications and distractions during an active focus session." },
      { title: "Session log", body: "After each session, add a one-line note about what you completed. Builds into a searchable history." },
      { title: "Streak tracking", body: "Daily consistency streak — how many days in a row you've completed at least one focus session." },
      { title: "Weekly heatmap", body: "Visual calendar heatmap showing your focus density across the week and month." },
      { title: "Minimal design", body: "Zero clutter. The timer fills the screen. Everything else steps back until you need it." },
    ],
    tech: [
      { label: "Platform", value: "iOS 16.0+" },
      { label: "Compatible", value: "iPhone" },
      { label: "Price", value: "Free" },
      { label: "Category", value: "Productivity" },
      { label: "Developer", value: "PAR-NEPAR d.o.o." },
      { label: "Released", value: "2024" },
    ],
  },
];
