import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { Home, Users, Clock, MapPin  } from "lucide-react";
import Navbar from "./Navbar";

function ProjectDetails() {

  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <div className="text-center text-xl mt-20">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
     <Navbar></Navbar>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        <h1 className="text-3xl sm:text-4xl mt-10 font-bold mb-4 text-center sm:text-left">
          {project.title}
        </h1>
        <img
          src={project.Rimage}
          alt={project.title}
          className="w-full max-h-96 object-cover rounded-lg mb-6 shadow-lg"
        />
        {/* Image Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {project.images.pics.map((url, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={url}
                className="w-full h-48 sm:h-64 object-cover"
                alt={`Project Image ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
        {/* Project Details */}
        <p className="text-gray-700 text-lg mt-6 sm:mt-10 mb-4">{project.description}</p>
        <div className="space-y-4 text-gray-600">
          <div className="flex items-center">
            <Home className="h-5 w-5 mr-2 text-blue-600" />
            <span>{project.type}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-600" />
            <span>{project.owner}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2 text-blue-600" />
            <span>{project.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span>{project.location}</span>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t text-gray-700 italic text-center sm:text-left">
          "{project.feedback}"
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
