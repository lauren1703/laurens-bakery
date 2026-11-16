'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export function Header() {
  const path = usePathname();
  return <header className="site-header">
    <Link className="wordmark" href="/" aria-label="Lauren's Bakery, storefront">Lauren's Bakery <span aria-hidden="true">❧</span></Link>
    <nav aria-label="Main navigation">
      <Link href="/" aria-current={path === '/' ? 'page' : undefined}>Storefront</Link>
      <Link href="/bakery" aria-current={path === '/bakery' ? 'page' : undefined}>The bakery</Link>
      <Link href="/bakery#counter" aria-current={path.startsWith('/projects') ? 'page' : undefined}>Projects</Link>
      <Link href="/about" aria-current={path === '/about' ? 'page' : undefined}>About</Link>
      <Link href="/experience" aria-current={path === '/experience' ? 'page' : undefined}>Experience</Link>
    </nav>
  </header>;
}
