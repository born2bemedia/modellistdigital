import "@/styles/blog.scss";
import BlogHero from "./_components/BlogHero";
import ContactUs from "./_components/ContactUs";
import BlogLoop from "./_components/BlogLoop";
import BlogLoopServer from "./_components/BlogLoopServer";

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogLoopServer />
      <ContactUs />
    </>
  );
};

export default Blog;
