import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";



function Create() {
   
    const navigate=useNavigate();
    const[email,setemail]=useState();
    const[cname,setcname]=useState();
    const[cpword,setcpword]=useState();
    const[city,setcity]=useState();
    const[state,setstate]=useState();
    const[zip,setzip]=useState();
    let handclick=(e)=>{
        e.preventDefault();
        navigate('/login');
    }
    localStorage.setItem('Name',cname);
    localStorage.setItem('Pword',cpword);
  return (
    <div className='container' style={{marginRight:'10px'}}>
       
            <form>
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label for="inputEmail">Email</label>
                        <input type="text" className="form-control" id="inputEmail" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputUserName">UserName</label>
                        <input type="text" className="form-control" id="inputUserName" placeholder="UserName" onChange={(e)=>setcname(e.target.value)}/>
                    </div>
                </div>
                <div className="form-group col-md-3" >
                    <label for="inputPassword">Password</label>
                    <input type="text" className="form-control" id="inputPassword" placeholder="Password" onChange={(e)=>setcpword(e.target.value)}/>
                </div>
                
                <div className="form-row ">
                    <div className="form-group col-md-3">
                        <label for="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" onChange={(e)=>setcity(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputState">State</label>
                        
                        <input type="text" className="form-control" id="inputCity" onChange={(e)=>setstate(e.target.value)}/>
                       
                    </div>
                    <div className="form-group col-md-3">
                        <label for="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" onChange={(e)=>setzip(e.target.value)}/>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary" style={{marginLeft:'100px'}} onClick={handclick}>Create Account</button>
            </form>
            </div>
  )
}

export default Create
