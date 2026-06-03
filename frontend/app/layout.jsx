// app/layout.jsx
// Layout opakowuje kazdą stronę.. tu trafiają <html>, fonty, nagłówek, stopka
import "./globals.css";

export const metadata = {
    title: "Neonatologia Rzeszów",
    description: "Headless WordPress + Next.js"
};

export default function RootLayout({ children }) {
    return (
        <html lang="pl">
            <body>
                <header className="site-header">
                    <a href="/" className="site-header_logo">Logo</a>
                </header>
                <main className="container">{children}</main>
                <footer className="footer">
                    <p>Headless WordPress + Next.js</p>
                </footer>
            </body>
        </html>
    );
}