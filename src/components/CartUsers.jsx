import React from 'react'

export const CartUsers = ({user,deleteRegister,setupdateinfo,setshow,show}) => {

    const handledelete=(e)=>{
        deleteRegister(e.target.id)
    }

    const handleUptade=()=>{
        setupdateinfo(user)
        setshow(!show)
    }
   
  return (
    <div className='cart'>
        <h2 className='nombre'>{user.first_name} {user.last_name}</h2>
        <hr />
        <div className='info'>
            <p>Correo <br /> <span>{user.email}</span></p>
            <p>Cumpleaños <br /> <span>{user.birthday}</span></p>
        </div>
        <hr/>
        <div className='iconcart'>
            <i onClick={handledelete} id={user.id} className='bx bx-trash'></i>
            <i onClick={handleUptade} id={user.id} className='bx bx-pencil'></i>
        </div>

    </div>

  )
}
