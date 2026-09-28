import Button from "../components/Button";
import Input from "../components/Input";
import { useTheme } from "../../../hooks/useTheme";
import { useState } from "react";
import { AtSign } from "lucide-react";

export const Username = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!username.trim()) {
      setError("Digite um nome de usuário.");
      return;
    }

    if (username.trim().length < 3) {
      setError("O nome de usuário deve ter pelo menos 3 caracteres.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log("User salvo:", username);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-surface w-full max-w-140 px-12 py-12 rounded-2xl border border-border ">
        {/**ProfileContent*/}
        <div className="flex flex-col gap-8">
          <img
            className="w-42.75 h-9"
            src={
              theme === "dark"
                ? "src/assets/Logo_StreamX_Dark.png"
                : "src/assets/Logo_StreamX_Light.png"
            }
            alt="Logo StreamX"
          />
          <div className="flex flex-col gap-2.5">
            <h1 className="font-heading font-bold text-3xl text-text-primary tracking-widest">
              Crie sua identidade
              <span className="block text-brand">na comunidade</span>
            </h1>
            <p className="font-body font-semibold text-md text-text-primary">
              Escolha como as pessoas vão encontrar você dentro da StreamX.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center bg-background border border-border rounded-md">
                <Input
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  icon={<AtSign size={16} />}
                  id="username"
                  type="text"
                  placeholder="nome-de-usuario"
                  autoFocus
                />
              </div>
              <div>
                {error ? (
                  <p className="font-body font-medium text-sm text-red-500">
                    {error}
                  </p>
                ) : (
                  <p className="font-body font-medium text-sm text-text-secondary">
                    Esse será seu identificador público na StreamX
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <Button
                type="submit"
                text={loading ? "verificando..." : "Continuar"}
                disabled={loading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
