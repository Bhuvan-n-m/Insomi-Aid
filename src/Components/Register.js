import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Register = () => {
  const navigate = useNavigate();
  // const nav = (e) =>{
  //   e.preventDefault();
  //   navigate('/login');
  // }
    const [Input, setInput] = useState({
      email : "",
      password : "",
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      if(Input.email!=""&&Input.password!=""){
      localStorage.setItem("user", JSON.stringify(Input));
      navigate('/login');
      }
      else{
        alert("Please enter a non empty email and password");
      }
    }
    
  //const [regpassword, setregPassword] = useState("");
  return (
    <div class="background">
    <div align='center'>
    <div className='container'>
      
      
      
      <form className='box' action="" onSubmit={handleSubmit}>
        <div className='loginstart'>
          <h2>
            REGISTER PAGE
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
          Register
        </button>
        <a href='/login'>Already Registered?</a>
        
      </form>
      
      
      
      
      
    </div>
        //</div>
    //</div>
  )
}

export default Register