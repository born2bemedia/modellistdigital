import "@/styles/blog.scss";
import BlogHero from "./_components/BlogHero";
import ContactUs from "./_components/ContactUs";
import BlogLoop from "./_components/BlogLoop";

const Blog = () => {
  return (
    <>
      <BlogHero />
      <BlogLoop />
      <ContactUs />
    </>
  );
};

export default Blog;
