import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate2 = useNavigate();
  const [usname,setuname] = useState();
  const [pword,setpword] = useState();
  const create = () => { 
  navigate2('/register')
  }
let open = (e) => {
  e.preventDefault();
  console.log(localStorage.getItem('Name'))
  console.log(usname)
  console.log(pword)
  if (usname === localStorage.getItem('Name') && pword === localStorage.getItem('Pword')) {
    navigate2('/dashboard');
  } else {
    alert("credentials not matched")
  }
}
return (
  <div>
    <form>
      <center><div class="col-md-3" >
        <label for="exampleInputUserName" class="form-label"  >User Name</label>
        <input type="text" class="form-control" id="exampleInputUserName" onChange={(e)=>setuname(e.target.value)}/>

      </div>
        <div class="col-md-3">
          <label for="exampleInputPassword1" class="form-label" >Password</label>
          <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e)=>setpword(e.target.value)}/>
        </div>

        <button type="submit" class="btn btn-primary" style={{ margin: '10px' }} onClick={open}>Submit</button>
        <button type="submit" class="btn btn-primary" style={{ margin: '10px' }} onClick={create}>Create</button></center>
    </form>
  </div>




)
}

export default Login
