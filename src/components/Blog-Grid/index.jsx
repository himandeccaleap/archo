import Link from "next/link";
import blogPosts from "../../data/blogPosts.json";

const BlogGrid = () => (
  <section className="blog-grid mt-50">
    <div className="container">
      <div className="row">
        {blogPosts.map((post) => (
          <div key={post.id} className="col-xl-4 col-lg-4 mb-4">
            <div className="card box-shadow bg-white h-full flex flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="card-img-top object-cover w-full h-64"
              />
              <div className="card-body p-6 flex flex-col flex-grow">
                <ul className="meta-info flex space-x-4 text-sm text-gray-500 mb-3">
                  <li>{post.category}</li>
                  <li>{post.date}</li>
                </ul>
                <h2 className="card-title text-lg font-semibold mb-3 flex-grow">
                  <Link href={`/blog-details/${post.id}`}>{post.title}</Link>
                </h2>
                <Link
                  href={`/blog-details/${post.id}`}
                  className="btn btn-primary py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200 mt-auto"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogGrid;
