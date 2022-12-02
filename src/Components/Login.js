import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [Input, setInput] = useState({
      email : "",
      password : "",
    });
    const handleLogin = (e) =>{
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if(Input.email!=""&&Input.password!=""){
        if(Input.email === loggeduser.email && Input.password === loggeduser.password){
            navigate("/home")
        }
        else{
            alert("Wrong email or password");
        }
      }
      else{
        alert("Please enter a non empty email and password");
      }
    }
  return (
    <div class="background">
    <div align='center'>
    <div className='container'>
      
      
      
      <form className='box' action="" onSubmit={handleLogin}>
        <div className='loginstart'>
          <h2>
            LOGIN PAGE
          </h2>
        </div>
        <div>
          
          <label htmlFor="email">Email</label>
          <input className='info' type="text" name="email" id="email" autoComplete="off" value={Input.email} 
          onChange={(e) => 
          setInput({
            ...Input,
            [e.target.name] : e.target.value})
            }
            />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input className='info' type="password" name="password" id="password" autoComplete="off" value={Input.password} 
          onChange={(e) => 
          setInput({
            ...Input,
            [e.target.name] : e.target.value})
            }
            />
        </div>

        <button className='info' type="submit">
          Login
        </button>
        <a href="/">Not Registered?</a>
      </form>
      
    </div>
        //</div>
    //</div>
  )
}

export default Login