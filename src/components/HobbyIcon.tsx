import type { InterestId } from '@/content/about';
export function HobbyIcon({ id }: { id: InterestId }) {
  return <svg viewBox="0 0 100 90" className="hobby-icon" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    {id === 'tennis' && <><ellipse cx="45" cy="31" rx="20" ry="26" transform="rotate(25 45 31)" fill="#e2e3b4"/><path d="M31 48L18 76L25 80L40 53M34 14L60 37M29 22L56 46M27 32L49 53M44 6L26 43M53 9L32 53M61 15L41 54"/><circle cx="77" cy="66" r="12" fill="#dfd899"/><path d="M69 57Q77 65 69 75M84 58Q76 65 85 74"/></>}
    {id === 'snowboarding' && <><path d="M5 62L31 23L45 42L63 14L94 62Z" fill="#c4d5d6"/><path d="M23 35L30 40L35 34M53 30L63 37L72 29"/><path d="M20 76C9 69 16 60 29 63L76 70C90 73 88 82 76 83Z" fill="#d2a483"/><path d="M40 66L39 77M61 70L60 79"/></>}
    {id === 'vlogging' && <><rect x="13" y="27" width="61" height="43" rx="7" fill="#d7c5a4"/><circle cx="44" cy="48" r="15" fill="#bbcdc5"/><circle cx="44" cy="48" r="9"/><path d="M73 36L91 28V68L73 60M25 27L31 17H51L58 27M20 77Q48 90 75 77"/><circle cx="23" cy="36" r="2" fill="currentColor"/></>}
    {id === 'cooking' && <><path d="M22 37H79L75 72Q50 85 26 72Z" fill="#c1cdb5"/><path d="M20 36Q49 21 80 36M45 26V22H56V27M22 45H10V57H24M78 45H91V57H77M33 10Q25 17 33 22M66 8Q58 15 66 21"/><path d="M19 36H82" strokeWidth="4"/></>}
    {id === 'cafes' && <><path d="M20 38H69L65 65Q43 79 25 65Z" fill="#f0e4c9"/><path d="M70 42Q94 38 88 56Q84 66 67 62M11 78Q45 90 84 78M30 26Q22 17 31 9M49 27Q41 18 51 9"/><path d="M21 37Q45 45 69 37M27 48Q45 55 63 48"/><path d="M18 79H82"/></>}
    {id === 'nails' && <><rect x="31" y="39" width="39" height="40" rx="8" fill="#d5acb4"/><path d="M37 38V15H63V38M43 17V35M57 17V35M42 50H58M47 50V67M80 18V30M74 24H86M17 48V60M11 54H23"/><path d="M37 15Q50 9 63 15M36 68Q40 74 45 73"/></>}
  </svg>;
}
