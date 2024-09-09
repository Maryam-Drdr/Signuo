import './Signup.css';
import { useState } from "react";
import config from "../../Constant/environment";
import usePost from "../../customHooks/usePost";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repeat, setRepeat] = useState("");
  const [accept, setAccept] = useState(false);

  const [handleClick] = usePost(config.endPoint, {
    name: name,
    email: email,
    passWord: pass,
    passWord_confiramation: repeat
  })
    

  const handleSubmit = (e) => {
    e.preventDefault()
    setAccept(true)
    handleClick()
    
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">User Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name === '' && accept && (<p className="error">You must enter your name</p>)}
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
        <label htmlFor="repet">Repeat PassWord:</label>
        <input
          type="password"
          placeholder="Enter your password"
          id="repet"
          value={repeat}
          onChange={(e) => setRepeat(e.target.value)}
        />
        {repeat !== pass && accept && (<p className="error">repeatpassword must be same the password</p>)}
        <div className="btn">
            <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
