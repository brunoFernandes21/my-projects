import Home from "./pages/Home";
function App() {

  return (
    <div className="h-full lg:h-screen py-20">
      <div className="flex justify-center mb-20">
        <h1 className="bg-black font-bold text-2xl text-white py-2 px-3 rounded-full shadow-md shadow-white transition-all duration-500 ease-in-out hover:scale-110">Bruno Fernandes' Projects</h1>
      </div>
      <Home />
    </div>
  )
}

export default App
