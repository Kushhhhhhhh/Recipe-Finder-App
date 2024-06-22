import { Search } from "lucide-react"
import RecipeCard from "../components/RecipeCard"

const Homepage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto"> 
        
       <form className="flex items-center">
        <label className="flex items-center gap-2 w-full shadow-md p-2 bg-white rounded-md">
          <Search size={24} />
          <input 
            type="text" 
            placeholder="Anything in mind?" 
            className="text-sm md:text-md flex-grow outline-none" 
          />
        </label>
       </form>

       <h1 className="font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</h1>
       <p className="text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight">Popular choices</p>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
         <RecipeCard />
       </div>
      </div>
    </div>
  )
}

export default Homepage