import { useState } from "react";

import "../assets/global.css";

function LoginPages () {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handlerSubmit =  (e) =>{
    e.preventDefault();

    console.log('Login auth', {email,password});

  

  // const data ={
  //   email:email,
  //   password:password
  // };

  // try{
  //   const reponse =await fetch('',{
  //     method:'POST',
  //     headers:{ 
  //       'Content-Type':'application/json'
  //       },
  //       body:JSON.stringify(data)
  //   });

  //   const result =await reponse.json();
  //   console.log(result);
  // }catch (error){
  //   console.log('Error.',error);
  // }

}  
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handlerSubmit}>
            <span className="login-form-title"> Bem vindo </span>
            <span className="login-form-title">
            
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
               id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn" >
              <button 
              className="login-form-btn"
              
               >Login</button>
              
            </div>

        
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPages;
