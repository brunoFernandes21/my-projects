import ProjectCard from "./ProjectCard";
const myProjects = [
  {
    id: 1,
    image: "/portfolio.png",
    title: "Developer Portfolio",
    url: "https://bruno-dev-portfolio.netlify.app",
  },
  {
    id: 2,
    image: "/northcoders07.png",
    title: "Northcoders News",
    url: "https://www.bfnc-news.com",
  },
  {
    id: 3,
    image: "/books-buzz1.png",
    title: "Books-Buzz",
    url: "https://books-buzz-app.netlify.app/landing-page",
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
