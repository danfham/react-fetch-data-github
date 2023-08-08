import { useState } from "react";
import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [userData, setUserData] = useState({})

  return (
    <div>
      <Input setUserData={setUserData} />
    </div>
  );
}

export default App;
