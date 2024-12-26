import style from "./FoodItem.module.css";
export default function FoodItem({ food, foodId, setFoodId }) {
  return (
    <div className={style.container}>
      <img className={style.image} src={food.image} alt="" />
      <div className={style.itemContent}>
        <p className={style.itemName}> {food.title}</p>
      </div>
      <div className={style.buttonContainer}>
        <button onClick={() => setFoodId(food.id)} className={style.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
