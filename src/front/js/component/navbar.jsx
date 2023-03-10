import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { useNavigate } from "react-router-dom"; // importamos el hook useNavigate para redireccionar desde una funcion

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate(); //activamos useNavigate

  function handleLogout() {
    actions.logout(); //cerrar la sesion
    navigate("/"); //usamos navigate para redireccionar
  }

  function prueba_la_cosa () {
    alert(store.project.id)
  }

  return (
    <nav className="navbar navbar-light bg-light">
        <button onClick={prueba_la_cosa}>Prueba cosas</button>
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1"> ÁTICA c: </span>
        </Link>{" "}
        <Link to="/recuperarcontra">
          <button> Recuperar Contraseña </button>{" "}
        </Link>{" "}
        <div className="mx-1">
          <Link to="/login">
            {" "}
            {store.auth === false ? (
              <button className="btn btn-primary"> Iniciar Sesión </button>
            ) : null}{" "}
          </Link>{" "}
          <Link to="/signup">
            {" "}
            {store.auth === false ? (
              <button className="btn btn-primary"> Registrarse </button>
            ) : null}{" "}
          </Link>{" "}
        </div>{" "}
        <div className="ml-auto">
          {" "}
          {store.auth === true ? (
            <button className="btn btn-primary" onClick={handleLogout}>
              {" "}
              Logout{" "}
            </button>
          ) : null}{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
};
