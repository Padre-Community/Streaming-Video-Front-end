<<<<<<< HEAD
import AppRoutes from "./routes/index.tsx";
=======
import "./App.css";
import Button from "./module/auth/components/Button";
import Input from "./module/auth/components/Input";
import Navbar from "./module/auth/components/Navbar";
function App() {
  return (
    <div className="flex justify-center flex-col m-24 px-24">

      <Navbar />
      <h1 className="text-5xl font-bold flex items-center mb-8 justify-center">
        Streaming Video Front-end esta rodando, pho 🚀
      </h1>
      <Input 
      id= "email"
      label= "email"
      placeholder="digite seu email" />
>>>>>>> 02f7be26c0436c73468f84c201e3b1453c27d43d

function App() {
  return <AppRoutes />;
}

export default App;
