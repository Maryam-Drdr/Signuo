import './Login.css';
import { useState } from "react";
import config from "../../Constant/environment";
import usePost from "../../customHooks/usePost";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [accept, setAccept] = useState(false);

  const [handleClick] = usePost(config.endPoint, {
    email: email,
    passWord: pass,
  })
    

  const handleSubmit = (e) => {
    e.preventDefault()
    handleClick()
    setAccept(true)
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="pass">PassWord:</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {pass.length < 8 && accept && (<p className="error">password must be more than 8 char</p>)}
        
        <div className="btn">
            <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
