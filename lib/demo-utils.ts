// Demo link utilities for creating and validating expiring demo links

export interface DemoLink {
  slug: string;
  createdAt: Date;
  expiresAt: Date;
  clientName?: string;
  isActive: boolean;
}

// Generate a random slug for demo links
export function generateDemoSlug(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Create a demo link with 7-day expiration
export function createDemoLink(clientName?: string): DemoLink {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days

  return {
    slug: generateDemoSlug(),
    createdAt: now,
    expiresAt,
    clientName,
    isActive: true
  };
}

// Check if a demo link is valid and not expired
export function isDemoLinkValid(demo: DemoLink): boolean {
  if (!demo.isActive) return false;
  return new Date() < demo.expiresAt;
}

// Format expiration date for display
export function formatExpirationDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Simple in-memory storage for demo links (in production, use a database)
// This is just for demonstration - you'd want to use a real database
const demoLinks = new Map<string, DemoLink>();

export function saveDemoLink(demo: DemoLink): void {
  demoLinks.set(demo.slug, demo);
}

export function getDemoLink(slug: string): DemoLink | null {
  return demoLinks.get(slug) || null;
}

export function getAllDemoLinks(): DemoLink[] {
  return Array.from(demoLinks.values());
}

export function deactivateDemoLink(slug: string): boolean {
  const demo = demoLinks.get(slug);
  if (demo) {
    demo.isActive = false;
    demoLinks.set(slug, demo);
    return true;
  }
  return false;
}

// Initialize with sample demo links for all businesses
export function initializeSampleDemos(): void {
  const businesses = [
    { id: 'atlantic', name: 'Atlantic Masonry & Tile' },
    { id: 'breathe', name: 'Breathe Yoga' },
    { id: 'bigfoot', name: 'Big Foot Moving' },
    { id: 'classic', name: 'Classic Kitchen & Bath' },
    { id: 'electrical', name: 'Electrical Network' },
    { id: 'finest', name: 'Finest Builders Inc' },
    { id: 'finnegan', name: 'Finnegan Development' },
    { id: 'kendall', name: 'Kendall Square Chiropractic' },
    { id: 'lexington', name: 'Lexington Family Chiropractic' },
    { id: 'patrick', name: 'Patrick Hourican Plastering' }
  ];

  businesses.forEach(business => {
    const demo = createDemoLink(business.name);
    demo.slug = business.id; // Use business ID as slug for easy access
    saveDemoLink(demo);
  });

  // Generic demo
  const genericDemo = createDemoLink();
  genericDemo.slug = "sample1";
  saveDemoLink(genericDemo);
}

// Auto-initialize sample demos
initializeSampleDemos();