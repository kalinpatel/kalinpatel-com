import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type Project = {
  name: string;
  description: string;
  image?: string;
  pageUrl:
    | string
    | {
        url: string;
        newTab?: boolean;
        text?: string;
        icon?: React.ReactNode;
      };
  github?: {
    url: string;
    repoTitle: string;
  };
  tag?: string;
  notPublished?: boolean;
};

export default function ProjectsOverview({
  projects,
  alternate = false,
}: {
  projects: Project[];
  alternate?: boolean;
}) {
  return (
    <div className="py-4">
      <div className="container mx-auto">
        <div>
          {projects.map((project, index) => {
            if (project.notPublished) return null;
            return (
              <div
                key={index}
                className={`flex flex-col sm:flex-row ${
                  index % 2 === 0 && alternate ? "sm:flex-row" : "sm:flex-row-reverse"
                } overflow-hidden border-b-2 border-indigo-100 py-6 gap-6`}
              >
                <div className="relative w-full sm:w-1/2 h-min">
                  {project.image && (
                    <Link
                      href={typeof project.pageUrl === "string" ? project.pageUrl : project.pageUrl.url}
                      target={typeof project.pageUrl === "object" && project.pageUrl.newTab ? "_blank" : undefined}
                    >
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-none"
                        style={{ aspectRatio: "7/4" }}
                      />
                    </Link>
                  )}
                </div>
                <div className="flex flex-col justify-center sm:w-2/3">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    {project.name}
                    {project.tag && (
                      <span className="ml-2 text-sm bg-gray-100 border border-gray-300 text-gray-900 rounded-full px-2 py-1 font-normal">
                        {project.tag}
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-row space-x-2">
                    <Link
                      href={typeof project.pageUrl === "string" ? project.pageUrl : project.pageUrl.url}
                      target={typeof project.pageUrl === "object" && project.pageUrl.newTab ? "_blank" : undefined}
                      className="px-4 py-2 bg-indigo-100 text-indigo-900 font-bold rounded-lg hover:bg-indigo-300 transition w-max"
                    >
                      {typeof project.pageUrl === "object" && project.pageUrl.icon}
                      {typeof project.pageUrl === "object" && project.pageUrl.text
                        ? project.pageUrl.text
                        : "Learn More"}
                    </Link>

                    {project.github && (
                      <Link
                        href={project.github.url}
                        target="_blank"
                        className="px-4 py-2 text-indigo-700 font-bold rounded-lg hover:bg-indigo-200 transition w-max flex items-center"
                      >
                        <FaGithub />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
