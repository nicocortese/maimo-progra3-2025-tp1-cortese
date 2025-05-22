import Image from "next/image";

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
      <button className="recipe_button">Ver receta</button>
    </div>
  );
};

export default RecipeCard;
