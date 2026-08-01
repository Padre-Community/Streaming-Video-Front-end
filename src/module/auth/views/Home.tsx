import Button from "../components/Button.tsx";

export default function Home() {
    return (
        <div className="flex justify-center flex-col m-24 px-24 text-center  ">
            <div className="flex justify-center items-center gap-10 mb-10">
                <a href="/home" className="text-5xl font-bold underline">Home</a>
                <a href="/dashboard/perfil" className="text-5xl font-bold underline">Perfil</a>
            </div>

            <h1 className="text-5xl font-bold flex items-center mb-8 justify-center">
                Streaming Video Front-end esta rodando, pho 🚀
            </h1>

            <Button text={"Login"}/>
            <Button text={"Criar conta nova"}/>
        </div>
    );
}