import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlanet } from "../services/api";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "../styles/planets.css";

const PlanetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [planet, setPlanet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlanet(id)
      .then((data) => {
        setPlanet(data); // ✅ правильное сохранение данных
        setLoading(false);
      })
      .catch(() => {
        alert("Ошибка загрузки данных!");
        setLoading(false);
      });
  }, [id]);

 if (loading)
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Загрузка...</p>
    </div>
  );

if (!planet) return <p>Планета не найдена</p>;

return (
  <div className="cards-container">
    <Card title={planet.name} className="card">
      <p>Период ротации: {planet.rotation_period}</p>
      <p>Орбитальный период: {planet.orbital_period}</p>
      <p>Диаметр: {planet.diameter}</p>
      <p>Климат: {planet.climate}</p>
      <p>Местность: {planet.terrain}</p>
      <p>Население: {planet.population}</p>
      <Button
        label="Назад"
        icon="pi pi-arrow-left"
        onClick={() => navigate(-1)}
      />
    </Card>
  </div>
);

};

export default PlanetDetail;
