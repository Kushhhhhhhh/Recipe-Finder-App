import RecipeCard from "../components/RecipeCard"
import { getRandomColor } from "../lib/utils"

const FavoritePage = () => {

  const favorite = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div className="bg-[#faf9fb] flex-1 p-10 min-h-screen"> 
      <div className="max-w-screen-lg mx-auto">
         <p className="font-bold text-3xl md:text-5xl my-4">My Favorites</p>

         {favorite.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" alt="error-img" className="h-3/4"/>
          </div>
         )}

         {favorite && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favorite.map((recipe) => (
              <RecipeCard key={recipe.label} recipe={recipe} {...getRandomColor()} />
            ))}
          </div>
         )}
         
      </div>
    </div>
  )
}

export default FavoritePage