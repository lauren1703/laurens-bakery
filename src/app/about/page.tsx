import type { Metadata } from 'next';
import { AboutKitchen } from '@/components/AboutKitchen';
export const metadata: Metadata = { title: 'Meet the baker', description: 'Meet Lauren Ah-Hot: born in France, raised in Singapore, Cornell computer science student, and incoming Rippling engineer with a someday café dream.' };
export default function AboutPage() { return <AboutKitchen/>; }
