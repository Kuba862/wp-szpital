/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // next/image odrzuca obrazki z domen spoza tej listy.
    // Dodaj tu domenę WordPressa (lokalną i produkcyjną).
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "8080" },
      // { protocol: "https", hostname: "cms.twojadomena.pl" },
    ],
  },
};

module.exports = nextConfig;