import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentManagement() {
        const[id,setId]=useState(0)
        const[editar,setEditar]=useState(false)
        const[first_name,setFirst_name]=useState("");
        const[middle_name,setMiddle_name]=useState("");
        const[last_name,setLast_name]=useState("");
        const[age,setAge]=useState("");
        const[grade,setGrade]=useState("");
        const[takes_math,setTakes_math]=useState("");
        const[takes_lenguage,setTakes_lenguage]=useState("");
        const[alumnosList, setAlumnos]= useState([]);
      
      
        const add=()=>{Axios.post("http://localhost:3002/create",
        {first_name:first_name,
          middle_name:middle_name,
          last_name:last_name,
          age:age, grade:grade,
          takes_math:takes_math,
          takes_lenguage:takes_lenguage}
          ).then(()=>{
            limpiarCampos();
            getAlumnos();
            Swal.fire({
              title:"<strong>Registro exitoso</strong>",
              html:"<i>El alumno "+ first_name+" fue registrado con exito</i>",
              icon:'success',
              timer:3000
          })});}
      
          const getAlumnos = () => {Axios.get("http://localhost:3002/alumnos").then((response) => {
              setAlumnos(response.data);
              (console.log((response.data)));});}
      
          const update=()=>{Axios.put("http://localhost:3002/update",
            {id:id,
              first_name:first_name,
              middle_name:middle_name,
              last_name:last_name,
              age:age,
              grade:grade,
              takes_math:takes_math,
              takes_lenguage:takes_lenguage}
              ).then(()=>{
                limpiarCampos();
                getAlumnos();
                Swal.fire({
                  title:"<strong>Registro exitoso</strong>",
                  html:"<i>El alumno "+ first_name+" fue registrado con exito</i>",
                  icon:'success',
                  timer:3000
              })});}
        
        const deleteAlumno = (val) => {
          Swal.fire({
            title: "Confirmar eliminado?",
            html:"<i>Realmente desea eliminar a <strong>"+ val.first_name +"</strong>?</i>",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminarlo!"
          }).then((result) => {
            if (result.isConfirmed) {
              Axios.delete(`http://localhost:3002/delete/${val.id}`).then(() => {
                limpiarCampos();
                getAlumnos();
                Swal.fire(
                  "Eliminado",
                  val.first_name+" fue eliminado.",
                  "success"
                );
              });
            }
          });}
      const limpiarCampos=()=>{
        setFirst_name("");
        setMiddle_name("");
        setLast_name("");
        setAge("");
        setGrade("");
        setTakes_math("");
        setTakes_lenguage("");
        setEditar(false);
      }
      
      
      
      const editarAlumno  = (val)=>{
        setEditar(true);
        setFirst_name(val.first_name);
        setMiddle_name(val.middle_name);
        setLast_name(val.last_name);
        setAge(val.age);
        setGrade(val.grade);
        setTakes_math(val.takes_math);
        setTakes_lenguage(val.takes_lenguage); 
        setId(val.id);}
        return (
            <div className='container'>
            <div className="card text-center">
              <div className="card-header">
                GESTION DE ALUMNOS
              </div>
              <div className="card-body">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">First_name:</span>
                  <input type="text"
                    onChange={(event) => {
                      setFirst_name(event.target.value);
                    }}
      
                    className="form-control" value={first_name} placeholder="Ingrese Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
      
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Middle_name:</span>
                  <input type="text" 
                    onChange={(event) => {
                      setMiddle_name(event.target.value);
                    }}
      
                    className="form-control" value={middle_name} placeholder="Ingrese Materia" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
      
      
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Last_name:</span>
                  <input type="text" value={last_name} 
                    onChange={(event) => {
                      setLast_name(event.target.value);
                    }}
      
                    className="form-control" placeholder="Ingrese Apellido" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
      
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Age:</span>
                  <input type="number" value={age} 
                    onChange={(event) => {
                      setAge(event.target.value);
                    }}
      
                    className="form-control" placeholder="Ingrese Edad" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Grade:</span>
                  <input type="number" value={grade} 
                    onChange={(event) => {
                      setGrade(event.target.value);
                    }}
      
                    className="form-control" placeholder="Ingrese Materia" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
      
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Takes_math:</span>
                  <input type="text" value={takes_math} 
                    onChange={(event) => {
                      setTakes_math(event.target.value);
                    }}
      
                    className="form-control" placeholder="Ingrese 1 o 0" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
      
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">Takes_Lenguage:</span>
                  <input type="text" value={takes_lenguage} 
                    onChange={(event) => {
                      setTakes_lenguage(event.target.value);
                    }}
      
                    className="form-control" placeholder="Ingrese 1 o 0" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className="card-footer text-muted">
                {
                  editar?
                  <div>
                  <button className='btn btn-warning m-2' onClick={update}>Actualizar</button>
                  <button className='btn btn-info m-2' onClick={limpiarCampos}>Cancelar</button>
              </div>
                :<button className='btn btn-success' onClick={add}>Registro</button>
      }
      </div></div>
      <div>
          <button className='btn btn-success' onClick={getAlumnos}>Get</button>
          </div>
          <div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">First_name</th>
                  <th scope="col">Middle_name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Grade</th>
                  <th scope="col">Takes_math</th>
                  <th scope="col">Takes_Lenguage</th>
                </tr>
              </thead>
              <tbody>
                {
                  alumnosList.map((val, key) => {
                    return <tr key={val.id}>
                      <th scope="row">{val.id}</th>
                      <td>{val.first_name}</td>
                      <td>{val.middle_name}</td>
                      <td>{val.last_name}</td>
                      <td>{val.age}</td>
                      <td>{val.grade}</td>
                      <td>{val.takes_math}</td>
                      <td>{val.takes_lenguage}</td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button" 
                          onClick={()=>{
                            editarAlumno(val);
                          }} className="btn btn-info">Editar</button>
                          <button type="button" onClick={()=>{
                            deleteAlumno(val);
                          }} className="btn btn-danger">Eliminar</button>
                        </div>
                      </td>
                    </tr>
                  })
                }
      
              </tbody>
            </table></div>
          </div>
        );
      }
export default StudentManagement;