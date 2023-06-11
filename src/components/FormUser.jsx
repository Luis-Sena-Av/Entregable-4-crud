import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUser = ({createRegister,updateinfo,show,setshow}) => {

    const {register,reset,handleSubmit}=useForm()

    useEffect(()=>{
        reset(updateinfo)
    },[updateinfo])
    

    const submit=(data)=>{
        createRegister(data)
        reset({
            email:"",
            password: "",
            first_name: "",
            last_name:"",
            birthday:"",    
        })
    }

    const handleshow=()=>{
        setshow(!show)
    }

  return (
    <div className={`modalform ${show && 'close'}`}>
        
        <form className='form' onSubmit={handleSubmit(submit)} >
        <i onClick={handleshow} className='bx bx-x'></i>
        <div className='formUser'>
        <h2>Nuevo usuario</h2>
            <li>Nombre<input {...register('first_name')} id='first_name' type="text" required/></li>
            <li>Apellidos<input {...register('last_name')} id='last_name' type="text" required/></li>
            <li>Correo<input {...register('email')} id='email' type="email" required/></li>
            <li>Contraseña<input {...register('password')} id='password' type="password" required/></li>
            <li>Cumpleaños<input {...register('birthday')} id='birthday' type="date" required /></li>
            <button>enviar</button>
        </div>            
        </form>
    </div>
  )
}

export default FormUser