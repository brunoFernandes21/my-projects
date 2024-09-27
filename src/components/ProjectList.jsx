import ProjectCard from "./ProjectCard";
const myProjects = [
  {
    id: 1,
    image: "/my-portfolio.png",
    title: "Developer Portfolio",
    url: "https://bfernandes.netlify.app",
  },
  {
    id: 2,
    image: "/react-jobsboard.png",
    title: "React Jobsboard",
    url: "https://bf-react-jobsboard.netlify.app",
  },
  {
    id: 4,
    image: "/monsters.png",
    title: "Monster Friends",
    url: "https://brunofernandes21.github.io/monsterfriends/",
  },
  {
    id: 5,
    image: "/meals-app.png",
    title: "Meals App",
    url: "https://brunos-meals-app.netlify.app",
  },
  {
    id: 6,
    image: "/brunos_blog.png",
    title: "Brunos_Blog",
    url: "https://bfblog.netlify.app/",
  },
  {
    id: 7,
    image: "/news-homepage.png",
    title: "News Homepage",
    url: "https://bf-news-homepage.netlify.app/",
  },
  { id: 8, image: "/fitness1.png", title: "Total Fitness" },
  { id: 9, image: "/cloudTodo.png", title: "Cloud Todo" },
];
const ProjectList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {myProjects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          url={project.url}
        />
      ))}
    </div>
  );
};

export default ProjectList;
