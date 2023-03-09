import { register } from "./firebase";
import { useState } from "react";

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.prevent.default()
    const user = await register(email, password)
    console.log(user);
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
