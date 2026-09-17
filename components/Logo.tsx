import Image from 'next/image';
import Link from 'next/link';
export function Logo({priority=false}:{priority?:boolean}){return <Link href="/" className="brand" aria-label="Karat Infinity home"><span className="brand-crop"><Image src="/karat-infinity-logo.png" alt="" width={546} height={561} priority={priority}/></span><span>Karat<span className="brand-light">Infinity</span></span></Link>;}
