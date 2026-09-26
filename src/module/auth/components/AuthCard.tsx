import Input from "./Input";
import Button from "./Button";
import { Mail, Lock, LockKeyhole } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export const AuthCard = () => {
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [transitionDirection, setTransitionDirection] = useState<
    "to-login" | "to-register"
  >("to-login");
  return (
    <div className="relative w-full max-w-[1040px] px-[56px] py-[48px] bg-surface rounded-2xl">
      <div className="flex justify-between">
        {/*LoginContent*/}
        {/*MainContent - separa Brand e Authbody*/}
        <div className="flex flex-col gap-[32px]">
          <img
            className="w-[171px] h-[36px]"
            src="src/assets/Logo_StreamX_Dark.png"
            alt="Logo StreamX"
          />
          <section className="flex w-[368px] flex-col gap-[24px]">
            {/*AuthIntro*/}
            <div className="flex flex-col gap-[12px]">
              <h1 className="font-heading font-bold text-3xl leading-[38px] text-text-on-brand tracking-widest">
                Bem-vindo(a){" "}
                <span className="block text-brand"> de volta!</span>
              </h1>
              <p className="font-body font-regular text-sm text-text-secondary leading-[21px] line-clamp-3">
                Entre para continuar assistindo, criar playlists, comentar e
                fazer parte da nossa comunidade.
              </p>
            </div>
            {/*AuthFlow*/}
            <div>
              {/*AuthActions - agrupa as ações de autenticação*/}
              <div className="flex flex-col gap-[12px]">
                <form className="flex flex-col gap-[12px]">
                  <div className="relative w-full bg-background rounded-md border border-border">
                    <Input
                      icon={<Mail size={16} />}
                      id="email"
                      type="email"
                      placeholder="Email"
                      autoFocus
                    />
                  </div>
                  <div className="relative w-full bg-background rounded-md border border-border">
                    <Input
                      icon={<Lock size={16} />}
                      id="password"
                      type="password"
                      placeholder="Senha"
                    />
                  </div>
                  <p className="font-body font-medium text-xs text-brand flex flex-col items-end cursor-pointer">
                    Esqueceu a Senha?
                  </p>
                  <Button type="submit" text="Entrar" />
                </form>
                {/*Divider*/}
                <div className="flex items-center">
                  <hr className="flex-1 border-0 border-t-2 border-border" />
                  <span className="font-body font-regular text-xs text-text-secondary">
                    Ou continue com
                  </span>
                  <hr className="flex-1 border-0 border-t-2 border-border" />
                </div>
                {/*GoogleButton*/}
                <div className="flex flex-col gap-[8px]">
                  <div className="flex justify-center items-center bg-background px-[16px] rounded-md border border-border">
                    <FcGoogle size={16} />
                    <Button
                      type="submit"
                      text="Continue com google"
                      className="bg-transparent px-[12px]"
                    />
                  </div>
                  <p
                    onClick={() => {
                      setAuthMode("register");
                      setTransitionDirection("to-register");
                    }}
                    className="font-body font-semibold text-xs text-text-secondary cursor-pointer"
                  >
                    Ainda não tem uma conta?
                    <span className="text-brand">Criar conta</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <footer className="flex w-[368px]">
            <p className="font-body font-semibold text-xs text-text-secondary leading-4 line-clamp-2">
              Ao continuar você concorda com nossos Termos de Uso e Política de
              Privacidade
            </p>
          </footer>
        </div>

        {/*RegisterContent*/}
        <div>
          {/*MainContent - separa Brand e Authbody*/}
          <div className="flex flex-col gap-[32px]">
            <img
              className="w-[171px] h-[36px]"
              src="src/assets/Logo_StreamX_Dark.png"
              alt="Logo StreamX"
            />
            <section className="flex w-[368px] flex-col gap-[24px]">
              {/*AuthIntro*/}
              <div className="flex flex-col gap-[12px]">
                <h1 className="font-heading font-bold text-3xl leading-[38px] text-text-on-brand tracking-widest">
                  Crie sua
                  <span className="block text-brand">conta</span>
                </h1>
                <p className="font-body font-regular text-sm text-text-secondary leading-[21px] line-clamp-3">
                  Entre para fazer parte da comunidade, descobrir novos
                  criadores e compartilhar o que você gosta.
                </p>
              </div>
              {/*AuthFlow*/}
              <div>
                {/*AuthActions - agrupa as ações de autenticação*/}
                <div className="flex flex-col gap-[12px]">
                  <form className="flex flex-col gap-[12px]">
                    <div className="relative w-full bg-background rounded-md border border-border">
                      <Input
                        icon={<Mail size={16} />}
                        id="email"
                        type="email"
                        placeholder="Email"
                        autoFocus
                      />
                    </div>
                    <fieldset className="flex flex-col gap-[12px]">
                      <div className="relative w-full bg-background rounded-md border border-border">
                        <Input
                          icon={<Lock size={16} />}
                          id="password"
                          type="password"
                          placeholder="Senha"
                        />
                      </div>
                      <div className="relative w-full bg-background rounded-md border border-border">
                        <Input
                          icon={<LockKeyhole size={16} />}
                          id="confirm-password"
                          type="password"
                          placeholder="Confirmar senha"
                        />
                      </div>
                    </fieldset>
                    <Button type="submit" text="Criar conta" />
                  </form>
                  {/*Divider*/}
                  <div className="flex items-center">
                    <hr className="flex-1 border-0 border-t-2 border-border" />
                    <span className="font-body font-regular text-xs text-text-secondary">
                      Ou crie com
                    </span>
                    <hr className="flex-1 border-0 border-t-2 border-border" />
                  </div>
                  {/*GoogleButton*/}
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex justify-center items-center bg-background px-[16px] rounded-md border border-border">
                      <FcGoogle size={16} />
                      <Button
                        type="submit"
                        text="Criar conta com google"
                        className="bg-transparent px-[12px]"
                      />
                    </div>
                    <p
                      onClick={() => {
                        setAuthMode("login");
                        setTransitionDirection("to-login");
                      }}
                      className="font-body font-semibold text-xs text-text-secondary cursor-pointer"
                    >
                      Já tem uma conta?
                      <span className="text-brand">Entrar</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <footer className="flex w-[368px]">
              <p className="font-body font-semibold text-xs text-text-secondary leading-4 line-clamp-2">
                Ao continuar você concorda com nossos Termos de Uso e Política
                de Privacidade
              </p>
            </footer>
          </div>
        </div>
      </div>
      {/*slidingPainel*/}
      <div
        className={`flex flex-col justify-center absolute top-0 left-0 transition-all duration-500 ease-in-out ${authMode === "login" ? "rounded-tl-[180px] rounded-bl-[180px] left-[calc(100%-560px)]" : "left-0 rounded-tr-[180px] rounded-br-[180px]"} w-[560px] h-full bg-background border border-border`}
      >
        <div className="grid relative">
          {/* Login */}
          <div
            className={`col-start-1 row-start-1 flex flex-col gap-[24px] pl-[96px] pr-[64px] py-[64px] ${authMode === "login" ? "pointer-events-auto" : "pointer-events-none"}`}
          >
            <div
              className={`transition-opacity duration-400 ease-in-out ${authMode === "login" ? "opacity-100" : "opacity-0"} ${transitionDirection === "to-login" ? "delay-[150ms]" : "delay-0"} flex flex-col gap-[12px]`}
            >
              <p className="font-body font-semibold text-xs text-text-secondary tracking-wider">
                MAIS QUE VÍDEOS
              </p>

              <h1 className="font-heading font-bold text-3xl leading-[38px] text-text-primary">
                Uma comunidade
                <span className="block text-brand">em movimento</span>
              </h1>

              <span className="font-body font-regular text-sm text-text-secondary leading-[21px]">
                Descubra novos criadores, explore conteúdos incríveis e
                compartilhe o que você ama.
              </span>
              <div>
                <Button
                  type="button"
                  text="Criar conta"
                  className="bg-transparent border border-brand px-[20px]"
                  onClick={() => {
                    setAuthMode("register");
                    setTransitionDirection("to-register");
                  }}
                />
              </div>
            </div>
          </div>

          {/* Register */}
          <div
            className={`col-start-1 row-start-1 flex flex-col gap-[24px] pl-[96px] pr-[64px] py-[64px] ${authMode === "login" ? "pointer-events-none" : "pointer-events-auto"}`}
          >
            <div
              className={`transition-opacity duration-400 ease-in-out ${authMode === "login" ? "opacity-0" : "opacity-100"} ${transitionDirection === "to-register" ? "delay-[150ms]" : "delay-0"} flex flex-col gap-[12px]`}
            >
              <p className="font-body font-semibold text-xs text-text-secondary tracking-wider">
                JÁ FAZ PARTE ?
              </p>

              <h1 className="font-heading font-bold text-3xl leading-[38px] text-text-primary">
                Bem-vindo(a)
                <span className="block text-brand">de volta!</span>
              </h1>

              <span className="font-body font-regular text-sm text-text-secondary leading-[21px]">
                Já tem uma conta? Continue de onde parou.
              </span>
              <div>
                <Button
                  type="button"
                  text="Entrar"
                  className="bg-transparent border border-brand px-[20px]"
                  onClick={() => {
                    setAuthMode("login");
                    setTransitionDirection("to-login");
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
