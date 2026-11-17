import type { Metadata, Viewport } from 'next';
import { Header } from '@/components/Header';
import './globals.css';
import './responsive.css';
import './quiet-design.css';

export const metadata: Metadata = {
  title: { default: "Lauren's Bakery | Software engineer & creative thinker", template: "%s | Lauren's Bakery" },
  description: 'Step inside Lauren’s illustrated engineering portfolio and explore the work behind the pastries.',
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#f8ecd7' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="site-shell"><Header />{children}</div>
  </body></html>;
}
