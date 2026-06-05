// app/o-nas/page.jsx
import { getPageBySlug } from "@/lib/wordpress";
import { notFound } from "next/navigation";

const SLUG = "o-nas";

export async function generateMetadata() {
    const page = await getPageBySlug(SLUG);
    if (!page) return { title: "Nie znaleziono strony" };
    return {
        title: page.title.rendered.replace(/<[^>]+>/g, "")
    };
}

export default async function AboutPage() {
    const page = await getPageBySlug(SLUG);
    if (!page) notFound();
    console.log(page)

    const { title, content } = page;

    return (
        <article>
            <h1>{title.rendered}</h1>
            <div className="about__us-content" dangerouslySetInnerHTML={{ __html: content.rendered }} />
        </article>
    )
}