import type { Metadata } from 'next';
import { Bakery } from '@/components/Bakery';
export const metadata: Metadata = { title: 'Inside the bakery', description: 'Pick a pastry and discover the project behind it.' };
export default function BakeryPage() { return <Bakery />; }
