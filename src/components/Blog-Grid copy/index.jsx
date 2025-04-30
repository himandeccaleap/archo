import Link from "next/link";
import blogPosts from "../../data/blogPosts.json";

const BlogSection = () => {
  return (
    <section className="blog-one mt-50">
      <div className="container">
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className={`col-xl-4 col-lg-4 wow ${index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}`}
              data-wow-delay={`${(index % 3) * 100}ms`}
              data-wow-duration="1500ms"
            >
              {/* Card Structure for Each Blog Post */}
              <div className="card blog-one__single">
                <div className="blog-one__single-img">
                  <div className="inner">
                    <img src={post.image} alt="" className="card-img-top" />
                    <div className="overlay-icon">
                      {/* Wrap the icon inside a single <span> */}
                      <Link href="#">
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body blog-one__single-content">
                  <ul className="meta-info">
                    <li><p><Link href="#">{post.category}</Link></p></li>
                    <li><p>{post.date}</p></li>
                  </ul>
                  <h2 className="card-title">
                    <Link href={post.link}>
                      {/* Wrap the title inside a single <span> */}
                      <span>
                        {post.title.split(' ').slice(0, 7).join(' ')} <br />
                        {post.title.split(' ').slice(7).join(' ')}
                      </span>
                    </Link>
                  </h2>
                  <div className="btn-box">
                    <Link href={post.link}>
                      {/* Wrap the link and the icon in a single <span> */}
                      <span>
                        READ MORE <span className="icon-left-arrow"></span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
