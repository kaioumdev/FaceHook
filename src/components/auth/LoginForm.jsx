/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import Field from '../common/Field';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const submitForm = (formData) => {
        console.log(formData);
        navigate("/")
    }
    return (
        <form className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]' onSubmit={handleSubmit(submitForm)}>
            <Field label="Email" error={errors.email}>
                <input
                    {...register("email", { required: "Email ID is Required" })}
                    className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-[#27292F]  p-1.5 focus:outline-none lg:p-3 ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
                    type="email" name="email" id="email" />
            </Field>
            <Field label="Password" error={errors.password}>
                <input
                    {...register("password", { required: "Password is Required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })}
                    className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-[#27292F]  p-1.5 focus:outline-none lg:p-3 ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
                    type="password" name="password" id="password" />
            </Field>
            <Field label="Button">
                <button className='w-full rounded-md border border-[#CCCCCC]/[14%] p-1.5 focus:outline-none lg:p-3 bg-[#00D991] font-bold text-[#17181C] transition-all hover:opacity-90'>
                    Login
                </button>
            </Field>
        </form>
    )
}

export default LoginForm