import Project from "../util/ProjectView";
import projectList from "@/data/projectList";

function Projects() {
  return (
    <>
      <h1 className="header">Projects</h1>

      {projectList.map((project, i) => {
        return (
          <Project
            key={i}
            name={project.name}
            description={project.description}
            tags={project.tags}
            url={project.url}
            slides={project.slides}
          ></Project>
        );
      })}
    </>
  );
}

export default Projects;
