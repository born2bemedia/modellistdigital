import "@/styles/blog.scss";
import BlogHero from "./_components/BlogHero";
import ContactUs from "./_components/ContactUs";
import BlogLoop from "./_components/BlogLoop";
import BlogLoopServer from "./_components/BlogLoopServer";

export const metadata = {
  title: "Our blog",
  description:
    "Stay updated with the latest trends, tips, and insights in digital production. Explore our blog for expert advice on 3D modelling, animations, UI/UX design, and video production by Modellist Digital",
  openGraph: {
    title: "Our blog",
    description:
      "Stay updated with the latest trends, tips, and insights in digital production. Explore our blog for expert advice on 3D modelling, animations, UI/UX design, and video production by Modellist Digital",
    images: "https://modellistdigital.com/images/meta.png",
  },
};

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
