"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Loading from "@/app/components/Loading";
import Link from "next/link";

const RecipeContainer = ({ id }) => {
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error de receta", error);
        setError(true);
        setLoading(false);
      }
    };
    if (id) {
      getRecipe();
    }
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p>HUBO UN ERROR</p>;
  if (!recipe) return null;

  return (
    <>
    <section className="recipe_container">
      <h1>{recipe.name}</h1>
      <Image src={recipe.image} alt={recipe.name} width={500} height={30} />

      <h2>Ingredientes</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2>Instrucciones</h2>
        <p>
          {recipe.instructions.join(" ")}
        </p>


      <div className="food_info">
        <p className="info"><span className="info_label">Cocina:</span><span className="info_value"> {recipe.cuisine}</span></p>
        <p className="info"><span className="info_label">Dificultad:</span><span className="info_value"> {recipe.difficulty}</span></p>
        <p className="info"><span className="info_label">Tiempo de </span><span className="info_value">preparación: {recipe.prepTimeMinutes}</span></p>
        <p className="info"><span className="info_label">Tiempo de cocción:</span><span className="info_value"> {recipe.cookTimeMinutes}</span></p>
        <p className="info"><span className="info_label">Cantidad de porciones: </span><span className="info_value">{recipe.servings}</span></p>
        <p className="info"><span className="info_label">Calorías por porción: </span><span className="info_value">{recipe.caloriesPerServing}</span></p>
        <p className="info"><span className="info_label">Tipo de comida: </span><span className="info_value">{`${recipe.mealType.join(", ")}`}</span></p>
        <p className="info"><span className="info_label">Valoracion:</span><span className="info_value"> {`${recipe.rating}`}⭐</span></p>
        <p className="info"><span className="info_label">En esta receta: </span><span className="info_value">{recipe.tags.join(", ")}</span></p>
      </div>
    </section>
    <Link href ="/">
    <div className="back_button">
      <button id="backHome" type="button">Volver a la home</button>
      </div>
      </Link>
      </>
  );
};

export default RecipeContainer;
