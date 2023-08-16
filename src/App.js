import { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [userData, setUserData] = useState(null)

  const userDisplay = userData && <Display userData={userData} />
  
  return (
    <div>
      <Input setUserData={setUserData} />
      {userDisplay}
    </div>
  );
}

export default App;
