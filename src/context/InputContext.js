import React, { useState } from "react";
import App from "../App"
let inputObj = JSON.parse(localStorage.getItem("user")) || {
    name: "",
    email: "",
    phone: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
  }
export const multiContext = React.createContext();
const InputContext = () => {
  const [info, setInfo] = useState(inputObj);
  return <div>
    <multiContext.Provider value={{info,setInfo}}>
        <App />
    </multiContext.Provider>
  </div>;
};

export default InputContext;
