// app/blog/[slug]/page.jsx
// Trasa dynamiczna "/blog/dowolny-slug". Nazwa folderu w [nawiasach] = parametr
import { getPostBySlug, getAllSlugs, getFeaturedImage } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";

// Buduje statycznie stronę dla kazdego wpisu juz na etapie `next build`.
export async function generateStaticParams() {
    const slugs = await getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

// Dynamiczny <title> i opis pod SEO - Next.js wstawi to do <head>
export async function generateMetadata({ params }) {
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: "Nie znaleziono" };
    return {
        title: post.title.rendered.replace(/<[^>]+>/g, ""),
        description: post.excerpt.rendered.replace(/<[^>]+>/g, "").slice(0, 160),
    };
}

export default async function PostPage({ params }) {
    const post = await getPostBySlug(params.slug);
    if (!post) notFound; // strona 404

    const image = getFeaturedImage(post);
    const date = new Date(post.date).toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <article className="post">
            <a href="/" className="post__back">← Wszystkie wpisy</a>
            <time className="post__date">{date}</time>
            <h1 className="post__title" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {image && (
                <Image
                    src={image}
                    alt=""
                    width={1200}
                    height={600}
                    className="post__hero"
                    priority
                />
            )}
            {/* Treść z WordPressa to gotowy HTML. Ufamy własnemu CMS-owi */}
            <div className="post__content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
    );
}