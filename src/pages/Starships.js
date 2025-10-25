import React, { useState, useEffect } from "react";
import { getStarships } from "../services/api";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const Starships = () => {
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getStarships()
      .then((data) => {
        setShips(data.results);
        setLoading(false);
      })
      .catch(() => {
        alert("Ошибка загрузки данных!");
        setLoading(false);
      });
  }, []);

 if (loading)
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Загрузка...</p>
    </div>
  );
  return (
     <div className="cards-container">
      {ships.map((ship, index) => (
        <Card key={index} title={ship.name} className="card">
          <p>Модель: {ship.model}</p>
          <p>Экипаж: {ship.crew}</p>
          <Button
            label="Подробнее"
            onClick={() => navigate(`/starships/${index + 1}`)}
          />
        </Card>
      ))}
    </div>
  );
};

export default Starships;
