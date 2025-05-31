import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ name, image, link, id }) => {
  return (
    <div className="recipe_card">
      <Image
        src={image}
        width={300}
        height={220}
        alt={"Hola"}
        className="recipe_img"
      />
      <h3>{name}</h3>
      <Link href ={`/recipe/${id}`}>
      <button className="recipe_button">Ver receta</button>
      </Link>
    </div>
  );
};

export default RecipeCard;
