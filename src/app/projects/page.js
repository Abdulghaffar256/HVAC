import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 60;

export const metadata = {
  title: "Projects | HVAC Designing",
  description: "Browse HVAC design projects, tutorials, and case studies.",
  alternates: {
    canonical: "https://www.hvacdesigning.com/projects",
  },
};

export default async function ProjectsPage() {
  // ✅ Fetch projects from Sanity
  const projects = await client.fetch(`
    *[_type == "Project"] | order(publishedAt desc){
      title,
      description,
      "slug": slug.current,
      image
    }
  `);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        HVAC Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-600">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="relative group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition duration-300 border-2 border-transparent hover:border-blue-600 hover:ring-2 hover:ring-blue-500"
            >
              {/* ✅ Project Image */}
              <div className="relative w-full h-64">
                {project.image ? (
                  <Image
                    src={urlFor(project.image).url()}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* ✅ Transparent hover overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-white/20 backdrop-blur-sm transition-all duration-300 rounded-2xl z-10" />

              {/* ✅ Project Title */}
              <div className="absolute bottom-4 left-4 text-white text-lg font-semibold z-20 drop-shadow-md">
                {project.title}
              </div>

              {/* ✅ Description on hover */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <p className="text-orange-700 text-sm drop-shadow-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

