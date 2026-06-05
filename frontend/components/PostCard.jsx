import Image from "next/image";
import { getFeaturedImage } from "@/lib/wordpress";
import Link from "next/link";

export default function PostCard({ post }) {
    const image = getFeaturedImage(post);
    const date = new Date(post.date).toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <article className="card">
            {image && (
                <Link href={`/blog/${post.slug}`} className="card__media">
                    <Image
                        src={image}
                        alt=""
                        width={600}
                        height={340}
                        className="card__img"
                    />
                </Link>
            )}
            <div className="card__body">
                <time className="card__date">{date}</time>
                <h2 className="card__title">
                    <Link href={`/blog/${post.slug}`}>
                        <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </Link>
                </h2>
                <div
                    className="card__excerpt"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                />
            </div>
        </article>
    )
}