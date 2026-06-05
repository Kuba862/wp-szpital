"use client";

import Link from "next/link";

export default function Footer() {
    
    return (
        <>
        <footer className="footer__section">
            <div className="footer__box">
                <div className="box">
                <p>Neonatologia Rzeszów</p>
                <small>blog oddziału</small>
                <div>
                    <p>Dzieliny się tym, co się dzieje w naszym szpitalul - wiedzą, wydarzeniami i historiami pacjentów. Z troską o zdrowie naszej społeczności.</p>
                </div>
                </div>
            </div>
            <div className="footer__box">
                <div className="box">
                <p>kategorie</p>
                <ul>
                    <li>Aktualności</li>
                    <li>Edukacja zdrowotna</li>
                    <li>Historie pacjentów</li>
                    <li>O nas</li>
                </ul>
                </div>
            </div>
            <div className="footer__box">
                <div className="box">
                <p>kontakt</p>
                <div>
                    <p>ul.Szpitalna 1, 35-001 Rzeszów</p>
                    <p>12 345 67 89</p>
                    <p>blog@neonatologia-rzeszow.pl</p>
                </div>
                </div>
            </div>
        </footer>
        <hr />
            <p>© 2026 Neonatologia Rzeszów. Treści mają charakter informacyjny.</p>
            </>
    )
}