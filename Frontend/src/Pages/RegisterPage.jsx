import { useAuth } from "../Context/AuthContext";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { useNavigate, Link } from 'react-router-dom';


function RegisterPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { sigup, isAuthenticated, errors: registerErrors } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <>
      <div className="flex h-[calc(100vh-100px)] items-center justify-center">
        <div className="bg-Darkred max-w-md p-10 rounded-md">
          {
            registerErrors.map((error, i) => {
              <div key={i} className="bg-Softorange p-2 text-white text-center"> {error} </div>
            })
          }

          <h1 className="text-3xl font-bold my-2"> Register </h1>

          <form onSubmit={handleSubmit(async (values) => {
            sigup(values);
          })}>

            <input className="w-full bg-Grayishblue text-black  px-4 py-2 rounded-md my-2"
              type="text" {...register('username', { required: true })} placeholder="Username" />
            {errors.username && (<p className="text-Softorange"> Username required </p>)}

            <input className="w-full bg-Grayishblue text-black  px-4 py-2 rounded-md my-2"
              type="email" {...register('email', { required: true })} placeholder="E-mail" />
            {errors.email && (<p className="text-Softorange"> Email required </p>)}

            <input className="w-full bg-Grayishblue text-black  px-4 py-2 rounded-md my-2"
              type="password" {...register('password', { required: true })} placeholder="Password" />
            {errors.password && (<p className="text-Softorange"> Password required </p>)}

            <button className="bg-Grayishblue hover:bg-Brown hover:text-Grayishblue text-black px-4 py-2 rounded-md my-2"> Register </button>

          </form>

          <p className="flex gap-x-2 justify-between">
            Already have an account? <Link className="text-Bgblue" to="/login"> Login </Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default RegisterPage;