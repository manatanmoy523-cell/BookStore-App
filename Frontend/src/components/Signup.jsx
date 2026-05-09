import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        toast.success('signup successful');
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
     if(err.response){
       console.log(err);
      toast.error("error: " + err.response.data.message);
     }
    })
    navigate("/", { state: { openLogin: true } });
  };

  return (
    <div className='flex h-screen items-center justify-center dark:text-black'>
      <dialog id="signup_modal" className="modal modal-open">
        <div className="modal-box">

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Close button */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            {/* Name */}
            <div className='mt-4 space-y-2'>
              <span>Name</span><br />
              <input
                type="text"
                placeholder='Enter your full name'
                className='w-80 px-3 border rounded-md outline-none py-1'
                {...register("fullname", { required: true })}
              /><br/>
              {errors.fullname && (
                <span className='text-red-500 text-sm'>Name is required</span>
              )}
            </div>

            {/* Email */}
            <div className='mt-4 space-y-2'>
              <span>Email</span><br />
              <input
                type="email"
                placeholder='Enter your email'
                className='w-80 px-3 border rounded-md outline-none py-1'
                {...register("email", { required: true })}
              /><br/>
              {errors.email && (
                <span className='text-red-500 text-sm'>Email is required</span>
              )}
            </div>

            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span><br />
              <input
                type="password"
                placeholder='Enter your password'
                className='w-80 px-3 border rounded-md outline-none py-1'
                {...register("password", { required: true })}
              /><br/>
              {errors.password && (
                <span className='text-red-500 text-sm'>Password is required</span>
              )}
            </div>

            {/* Buttons */}
            <div className='flex justify-around mt-4'>
              <button
                type="submit"
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Signup
              </button>

              <span>
                Have account?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/", { state: { openLogin: true } })}
                  className='underline text-blue-500 cursor-pointer'
                >
                  Login
                </button>
              </span>
            </div>

          </form>

        </div>
      </dialog>
    </div>
  );
};

export default Signup;