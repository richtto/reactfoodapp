import FoodItem from "./FoodItem";

export default function FoodList({ foodData, foodId, setFoodId }) {
  return (
    <div>
      {foodData.map(food => (
        <FoodItem
          key={food.id}
          food={food}
          foodId={foodId}
          setFoodId={setFoodId}
        />
      ))}
    </div>
  );
}
