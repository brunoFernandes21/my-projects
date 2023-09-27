import ProjectCard from "./ProjectCard"
const myProjects = [
  {id: 1, image: "/northcoders07.png", title: "Northcoders News", url: "https://www.bfnc-news.com"},
  {id: 2, image: "/northcoders07.png", title: "Books-Buzz", url: "https://books-buzz-app.netlify.app/landing-page"},
  {id: 3, image: "/northcoders07.png", title: "Developer Portfolio", url: "https://bruno-dev-portfolio.netlify.app"},
  {id: 4, image: "/northcoders07.png", title: "Total Fitness"},
  {id: 5, image: "/northcoders07.png", title: "Monster Friends", url: "https://brunofernandes21.github.io/monsterfriends/"},
  {id: 6, image: "/northcoders07.png", title: "Cloud Todo", url: "https://bruno-dev-portfolio.netlify.app"},
]
const ProjectList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {myProjects.map((project) => (
            <ProjectCard key={project.id} image={project.image} title={project.title} url={project.url}/>
        ))}
    </div>
  )
}

export default ProjectList