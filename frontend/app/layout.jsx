// app/layout.jsx
// Layout opakowuje kazdą stronę.. tu trafiają <html>, fonty, nagłówek, stopka
import Header from "../components/Header";
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
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Header />
                <main className="container">{children}</main>
                <footer className="footer">
                    <p>Headless WordPress + Next.js</p>
                </footer>
            </body>
        </html>
    );
}