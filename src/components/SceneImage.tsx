import Image from 'next/image';
export function SceneImage({ scene, alt, priority = false }: { scene: 'storefront' | 'interior'; alt: string; priority?: boolean }) {
  return <Image className="scene-art" src={scene === 'interior' ? '/art/interior-v2.jpg' : '/art/storefront.jpg'} alt={alt} fill sizes={scene === 'interior' ? '(max-width: 600px) 188vw, (max-width: 1200px) 100vw, 1200px' : '(max-width: 1200px) 100vw, 1200px'} preload={priority} quality={90} />;
}
