import "./App.css";
import Button from "./module/auth/components/Button";

import Navbar from "./module/auth/components/Navbar";
import Input from "./module/auth/components/Input";
export default function App() {
  return (
    <div className="flex justify-center flex-col m-24 px-24 text-center  ">
      <Navbar/>
      <h1 className="text-5xl font-bold flex items-center mb-8 justify-center">
        Streaming Video Front-end esta rodando, pho 🚀
      </h1>
      <Input id="email" label={"E-mail "} placeholder={"digite seu email"} />
      <Button text={"Login"}/>
      <Button text={"Criando uma conta nova"}/>
      </div>
  )
      
}




