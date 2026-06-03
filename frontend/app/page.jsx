// app/page.jsx
// Strong główna (trasa "/"). to server component: funkcja jest async i pobiera dane przed renderem - bez useState/useEffect.
import { getPosts } from "@/lib/wordpress";
import PostCard from "@/components/PostCard";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="page-title">Najnowsze wpisy</h1>
      {posts.lenght === 0 ? (
        <p className="empty">
          Brak Wpisów. Dodaj pierwszy w panelu WordPress (
          <code>localhost:8080/wp-admin</code>).
        </p>
      ) : (
        <div className="post-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
