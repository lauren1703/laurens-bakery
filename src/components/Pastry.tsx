import Image from 'next/image';
import { useId } from 'react';
export function Pastry({ kind = 'croissant' }: { kind?: 'croissant' | 'roll' | 'tart' }) {
  const id = useId().replace(/:/g, '');
  if (kind === 'croissant') return <Image className="pastry-art croissant" src="/art/croissant.webp" width={600} height={400} alt="Golden watercolor croissant" sizes="(max-width: 600px) 130px, 220px" quality={90} />;
  return <svg className={`pastry-art ${kind}`} viewBox="0 0 220 140" role="img" aria-label={kind === 'roll' ? 'Cinnamon roll' : 'Apple tart'}>
    <defs><linearGradient id={`${id}-gold`} x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#f9d395"/><stop offset=".5" stopColor="#dda25c"/><stop offset="1" stopColor="#b8773e"/></linearGradient><filter id={`${id}-paper`}><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" seed="12" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/></filter></defs>
    <g filter={`url(#${id}-paper)`} stroke="#86562f" strokeWidth="1.8" strokeLinejoin="round">
      {kind === 'roll' ? <><ellipse cx="111" cy="103" rx="77" ry="24" fill="#c88a4c"/><ellipse cx="110" cy="80" rx="77" ry="36" fill={`url(#${id}-gold)`}/><path d="M167 88C151 108 65 104 57 80C46 51 151 43 160 72C169 99 78 99 74 79C72 61 138 60 141 76C144 89 94 92 92 78C90 71 118 69 120 77" fill="none" stroke="#98603c" strokeWidth="8"/><path d="M55 66Q106 37 159 64M66 93Q109 114 157 91" fill="none" stroke="#fff1d5" strokeWidth="8" strokeLinecap="round"/></> : <><path d="M31 83L44 116Q108 140 178 115L191 83Z" fill="#cc8c4c"/><ellipse cx="111" cy="81" rx="81" ry="35" fill={`url(#${id}-gold)`}/><path d="M46 79Q111 27 178 80Q123 115 46 79" fill="#efc377"/>{[62,83,104,125,146].map((x,i)=><path key={x} d={`M${x} 63Q${x+30} 75 ${x+13} 99`} fill="none" stroke={i%2?'#c98b50':'#f9dfa5'} strokeWidth="9"/>)}</>}
    </g>
  </svg>;
}
