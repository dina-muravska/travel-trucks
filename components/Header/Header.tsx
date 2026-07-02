'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import css from './Header.module.css';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContent}`}>
        <Link href="/" className={css.logo}>
          <Image src="/TravelTrucks.svg" alt="TravelTrucks Logo" width={136} height={15} priority />
        </Link>

        <nav className={css.nav}>
          <Link
            href="/"
            className={pathname === '/' ? `${css.navLink} ${css.navLinkActive}` : css.navLink}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={
              pathname?.startsWith('/catalog') ? `${css.navLink} ${css.navLinkActive}` : css.navLink
            }
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
