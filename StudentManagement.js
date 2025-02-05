import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentManagement() {
  const [id, setId] = useState(0);
  const [editar, setEditar] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [middle_name, setMiddle_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [takes_math, setTakes_math] = useState("");
  const [takes_lenguage, setTakes_lenguage] = useState("");
  const [alumnosList, setAlumnos] = useState([]);

  // CREATE
  const add = () => {
    Axios.post("http://localhost:3002/create", {
      first_name,
      middle_name,
      last_name,
      age,
      grade,
      takes_math,
      takes_lenguage
    })
      .then(() => {
        limpiarCampos();
        getAlumnos();
        Swal.fire({
          title: "<strong>Registro exitoso</strong>",
          html: `<i>El alumno ${first_name} fue registrado con exito</i>`,
          icon: 'success',
          timer: 3000
        });
      })
      .catch(console.error);
  };

  // READ
  const getAlumnos = () => {
    Axios.get("http://localhost:3002/alumnos")
      .then((response) => {
        setAlumnos(response.data);
        console.log(response.data);
      })
      .catch(console.error);
  };

  // UPDATE
  const update = () => {
    Axios.put("http://localhost:3002/update", {
      id,
      first_name,
      middle_name,
      last_name,
      age,
      grade,
      takes_math,
      takes_lenguage
    })
      .then(() => {
        limpiarCampos();
        getAlumnos();
        Swal.fire({
          title: "<strong>Registro exitoso</strong>",
          html: `<i>El alumno ${first_name} fue registrado con exito</i>`,
          icon: 'success',
          timer: 3000
        });
      })
      .catch(console.error);
  };

  // DELETE
  const deleteAlumno = (val) => {
    Swal.fire({
      title: "Confirmar eliminado?",
      html: `<i>Realmente desea eliminar a <strong>${val.first_name}</strong>?</i>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!"
    }).then((result) => {
      if (result.isConfirmed) {
        Axios.delete(`http://localhost:3002/delete/${val.id}`)
          .then(() => {
            limpiarCampos();
            getAlumnos();
            Swal.fire("Eliminado", val.first_name + " fue eliminado.", "success");
          })
          .catch(console.error);
      }
    });
  };

  // Helper: clears the form
  const limpiarCampos = () => {
    setFirst_name("");
    setMiddle_name("");
    setLast_name("");
    setAge("");
    setGrade("");
    setTakes_math("");
    setTakes_lenguage("");
    setEditar(false);
  };

  // Helper: load existing student data for editing
  const editarAlumno = (val) => {
    setEditar(true);
    setId(val.id);
    setFirst_name(val.first_name);
    setMiddle_name(val.middle_name);
    setLast_name(val.last_name);
    setAge(val.age);
    setGrade(val.grade);
    setTakes_math(val.takes_math);
    setTakes_lenguage(val.takes_lenguage);
  };

  // Render
  return (
    <div className="container">
      <h2 className="mt-3 text-center">Gestión de Alumnos</h2>

      <div className="card text-center mt-3">
        <div className="card-header">Formulario</div>
        <div className="card-body">
          {/* FIRST NAME */}
          <div className="input-group mb-3">
            <span className="input-group-text">First_name:</span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese Nombre"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </div>

          {/* Middle_name, last_name, age, etc. */}
          {/* ... replicate these input fields similarly ... */}
        </div>

        <div className="card-footer text-muted">
          {editar ? (
            <>
              <button className="btn btn-warning m-2" onClick={update}>
                Actualizar
              </button>
              <button className="btn btn-info m-2" onClick={limpiarCampos}>
                Cancelar
              </button>
            </>
          ) : (
            <button className="btn btn-success" onClick={add}>
              Registro
            </button>
          )}
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-success" onClick={getAlumnos}>
          Get
        </button>
      </div>

      <div className="mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>id</th>
              <th>First_name</th>
              <th>Middle_name</th>
              <th>Last_name</th>
              <th>Age</th>
              <th>Grade</th>
              <th>Takes_math</th>
              <th>Takes_lenguage</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {alumnosList.map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.middle_name}</td>
                <td>{val.last_name}</td>
                <td>{val.age}</td>
                <td>{val.grade}</td>
                <td>{val.takes_math}</td>
                <td>{val.takes_lenguage}</td>
                <td>
                  <button
                    className="btn btn-info me-2"
                    onClick={() => editarAlumno(val)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteAlumno(val)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentManagement;