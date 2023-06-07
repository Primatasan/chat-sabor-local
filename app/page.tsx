import Link from "next/link";

export default function Home() {

  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-white text-center">
      <h3 className="text-2xl text-gray-950	font-bold">
        Integração com ChatGPT para o app <span className="saborlocal">Sabor Local</span>
      </h3>
       <p className="text-md text-gray-950 mt-4 w-9/12	 text-center">
        O <span className="saborlocal">Sabor Local</span> foi criado para facilitar a conexão direta entre produtores locais de alimentos e consumidores, eliminando intermediários e promovendo a transparência, a sustentabilidade e a segurança alimentar. 
      </p>
      <p className="text-md text-gray-950 mt-4 w-9/12	 text-center">
        Uma de suas funcionalidades é justamente o uso de IA para fornecer recomendações de receitas que atendam aos requisitos dietéticos individuais, preferências de sabor e restrições alimentares, etc.
      </p>
      <p className="text-md text-gray-950 mt-4 w-9/12	 text-center">
        Para isso, utilizamos o repositório <span className="saborlocal">nextjs-chatgpt-plugin-starter</span> que permite uma integração entre uma conta do ChatGPT e uma aplicação em NextJS.
      </p>
    </main>
  );
}
