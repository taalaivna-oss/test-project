import React, { useState, useEffect } from "react";
import { getStarship } from "../services/api";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import "../styles/starship.css";

const StarshipDetail = () => {
  
  const { id } = useParams();
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
 

  useEffect(() => {
    getStarship(id).then(setShip);
  }, [id]);

   if (loading)
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Загрузка...</p>
    </div>
  );
  return (
    <div className="cards-container">
      <Card title={ship.name}className="card"> 
      <p>Модель: {ship.model}</p>
      <p>Длина: {ship.length}</p>
      <p>Экипаж: {ship.crew}</p>
      <p>Производитель: {ship.manufacturer}</p>
      <p>Расходные материалы {ship.consumables}</p>
      <p>Пилоты {ship.pilots}</p>
      <p>Пассажиры: {ship.passengers}</p>
      <Link to="/starships">⬅ Назад</Link>
    </Card>
    </div>
  );
};

export default StarshipDetail;
