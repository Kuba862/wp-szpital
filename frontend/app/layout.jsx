// app/layout.jsx
// Layout opakowuje kazdą stronę.. tu trafiają <html>, fonty, nagłówek, stopka
import Link from "next/link";
import "./globals.scss";

export const metadata = {
    title: "Neonatologia Rzeszów",
    description: "Headless WordPress + Next.js"
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,900&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <header className="site-header">
                    <div className="logo_container"><Link href="/">Logo</Link></div>
                    <nav className="top_nav" >
                        <ul>
                            <Link href="/o-nas">O Nas</Link>
                            <Link href="/">Aktualności</Link>
                            <Link href="/">Edukacja zdrowotna</Link>
                            <Link href="/">Historie pacjentów</Link>
                        </ul>
                    </nav>
                </header>
                <main className="container">{children}</main>
                <footer className="footer">
                    <p>Headless WordPress + Next.js</p>
                </footer>
            </body>
        </html>
    );
}