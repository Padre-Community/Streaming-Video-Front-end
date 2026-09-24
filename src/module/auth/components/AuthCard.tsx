import Input from "./Input";
import Button from "./Button";
import { Mail, Lock, LockKeyhole } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export const AuthCard = () => {
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
                  <p className="font-body font-semibold text-xs text-text-secondary cursor-pointer">
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
                    <p className="font-body font-semibold text-xs text-text-secondary cursor-pointer">
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
      <div className="flex flex-col justify-center absolute top-0 right-0 w-[560px] h-full bg-background border border-border">
        <div className="flex flex-col gap-[24px] pl-[96px] pr-[64px] py-[64px]">
          <div className="flex flex-col gap-[12px]">
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
          </div>
          <div>
            <Button
              type="button"
              text="Criar conta"
              className="bg-transparent border border-brand px-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
