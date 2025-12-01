import { getPost } from "@/app/[locale]/api/blog";
import "@/styles/blog.scss"
import Link from "next/link";

export async function generateMetadata({ params: { slug } }) {
    const post = await getPost(slug);
    return {
      title: post.seo_title,
      description: post.seo_description,
      openGraph: {
        title: post.seo_title,
        description: post.seo_description,
        images: post.image,
      },
    };
  }

export default async function PostPage({ params: { slug } }) {
  const post = await getPost(slug);
  return (
    <>
      <section className="post-inner">
        <div className="_container">
          <div className="post-inner__body">
            <div className="header">
                <img src={post.image}/>
                <h1>{post.title}</h1>
            </div>
            <article
                dangerouslySetInnerHTML={{ __html: post.body }}
                className="w-full font-gentium prose prose-slate max-w-none"
                />
            <Link href="/blog" className="black-button">More articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
