import Input from "./Input";

export default function Navbar() {
  return <header>
    <nav className="flex justify-between ">
      <img src="logo.png" alt="logo" />
      <Input  label="" placeholder="procurar video..." />
      
      
      <button className="flex justify-between">
        
        publicar video
        
        
      </button>

      <img src="Avatar.png" alt="avatar" />
    </nav>
  </header>
}