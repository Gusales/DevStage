import logo from '@/assets/logo.svg';
import { SendButton } from '@/components/button';
import { InputContainer, InputField, InputIcon } from '@/components/input';
import { Mail, Radio, User2 } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  return (
   <div>
    <header className="w-full flex flex-col items-center gap-5">
      <Image src={logo} alt="DevStage Logo" className="w-[86.8px] h-6"/>

      <div className="text-4xl leading-tight font-semibold text-center">
        <h1 className="text-blue">CodeCraft</h1>
        <h2>Summit 2025</h2>
      </div>

    </header>

    <main className="mt-10 space-y-4">
      <section className="bg-gray-700 rounded-2xl p-6 flex flex-col gap-6 border border-gray-600">
        <header className="w-full flex justify-between items-center">
          <h3 className="text-gray-200 text-xl leading-none font-semibold">Sobre o evento</h3>
          <p className="flex items-center gap-2 text-purple uppercase font-semibold leading-relaxed"><Radio /> ao vivo</p>
        </header>

        <p className="text-gray-300 text-sm leading-relaxed">
        Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons. <br />
        Dias 15 a 17 de março | Das 18h às 21h
        </p>
      </section>

      <form action="" className="bg-gray-700 rounded-2xl p-6 flex flex-col gap-6 border border-gray-600">
        <h3 className="text-gray-200 text-xl leading-none font-semibold">Incrição</h3>

        <InputContainer>
          <InputIcon>
            <User2 />
          </InputIcon>
          <InputField type="text" placeholder="Nome Completo" />
        </InputContainer>

        <InputContainer>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="E-mail" />
        </InputContainer>

        <SendButton>
          Enviar
        </SendButton>
      </form>
    </main>
   </div>
  );
}
