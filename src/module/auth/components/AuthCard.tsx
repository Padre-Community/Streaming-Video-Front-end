import Input from "./Input";
import Button from "./Button";
import { Mail, Lock } from "lucide-react";

export const AuthCard = () => {
  return (
    <div className="w-full max-w-[1040px] px-[56px] py-[48px] bg-surface rounded-2xl">
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
              Bem-vindo(a) <span className="block text-brand"> de volta!</span>
            </h1>
            <p className="font-body font-regular text-sm text-text-secondary leading-[21px] line-clamp-3">
              Entre para continuar assistindo, criar playlists, comentar e fazer
              parte da nossa comunidade.
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
                  />
                </div>
                <div className="relative w-full bg-background rounded-md border border-border">
                  <Input
                    icon={<Lock size={16} />}
                    id="email"
                    type="password"
                    placeholder="Senha"
                  />
                </div>
                <p className="font-body font-medium text-xs text-brand flex flex-col items-end">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
