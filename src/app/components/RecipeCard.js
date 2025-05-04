import Image from "next/image"
const RecipeCard = () => {
  return (
    <div className="recipe_card">
    <Image src="/assets/tiagocollado.jpg"
    width={300}
    height={300}
    alt="Tiago"
    />
    </div>
  )
}

export default RecipeCard