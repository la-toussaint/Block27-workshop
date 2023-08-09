 import { useState } from "react";

 export default function SignUpForm({setToken})  { 
 const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  

  async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await fetch ("https://fsa-jwt-practice.herokuapp.com/signup", {
          method: 'POST',
          body: JSON.stringify ({username, password}),        
      }); 
          const result = await response.json()
          console.log(result);
          setToken(result.token)
        } catch (error) {
        setError(error.message)
        }
      }
  return (
        <>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
    <form onSubmit={handleSubmit}>
        <label> 
            Username: {""} <br/>
            <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            /><br/>
        </label>
        <label>
          Password: {""} <br/>
          <input type="password" 
                 value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                /> <br/>
        </label>
        <br/>
                <button type= "submit">Submit</button> 
                
                </form>
                { ! (username.length >= 8) && <p style={{color: 'black'}}>
                  No more than 8 characters 
                  </p>
                }
                </>
  ); 
  }     


