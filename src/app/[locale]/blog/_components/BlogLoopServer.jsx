import React from "react";
import Link from "next/link";
import { getPosts } from "@/app/[locale]/api/blog";
import PostCard from "./PostCard";

const BlogLoopServer = async () => {
  const posts = await getPosts();

  return (
    <section className="blog-loop">
      <div className="_container">
        <div className="blog-loop__body">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              image={post.image}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogLoopServer;
