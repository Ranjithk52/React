import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import ApiDashBoard from './ApiDashBoard'
import Create from './Create'
import ItemList from './ItemList'
import Login from './Login'



function NavBar() {
  return (
    <div>
      <BrowserRouter>
    <button className='btn btn-info' ><Link to='/login'>Signin</Link></button>
      
    
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Create/>}/>
        <Route path='/dashboard' element={<ApiDashBoard/>}/>
        <Route path='/itemlist' element={<ItemList/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default NavBar
