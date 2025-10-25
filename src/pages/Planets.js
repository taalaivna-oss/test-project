import React, { useState, useEffect } from "react";
import { getPlanets } from "../services/api";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "../styles/planets.css";

const Planets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPlanets()
      .then((data) => {
        setPlanets(data.results);
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
       {planets.map((planet, index) => (
        <Card key={index} title={planet.name} className="card">
          <p>Климат: {planet.climate}</p>
          <p>Население: {planet.population}</p>
          <Button
            label="Подробнее"
            onClick={() => navigate(`/planets/${index + 1}`)}
          />
        </Card>
      ))}
    </div>
    
  );
};

export default Planets;
