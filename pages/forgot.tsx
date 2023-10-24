import type { NextPage } from "next";
import Link from "next/link";
import { InputText, Button, PageHead } from "../components";

const Forgot: NextPage = () => {
  return (
    <>
      <PageHead title="Recuperar Senha" description="Sistema de Delivery" />
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="bg-indigo-100 md:basis-full lg:basis-4/12 rounded-r-3xl">
          [imagem]
        </div>
        <div className="lg:basis-8/12 flex">
          <div className="max-w-2xl w-4/5 m-auto">
            <h1 className="font-bold text-4xl mb-3">Bem vindo!</h1>
            <p className="text-slate-700 mb-14">
              Autentique-se para continuar usando o serviço.
            </p>
            <InputText
              label="Endereço de E-mail"
              type="email"
              placeholder="Informe seu e-mail"
            />
            <InputText
              label="Senha"
              type="password"
              placeholder="Informe a senha"
            />
            <Button className="bg-indigo-200 w-full p-4 text-xl text-indigo-600">
              Continuar
            </Button>
            <div className="block text-center p-6">
              <Link href="/login">
                <a className="mt-6 text-slate-600 mb-6 hover:text-slate-900">
                  Voltar para o login
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgot;
