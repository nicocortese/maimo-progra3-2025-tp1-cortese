"use client"; // permite usar los Hooks (state y effect)

import { useState, useEffect } from "react";
import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes";
import axios from "axios";
import Loading from "@/app/components/Loading";

const RecipesGrid = () => {
  const [data, setData] = useState([]); //(valor inicial de la variable)
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://dummyjson.com/recipes?limit=20&skip=0"
        );
        const responseData = response.data.recipes;
        setData(responseData); // se guarda en data
        setLoading(false);
      } catch (error) {
        console.log("MI ERROR FUE", error);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <section className="recetas">
      <h2>Recetas destacadas del mes</h2>
      <div className="recipes_grid">
        {/* {!loading
          ? data.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                name={recipe.name}
                image={recipe.image}
                id={recipe.id}
              />
            ))
          : "Loading..."}
          */}

        {!loading &&
          data.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              name={recipe.name}
              image={recipe.image}
              id={recipe.id}
            />
          ))}
        {loading && <Loading />}

        {error && "HUBO UN ERROR"}
      </div>
    </section>
  );
};
export default RecipesGrid;
