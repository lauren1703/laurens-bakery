import Image from 'next/image';
export function SceneImage({ scene, alt, priority = false }: { scene: 'storefront' | 'interior'; alt: string; priority?: boolean }) {
  return <Image className="scene-art" src={scene === 'interior' ? '/art/interior-quiet.webp' : '/art/storefront-quiet.webp'} alt={alt} fill sizes={scene === 'interior' ? '(max-width: 600px) 188vw, (max-width: 1200px) 100vw, 1200px' : '(max-width: 1200px) 100vw, 1200px'} preload={priority} quality={90} />;
}
