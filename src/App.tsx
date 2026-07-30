import "./App.css";
import Button from "./module/auth/components/Button";
import Input from "./module/auth/components/Input";
import { Banner } from "./module/UI/components/Banner";
function App() {
  return (
    <div className="flex justify-center flex-col m-24 px-24">
      <h1 className="text-5xl font-bold flex items-center mb-8 justify-center">
        Streaming Video Front-end esta rodando, pho 🚀
      </h1>
      <Input id="email" label="email" placeholder="digite seu email" />

      <Button text={"Login"} />
      <Button text={"Criar conta nova"} />
      <Banner />
    </div>
  );
}

export default App;
