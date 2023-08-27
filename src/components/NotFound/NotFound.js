import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css';



function NotFound() {
  const navigate = useNavigate();


    return (
     <section className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__text">Страница не найдена</p>
        <button className="not-found__link button" type="button" onClick={()=>navigate(-3)}>Назад</button>

     </section>
    )
}

export default NotFound