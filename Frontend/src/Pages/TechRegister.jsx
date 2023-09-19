import { useAuth } from "../Context/AuthContext";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

function TechRegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { sigupTecnico, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/techProfile");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-Darkred max-w-md p-10 rounded-md">
        {
          registerErrors.map((error, i) => {
            <div key={i} className="bg-Softorange  p-2 text-white text-center"> {error} </div>
          })
        }

        <h1 className="text-3xl font-bold my-2"> Registro Tecnico </h1>

        <form onSubmit={handleSubmit(async (values) => {
          sigupTecnico(values);
        })}>

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="text" placeholder="Nombre Completo" {...register('name', { required: true })} />
          {errors.name && (<p className="text-Softorange"> Your name is required </p>)}

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="email" placeholder="correo" {...register('email', { required: true })} />
          {errors.email && (<p className="text-Softorange"> Email is required </p>)}

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="password" placeholder="Contraseña" {...register('password', { required: true })} />
          {errors.password && (<p className="text-Softorange"> Password is required </p>)}

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="number" placeholder="Numero Movil" maxLength={10} {...register('number', { required: true })} />
          {errors.number && (<p className="text-Softorange"> Number is required </p>)}

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="text" placeholder="Direccion" {...register('direccion', { required: true })} />
          {errors.direccion && (<p className="text-Softorange"> Your direction is required </p>)}

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="text" placeholder="Profesion" {...register('profesion', { required: true })} />
          {errors.profesion && (<p className="text-Softorange"> Your profession is required </p>)}

          <input className="w-full bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="text" placeholder="Ciudad" {...register('ciudad', { required: true })} />
          {errors.ciudad && (<p className="text-Softorange"> Your city is required </p>)}

          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="number" placeholder="Codigo Postal" maxLength={6} {...register('postal', { required: true })} />
          {errors.postal && (<p className="text-Softorange"> Your Postal code is required </p>)}



          <label> Sube tu hoja de vida </label>
          <input className="w-full  bg-Grayishblue text-black px-4 py-2 rounded-md my-2"
            type="file" {...register('file')} />


          <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2"> Register </button>

        </form>

        <p className="flex gap-x-2 justify-between">
          Already have an account? <Link className="text-Bgblue" to="/login"> Login </Link>
        </p>

      </div>
    </div>
  );
};

export default TechRegisterPage;