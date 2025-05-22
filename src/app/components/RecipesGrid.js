"use client";

import { useState, useEffect } from "react";
import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes";
import axios from "axios";

const RecipesGrid = () => {
  const [data, setData] = useState([]); //(valor inicial de la variable)

  useEffect(() => {
    const getData = async () => {
    const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
    const responseData = response.data.recipes
    setData(responseData)
     }


    getData()
  }, []);

  return (
    <section className="recetas">
      <h2>Recetas destacadas del mes</h2>
      <div className="recipes_grid">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} id={recipe.id}  />
        ))}
      </div>
    </section>
  );
};
export default RecipesGrid;
