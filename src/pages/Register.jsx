import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Register() {
  let {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
    let contra = watch("contrasena");
  
    let navigate = useNavigate();
    let onSubmit = async (data) => {
      console.log(data);
  
   try {
      let respuesta = await axios.post('http://localhost/loginApi/login', {nombre: data.nombre,
         correo:data.correo,
         contrasena:data.contrasena});
         alert(respuesta.data.message)
      navigate('/Login');
      console.log(respuesta);
     } catch (error) {
     alert('el usuario y/o contraseña son incorrectos');
      console.log(error);
    }
    };
  return <div> return (
     
    <>
      <div className="conatainer">
        <div className="row justify-content-center">
          <div className="col-sm-8 ">
            <h1 className="text cetnter text-primary my-5">
              formulario de registro
            </h1>
          </div>
          <div className="col-sm-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-body-secondary p-3 rounded-3"
            >
              <div className="form-group">
                <label >Nombre de usuario</label>
                <input
                  type="text"
                  {...register('nombre', { required: true })}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                {errors.nombre && (
                  <span className="text-danger">El nombre es requerido</span>
                )}
              </div>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  {...register('correo', { required: true })}
                  className="form-control"
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
                  placeholder="Password"
                />
                {errors.correo && (
                  <span className="text-danger">La contraseña requerido</span>
                )}
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"> Confirmar Password</label>
                <input
                  type="password"
                  {...register('confirmar-contrasena', 
                    { required: "Por favor digita una contraseña", validate: (value) => value === contra || "Las contrasenas no coinciden" })}
                  className="form-control"
                  placeholder="Password"
                />
                {errors.confirmar-contraseña && (
                  <span className="text-danger">¨{errors.confirmar-contraseña.message}</span>
                )}
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-label">
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
  );</div>;
}


