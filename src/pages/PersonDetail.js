import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPerson } from "../services/api";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "../styles/ppdetails.css";

const PersonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // добавляем хук для переходов
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPerson(id)
      .then((data) => {
        setPerson(data);
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
  return (
    <div className="cards-container">
      <Card title={person.name} className="card">
        <img src="/assets/person.jpg" alt={person.name} />
        <p><strong>Рост:</strong> {person.height} см</p>
        <p><strong>Вес:</strong> {person.mass} кг</p>
        <p><strong>Цвет волос:</strong> {person.hair_color}</p>
        <p><strong>Цвет глаз:</strong> {person.eye_color}</p>
        <p><strong>Дата рождения</strong>{person.birth_year}</p>
        <p><strong>Пол:</strong> {person.gender}</p>
        <p><strong>Родной мир</strong>{person.homeworld}</p>

        <Button
          label="Назад"
          icon="pi pi-arrow-left"
          onClick={() => navigate(-1)} // возвращаемся на предыдущую страницу
        />
      </Card>
    </div>
  );
};

export default PersonDetail;
