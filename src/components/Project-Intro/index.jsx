/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import projectsDetails from "../../data/projects-detailsAll.json"; // Import JSON directly

const ProjectIntro = () => {
  const router = useRouter();
  const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;

    const foundProject = projectsDetails.find((p) => p.id === parseInt(id));

    if (!foundProject) {
      console.warn(`Project with ID ${id} not found`);
    }

    setProject(foundProject);
  }, [id]);

  if (!project) return <p className="text-center text-red-500">Loading project...</p>;

  return (
    <section className="intro-section section-padding bg-light text-dark " >
      <div className="container">

        <div className="row">
          <div className="col-lg-3 col-md-4">
            <h4>{project.title}</h4>
          </div>
          <div className="col-lg-8 col-md-8 mb-30">
            <p>{project.description ? project.description : "No description available."}</p>
            <p>{project.description2 ? project.description2 : "No description available."}</p>
          </div>
          {project.location && (
            <div className="col-lg-3">
              <h6>Location</h6>
              <p>{project.location}</p>
            </div>
          )}
          {project.completionDate && (
            <div className="col-lg-3">
              <h6>Completion Date</h6>
              <p>{project.completionDate}</p>
            </div>
          )}
          {project.carpetArea && (
            <div className="col-lg-3">
              <h6>Carpet Area</h6>
              <p>{project.carpetArea}</p>
            </div>
          )}
            {project.completionDuration && (
            <div className="col-lg-3">
              <h6>Completion Duration</h6>
              <p>{project.completionDuration}</p>
            </div>
          )}
          {project.videoUrl && (
            <div className="col-lg-3">
              <h6>Video</h6>
              <p>
                <Link href={project.videoUrl}>Watch Video</Link>
              </p>
            </div>
          )}
        </div>

        {/* <div className="row mt-5">
          {project.images && project.images.length > 0 ? (
            project.images.map((img, index) => (
              <div key={index} className="col-md-4 mb-3">
                <img src={img} alt={`Project Image ${index + 1}`} className="w-100 rounded" />
              </div>
            ))
          ) : (
            <p className="text-center">No images available for this project.</p>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default ProjectIntro;
