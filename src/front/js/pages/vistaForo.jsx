import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import { SocialGral } from "../component/socialGral.jsx";
import { LucroGral } from "../component/lucroGral.jsx";
import { useNavigate } from "react-router-dom";
import { Prolist } from "../component/vistaproyectos.jsx";

export const VistaDeProyectos = () => {
  const { store, actions } = useContext(Context);

  const navigate = useNavigate();
  useEffect(() => {
    actions.mostrarProjects();
  }, []);
  function handleNewPost() {
		
    navigate("/"); //usamos navigate para redireccionar
  }

  return (
    <div>
      <div className="container">
        <div className="container testimonial-group">
        <div className="ml-auto">
        {store.auth === true ? (
          <Link to="/nuevoposteoview">
          {" "}
            <button className="btn btn-primary" onClick={handleNewPost}>
        {" "}
            NewPost{" "}
            </button></Link>
        ) : null}{" "}
		<button className="btn btn-primary m-2" onClick={actions.mostrarProjects}>
        {" "}
            Todos{" "}
            </button><button className="btn btn-primary m-2" onClick={actions.mostrarProjects2}>
        {" "}
            Sin fines de lucro{" "}
            </button>
            <button className="btn btn-primary m-2" onClick={actions.mostrarProjects1}>
        {" "}
            Con fines de lucro{" "}
            </button>
			</div>
          <div className="row text-center">
            {store.projects.map((project, index) => {
              return (
                <Prolist
                  category={project.category}
                  dataTime={project.dataTime}
                  text={project.text}
                  title={project.title}
                  id={project.id}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        </div></div>
  );
};
