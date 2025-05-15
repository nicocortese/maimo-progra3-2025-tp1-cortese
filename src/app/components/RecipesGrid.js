import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes";

const RecipesGrid = () => {
  return (
    <section className="recetas">
      <h2>Recetas destacadas del mes</h2>
      <div className="recipes_grid">
        {parsedData.recipes.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} />
        ))}
      </div>
    </section>
  );
};
export default RecipesGrid;
