import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>⭐ Star Wars Explorer</h1>
      <h3>Выберите категорию:</h3>
<div class="container">
      <div class="menu">
        <button onClick={() => navigate("/people")}>👤 Персонажи</button>
        <button onClick={() => navigate("/planets")}>🪐 Планеты</button>
        <button onClick={() => navigate("/starships")}>🚀 Корабли</button>
      </div>
  
<div class="video-container">
<iframe width="500" height="350" src="https://www.youtube.com/embed/KVRBfWQgyuY" title="Звёздные Войны 9: Скайуокер Восход — Русский трейлер #3 (2019)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="500" height="350" src="https://www.youtube.com/embed/gcIdWujuxuM" title="Звёздные войны 8: Последние джедаи — Русский трейлер (2017)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="500" height="350" src="https://www.youtube.com/embed/frdj1zb9sMY" title="Rogue One: A Star Wars Story Trailer (Official)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<iframe width="500" height="350" src="https://www.youtube.com/embed/frdj1zb9sMY" title="Rogue One: A Star Wars Story Trailer (Official)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
</div>
  );
};

export default Home;
