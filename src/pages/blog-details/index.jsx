import React, { useEffect } from "react";
import LightLaout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Image from "next/image";

const BlogDetails = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLaout>
      <PageHeader
        title="The Art of Modern Architectural Design"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
          { id: 3, name: "post details", url: "/blog-details" },
        ]}
      />

      <section className="blog-details py-16 bg-light text-black">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center text-black">
            The Art of Modern Architectural Design: Blending Function with Aesthetics
          </h1>

          <Image
            src="/images/placeholder-1200x766.jpg"
            alt="Modern Architectural Design"
            width={1200}
            height={766}
            className="rounded-xl mb-8 mx-auto"
          />

          <div className="prose max-w-none prose-headings:text-black prose-p:text-black prose-li:text-black">
            <p>
              Modern architectural design isn’t just about building beautiful structures; it’s about creating spaces that speak to our lifestyle, values, and aspirations...
            </p>

            <div><h2>1. What Defines Modern Architectural Design?</h2></div>
            <p>
              Modern architectural design focuses on clean lines, open floor plans, minimalism, and a strong connection with nature...
            </p>

            <div><h2>2. Key Principles of Modern Architecture</h2></div>
            <ul>
              <li>Function over form: Every design choice should have a reason.</li>
              <li>Open spaces: Fewer walls and more openness allow for better interaction.</li>
              <li>Natural light: Large windows, skylights, and open plans allow homes to harness daylight.</li>
              <li>Integration with nature: Gardens, patios, and transparent facades.</li>
              <li>Sustainable design: Eco-friendly materials and energy-efficient planning.</li>
            </ul>

            <div><h2>3. The Role of 3D Visualization in Architectural Planning</h2></div>
            <p>Gone are the days when clients had to imagine their home from 2D blueprints...</p>
            <ul>
              <li>How their space will look and feel</li>
              <li>The flow between rooms</li>
              <li>Lighting and ventilation impact</li>
              <li>Material combinations and textures</li>
            </ul>

            <Image
              src="/images/placeholder-1200x766.jpg"
              alt="3D Visualization"
              width={1200}
              height={766}
              className="rounded-xl my-8 mx-auto"
            />

            <div><h2>4. Materials that Define Modern Design</h2></div>
            <p>
              Modern homes often combine materials like concrete, steel, glass, and wood...
            </p>

            <div><h2>5. Modern Architecture Meets Indian Lifestyle</h2></div>
            <ul>
              <li>Courtyards become modern patios</li>
              <li>Jalis reimagined using laser-cut screens</li>
              <li>Vastu principles blend with open-plan layouts</li>
            </ul>

            <div><h2>6. Why Lighting and Ventilation Are Non-Negotiable</h2></div>
            <p>
              Large windows, strategic openings, and skylights reduce the need for artificial lighting...
            </p>

            <div><h2>7. Customization: The Heart of Modern Design</h2></div>
            <p>
              Vismaya spends time understanding your lifestyle to create spaces unique to you...
            </p>

            <div><h2>8. Real-Life Project Showcase: The Sahas Bungalow, Pune</h2></div>
            <ul>
              <li>L-shaped layout with an internal courtyard</li>
              <li>Floor-to-ceiling windows</li>
              <li>Floating staircase centerpiece</li>
              <li>Energy-efficient lighting and rainwater harvesting</li>
            </ul>

            <Image
              src="/images/placeholder-1200x766.jpg"
              alt="Sahas Bungalow Pune"
              width={1200}
              height={766}
              className="rounded-xl my-8 mx-auto"
            />

            <div><h2>9. Sustainable Practices in Modern Architecture</h2></div>
            <ul>
              <li>Solar panels and energy-saving appliances</li>
              <li>Locally sourced and recycled materials</li>
              <li>Water conservation and natural insulation</li>
            </ul>

            <div><h2>10. Why Choose Vismaya for Your Modern Architectural Needs</h2></div>
            <ul>
              <li>End-to-end solutions from concept to execution</li>
              <li>Vastu-sensitive, customized designs</li>
              <li>100+ satisfied clients</li>
            </ul>

            <div><h2>Conclusion</h2></div>
            <p>
              Modern architecture blends your dreams with expert planning. Vismaya brings vision to life with creativity, care, and craftsmanship.
            </p>
            <p>
              <strong>Ready to build your dream space?</strong> Contact our architectural team and let’s make it happen.
            </p>
          </div>
        </div>
      </section>
    </LightLaout>
  );
};

export default BlogDetails;
