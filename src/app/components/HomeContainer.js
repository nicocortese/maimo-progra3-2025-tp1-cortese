import RecipesGrid from "@/app/components/RecipesGrid";

const HomeContainer = () => {
  return (
    <div className="home_container">
      <h1>Los mejores platos del ciclo 2025</h1>
        <RecipesGrid />
    </div>
  );
};

export default HomeContainer;
