import "./App.css";
import Button from "./module/auth/components/Button";
import Input from "./module/auth/components/Input";
function App() {
  return (
    <div className="flex justify-center flex-col m-24 px-24">
      <h1 className="text-5xl font-bold flex items-center mb-8 justify-center">
        Streaming Video Front-end esta rodando, pho 🚀
      </h1>
      <Input 
      id= "email"
      placeholder="digite seu email" />

      <Button text={"Login"} />
      <Button text={"Criar conta nova"} />
    </div>
  );
}

export default App;
