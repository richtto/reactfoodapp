import { useState, useEffect } from "react";

const api_Key = "312c07674f194742ba012073684a0959";
const url = "https://api.spoonacular.com/recipes/complexSearch";
import style from "./Search.module.css";
export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${api_Key}`);
      const data = await res.json();
      console.log(data);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={style.searchContainer}>
      <input
        className={style.input}
        onChange={e => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
