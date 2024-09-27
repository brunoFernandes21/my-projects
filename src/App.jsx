import Home from "./pages/Home";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="h-full lg:h-screen py-20">
      <ParticlesBg color="#f4f4f4" num={200} type="cobweb" bg={true} />
      <div className="flex justify-center mb-20">
        <h1 className="bg-black font-bold text-2xl text-white py-2 px-4 rounded-md shadow-md shadow-white transition-all duration-500 ease-in-out hover:scale-110">
          My Projects
        </h1>
      </div>
      <Home />
    </div>
  );
}

export default App;
