import Link from "next/link";
import { fetchProductsByCategory } from "@/app/api/products";
import AddToCartButtonProduct from "@/components/AddToCartButtonProduct";
import AddToCartArrow from "@/icons/AddToCartArrow";
import ReactPlayer from "react-player";
import VideoBlock from "./VideoBlock";

const Products = async ({ category, title }) => {
  const products = await fetchProductsByCategory(category, 3);

  return (
    <>
      {products.length > 0 && (
        <section className="products">
          <div className="_container">
            {title && <h2>{title}</h2>}
            <div className="products__body">
              {products.map((product) => (
                <div key={product.id}>
                  {product.preview_video ? (
                    <VideoBlock
                      videoUrl={product.preview_video}
                      videoCover={product.image}
                    />
                  ) : (
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
                  )}

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
                      {category === "ready-made-animations" ? (
                        <Link
                          className="arrow-button"
                          href={`/product/${product.slug}`}
                        >
                          View
                          <AddToCartArrow />
                        </Link>
                      ) : (
                        <AddToCartButtonProduct product={product} />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {category !== "hot-offers" &&
                category !== "ready-made-animations" &&
                title !== "YOU MAY ALSO LIKE" && (
                  <div className="button-wrap">
                    <Link
                      className="black-button"
                      href={`/services/3d-modeling/${category}`}
                    >
                      All {title}
                    </Link>
                  </div>
                )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Products;
