"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="site-header">
            <div className="logo_container"><Link href="/">Logo</Link></div>
            <nav className="top_nav" >
                <ul>
                    <li>
                        <Link href="/o-nas" className={pathname === "/o-nas" ? "active" : ""} >O Nas</Link>
                    </li>
                    <li>
                        <Link href="/aktualnosci" className={pathname === "/aktualnosci" ? "active" : ""}>Aktualności</Link>
                    </li>
                    <li>
                        <Link href="/edukacja-zdrowotna" className={pathname === "/edukacja-zdrowotna" ? "active" : ""}>Edukacja zdrowotna</Link>
                    </li>
                    <li>
                        <Link href="/historie-pacjentow" className={pathname === "/historie-pacjentow" ? "active" : ""}>Historie pacjentów</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}