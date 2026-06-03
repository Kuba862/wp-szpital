// app/api/revalidate/route.js
// Endpoint, który WordPress wywołuje po publikacji wpisu, zeby Next.js
// natychmiast przebudował statyczną stronę (zamiast czekać na interwał 60s)
//
// Wywołanie z WordPressa (hook save_post) uderza w:
//  POST /api/revalidate?secret=TWÓJ_SEKRET&slug=nazwa-wpisu
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Prosta ochrona - bez sekretu kazdy mógłby wymuszać przebudowy
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "nieprawidłowy sekret" },
      { status: 401 },
    );
  }

  // Odświez listę wpisów...
  revalidatePath("/");
  // ...i konkretny wpis, jeśi podano slug
  if (slug) revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}
