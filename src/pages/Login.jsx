import axios from 'axios';
import React, { use } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  let onSubmit = async (data) => {
    console.log(data);

    try {
      let respuesta = await axios.post('http://localhost/loginApi/login', data);

      alert('Bienvendio ' + respuesta.data.nombre);

      onLogin(respuesta.data.nombre);
      navigate('/dashboard');

      console.log(respuesta);
    } catch (error) {
      alert('el usuario y/o contraseña son incorrectos');
      console.log(error);
    }
  };

  return (
    <>
      <div className="conatainer">
        <div className="row justify-content-center">
          <div className="col-sm-8 ">
            <h1 className="text cetnter text-primary my-5">
              formulario de ingreso
            </h1>
          </div>
          <div className="col-sm-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-body-secondary p-3 rounded-3"
            >
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  {...register('correo', { required: true })}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {errors.correo && (
                  <span className="text-danger">El correo es requerido</span>
                )}
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  {...register('contrasena', { required: true })}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                {errors.correo && (
                  <span className="text-danger">La contraseña requerido</span>
                )}
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
