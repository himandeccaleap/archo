import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import projectsDetails from '../../data/projects-detailsAll.json';

export default function Slider() {
  const router = useRouter();
  const { id } = router.query;
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!id) return;
    const project = projectsDetails.find((p) => p.id === parseInt(id));
    setSelectedProject(project);
  }, [id]);

  if (!selectedProject) return <p className="text-center text-red-500">Loading project...</p>;

  return (
    <section className="slider-section w-full mb-0">
      <Swiper
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-[1200px]"
      >
        {selectedProject.images.map((image, index) => (
          <SwiperSlide key={`${selectedProject.id}-${index}`}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Slide ${selectedProject.id} - Image ${index + 1}`}
                width={1920}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
