import "@/styles/services.scss";
import { fetchProductsByCategory } from "@/app/api/products";
import Link from "next/link";
import AddToCartButtonProduct from "@/components/AddToCartButtonProduct";

const ModelingCategory = async ({ params: { slug } }) => {
  const pageTitle = slug.replace("-", " ");
  const products = await fetchProductsByCategory(slug, 9999);

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
    </>
  );
};

export default ModelingCategory;
