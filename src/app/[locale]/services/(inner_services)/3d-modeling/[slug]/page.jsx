import "@/styles/services.scss";
import { fetchProductsByCategory } from "@/app/[locale]/api/products";
import Link from "next/link";
import AddToCartButtonProduct from "@/components/AddToCartButtonProduct";
import RequestBlockInnerService from "@/components/RequestBlockInnerService";

const capitalize = (str) => {
  return str.replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());
};

export async function generateMetadata({ params: { slug } }) {
  const pageTitle = capitalize(slug.replace("-", " "));
  return {
    title: pageTitle,
    description: `Discover our extensive collection of ${pageTitle} 3D model printing plans crafted with precision to meet your needs. Elevate your experience with high-quality, ready-to-print designs perfect for any project.`,
    openGraph: {
      title: pageTitle,
      description:  `Discover our extensive collection of ${pageTitle} 3D model printing plans crafted with precision to meet your needs. Elevate your experience with high-quality, ready-to-print designs perfect for any project.`,
      images: "https://modellistdigital.com/images/meta.png",
    },
  };
}

const ModelingCategory = async ({ params: { slug } }) => {
  const pageTitle = slug.replace("-", " ");
  const products = await fetchProductsByCategory(slug, 9999);

  const categoryKey = slug.replaceAll("-", "_");

  const experience = {
    home_decor: "living space",
    kitchen_tools: "cooking experience",
    office_supplies: "working environment",
    gardening_tools: "gardening",
    toys_and_games: "playing experience",
    personal_accessories: "style"
  };

  return (
    <>
      <section className="category-hero">
        <div className="_container">
          <div className="category-hero__body">
            <img
              src="/images/services/3d/3dHeroIcon.svg"
              width={48}
              height={48}
              alt="3D Hero Icon"
            />
            <h1>{pageTitle}</h1>
            <p>
              Explore our best <span>{pageTitle}</span> 3D models printing plans
              crafted with <br />
              precision and creativity to elevate your {experience[categoryKey]}
              .
            </p>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="_container">
          <div className="products__body">
            {products.map((product) => (
              <div key={product.id}>
                <Link
                  className="product-thumb"
                  href={`/product/${product.slug}`}
                >
                  <img
                    src={product.image}
                    width={350}
                    height={197}
                    alt={product.title}
                  />
                  {product.offer && (
                    <span className="offer">{product.offer} OFF!</span>
                  )}
                </Link>

                <div className="product-info">
                  <div>
                    <h3>
                      <Link href={`/product/${product.slug}`}>
                        {product.title}
                      </Link>
                    </h3>
                    <div
                      className="excerpt"
                      dangerouslySetInnerHTML={{ __html: product.excerpt }}
                    />
                  </div>
                  <div className="add-to-cart">
                    <span>Price: €{product.price}</span>
                    <AddToCartButtonProduct product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <RequestBlockInnerService />
    </>
  );
};

export default ModelingCategory;
