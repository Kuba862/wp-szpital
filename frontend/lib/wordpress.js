// lib/wordpress.js
// Jedyne miejsce, które wie o WordPressie. Reszta aplikacji woła te funkcje
// i nie zna szczegółów REST API — dzięki temu endpoint jest wymienny przez .env.

const API_URL = process.env.WORDPRESS_API_URL;

if (!API_URL) {
  throw new Error(
    "Brak WORDPRESS_API_URL. Skopiuj .env.local.example do .env.local."
  );
}

// Wspólny fetch z obsługą ISR i błędów.
// revalidate: 60 => strona przebuduje się w tle co najwyżej raz na 60 s.
async function wpFetch(path, { revalidate = 60 } = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    next: { revalidate },
  });
  if (!res.ok) {
    throw new Error(`WordPress API ${res.status}: ${path}`);
  }
  return res;
}

// Lista wpisów na stronę główną.
export async function getPosts(perPage = 10) {
  const res = await wpFetch(`/posts?_embed&per_page=${perPage}`);
  return res.json();
}

// Pojedynczy wpis po slugu (?slug= zwraca tablicę, bierzemy pierwszy).
export async function getPostBySlug(slug) {
  const res = await wpFetch(`/posts?slug=${slug}&_embed`);
  const posts = await res.json();
  return posts[0] ?? null;
}

// Wszystkie slugi — potrzebne do generateStaticParams (budowa statyczna).
export async function getAllSlugs() {
  const res = await wpFetch(`/posts?per_page=100&_fields=slug`);
  const posts = await res.json();
  return posts.map((p) => p.slug);
}

// Pomocnik: wyciąga URL obrazka wyróżniającego z osadzonych danych (_embed).
export function getFeaturedImage(post) {
  const media = post?._embedded?.["wp:featuredmedia"]?.[0];
  return media?.source_url ?? null;
}
