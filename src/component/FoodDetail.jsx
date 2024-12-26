import { useEffect, useState } from "react";
import style from "./foodDetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodId, setFoodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const api_Key = "312c07674f194742ba012073684a0959";
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`${URL}?apiKey=${api_Key}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchDetails();
  }, [foodId]);
  return (
    <div>
      <div className={style.card}>
        <h1 className={style.heading}>{food.title}</h1>
        <img className={style.image} src={food.image} alt="" />

        <div className={style.detail}>
          <span>
            <strong>{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👩🏻‍🤝‍🧑🏿 <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥒 vegetarian" : "🍖 Non-vegetarian "}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐐 Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          💲
          <strong>
            <span>{food.pricePerServing / 100}</span>
          </strong>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={style.instruction}>
          <ol>
            {isLoading
              ? "Loading"
              : food.analyzedInstructions[0].steps.map(step => (
                  <li>{step.step}</li>
                ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
