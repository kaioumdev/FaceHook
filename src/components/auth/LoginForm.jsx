/* eslint-disable no-unused-vars */
import React from 'react'
import { useForm } from 'react-hook-form'
import Field from '../common/Field';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = (formData) => {
        console.log(formData);
    }
    return (
        <form className='border-b border-[#3F3F3F] pb-10 lg:pb-[60px]' onSubmit={handleSubmit(submitForm)}>
            <Field label="Email">
                <input
                    {...register("email", { required: "Email ID is Required" })}
                    className={`w-full rounded-md border border-[#CCCCCC]/[14%] bg-[#27292F]  p-1.5 focus:outline-none lg:p-3 ${!!errors.email ? "border-red-500" : "border-gray-200"}`}
                    type="email" name="email" id="email" />
            </Field>
        </form>
    )
}

export default LoginForm