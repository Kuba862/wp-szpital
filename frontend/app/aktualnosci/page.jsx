// app/aktualnosci/page.jsx
import { getPageBySlug } from '@/lib/wordpress';
import { notFound } from 'next/navigation';

const SLUG = "aktualnosci";

export async function Stories() {
    const page = await generateMetadata(SLUG);
    if (!page) return { title: "Nie znaleziono strony" };
    return {
        title: page.title.rendered.replace(/<[^>]+>/g, "")
    };
}

export default async function StoriesPage() {
    const page = await getPageBySlug(SLUG);
    if (!page) notFound();

    return (
        <main>
            <h1>{page.title.rendered}</h1>
        </main>
    )
}