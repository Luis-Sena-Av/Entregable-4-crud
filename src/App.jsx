import { useEffect, useState, useSyncExternalStore } from 'react'
import './App.css'
import { useFecth } from './hooks/useFecth'
import { CartUsers } from './components/CartUsers'
import FormUser from './components/FormUser'

function App() {
  
  const baseUrl="https://users-crud.academlo.tech/"
  const [infoApi,createRegister,readApi,updateRegister,deleteRegister]=useFecth(baseUrl)
  const [show, setshow] = useState(true)
  const [updateinfo, setupdateinfo] = useState({})
  
  useEffect(()=>{
    readApi()
  },[])  

  const handleshow=()=>{
    setshow(!show)
    setupdateinfo({
      email:"",
      password: "",
      first_name: "",
      last_name:"",
      birthday:"",    
    })
  }

  return (
    <div >      
     
       <div className='principal'>
        <div className='primer'>
        <div className='addUser'>
          <h2>Usuarios</h2>        
          <button className='new' onClick={handleshow}><i className='bx bx-plus'></i> Crear un nuevo usuario</button>
        </div>
        </div>
        

        <div className='contencart'>
         {infoApi?.map(user=><CartUsers show={show} setshow={setshow} user={user} key={user.id} deleteRegister={deleteRegister} setupdateinfo={setupdateinfo}/>)}
        </div>        
      </div>

      <FormUser show={show} setshow={setshow} createRegister={createRegister} updateinfo={updateinfo} />
    
    </div>
  )
}

export default App
