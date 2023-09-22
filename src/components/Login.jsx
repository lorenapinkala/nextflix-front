import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import {loginUser} from "../state/ userActions"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = ({user}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitLogin = async (data) => {
    const { confirm, ...cleanedData } = data;
    dispatch(loginUser(cleanedData));
  };

 useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='bg-zinc-500 h-[calc(100vh-5rem)] w-full flex flex-col justify-center items-center'>
      <form className=' w-1/3  flex flex-col items-center' onSubmit={handleSubmit(onSubmitLogin)}>
          <h4 className='pb-7 text-black'>Log in and enjoin your favorite movies!</h4>


          <input type='text' placeholder='email' className='w-full mb-3 p-2 rounded' {...register("email", {
            required: { value: true, message: "email is required" }, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "format is incorrect, it should be an email"
            }
          })}
          />
          {errors.email && <p className='text-red-900' role="alert">{errors.email?.message}</p>}


          <input type='password' placeholder='password' className='mt-5 w-full p-2 rounded' {...register('password', { minLength: { value: 4, message: "it should have at least 4 characters" }, required: { value: true, message: "password is required" } })} />
          {errors.password && <p className='text-red-900' role="alert">{errors.password?.message}</p>}

          <button type='submit' className='mt-12 shadow bg-stone-700 hover:bg-stone-700 focus:shadow-outline rounded w-full text-white px-3 py-4'>
            Log in!
          </button>
        </form>
    </div>
  )
}

export default Login