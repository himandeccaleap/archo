import { useRouter } from "next/router";
import blogData from "../../data/BlogData.json";
import LightLaout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is available and valid
  if (!id) {
    return <p className="text-center mt-20">Loading blog details...</p>;
  }

  // Find the current post based on the id
  const post = blogData.posts.find((p) => p.postId === parseInt(id));

  if (!post) {
    return <p className="text-center mt-20">Blog not found...</p>;
  }

  // Find the current index of the post
  const currentIndex = blogData.posts.findIndex((p) => p.postId === parseInt(id));

  // Find the next and previous blog posts
  const nextPost = blogData.posts[currentIndex + 1];
  const prevPost = blogData.posts[currentIndex - 1];

  return (
    <LightLaout>
      <PageHeader title={post.header.title} fullPath={post.header.fullPath} />

      <section className="blog-details mt-50 mb-20 py-16 bg-light text-black">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-2xl mt-20 fw-400 mb-50 text-center text-black">
            {post.title}
          </h1>

          {post.sections.map((section) => (
            <div key={section.id} className="mt-5 mb-8">
              <h2 className="fw-400 mb-2">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc space-y-1 text-black">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="fw-400 blogDesc text-black">{section.content}</p>
              )}

              {section.image && (
                <Image
                  src={section.image}
                  alt={section.title}
                  width={1200}
                  height={532}
                  className="rounded-xl my-6"
                />
              )}
            </div>
          ))}

          {/* Prev and Next Buttons */}
          <div className="ml-20 mt-8 flex justify-between">
            {prevPost && (
              <Link
                href={`/blog-details/${prevPost.postId}`}
                className="button-26 btn btn-primary py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
              >
                <span>Prev Blog: {prevPost.title}</span>
              </Link>
            )}
            </div>
            
          <div className=" mr-20 mt-8 flex justify-between">
            {nextPost && (
              <Link
                href={`/blog-details/${nextPost.postId}`}
                className="button-26 btn btn-primary py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 transition duration-200"
              >
                <span>Next Blog: {nextPost.title}</span>
              </Link>
            )}
          </div>
        </div>
      </section>
    </LightLaout>
  );
};

export default BlogDetails;
