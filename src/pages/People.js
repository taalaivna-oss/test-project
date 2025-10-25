import React, { useState, useEffect } from "react";
import { getPeople } from "../services/api";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import "../styles/people.css";



const People = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getPeople()
      .then((data) => {
        setPeople(data.results);
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
  {people.map((p, index) => (
    <Card key={index} title={p.name} className="card">
      {/* Фото персонажа */}
    <img src="/assets/person.jpg" alt={p.name} />
      
      <p>Рост: {p.height}</p>
      <p>Цвет волос: {p.hair_color}</p>
      <Button
        label="Подробнее"
        onClick={() => navigate(`/people/${index + 1}`)}
      />
    </Card>
  ))}
</div>


  );
};

export default People;
