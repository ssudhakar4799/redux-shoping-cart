import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LoginDetails from "../Logindetails/LoginDetails.json"
import { login } from '../Store/Redux/auth/action'
export default function Login() {
    const[error,setEror]=useState("")
    const state = useSelector((state)=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(state);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onsubmit = (data) => {
        LoginDetails.map((datas) => {
            if (datas.userName == data.email && datas.password == data.password) {
                navigate("/Home")

                dispatch(login(true))
                
            }
            else {
                setEror("Enter Your Corect Email (or) Password")
            }

        })


    }
    return (
        <div className='row container'>
            <form onSubmit={handleSubmit(onsubmit)}>
            <div className='col'>
            <span><input type="radio"></input>USER LOGIN</span>
            <span><input type="radio"></input>ADMIN LOGIN</span>
            </div>
                <div className='col'>
                    <input placeholder='Enter Your Email' type="text"
                        {...register("email", {
                            required: "Email is Required",
                            pattern: {
                                value:
                                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Please enter a valid email",
                            },
                        })}
                    ></input>
                </div>
                <div className='text-danger'>{errors.email?.message} </div>
                <div className='col'>
                    <input placeholder='Enter Your User Name' type="password"
                        {...register("password", {
                            required: "password is Required",
                            maxLength: {
                                value: 15,
                                message: "must be max 15 chars",
                            },
                            validate: (value) => {
                                return (
                                    [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                                        pattern.test(value)
                                    ) ||
                                    "cannot special chars, only lower, upper, number"
                                );
                            },
                        })}
                    ></input>
                </div>
                <div className='text-danger'>{errors.password?.message} </div>
                <div className='text-danger'>{error} </div>
                <div className='col'>
                    <button type='submit' className='bg-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}
