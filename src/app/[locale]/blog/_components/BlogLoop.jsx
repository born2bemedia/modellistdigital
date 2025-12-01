"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import { getPosts } from "@/app/[locale]/api/blog";

const BlogLoop = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section className="blog-loop">
      <div className="_container">
        <div className="blog-loop__body">
          {posts.map((post) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={post.slug}
              className="post-card"
            >
              <Link href={`/blog/${post.slug}`} className="thumb">
                <img src={post.image} />
              </Link>
              <div className="info">
                <div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </div>
                <Link href={`/blog/${post.slug}`} className="black-button">
                  Read more
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogLoop;
