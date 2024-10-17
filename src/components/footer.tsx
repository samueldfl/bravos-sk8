import InstagramIcon from '@/svgs/instagram-icon'
import WhatsappIcon from '@/svgs/whatsapp-icon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-10 px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-justify">
        <div>
          <h3 className="font-bold text-lg">Bravo Skates</h3>
          <p className="mt-2">
            Bem-vindo ao mundo da Bravo Skates! Nossa marca nasceu para celebrar
            o skate como um estilo de vida, oferecendo produtos inovadores e
            sustentáveis para skatistas de todos os níveis. Aqui, você encontra
            o que há de melhor para quem vive sobre quatro rodas!
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Nossa Missão</h3>
          <p className="mt-2">
            Na Bravo Skates, nosso propósito é simples: inspirar e apoiar a
            prática do skate, promovendo inclusão, sustentabilidade e inovação.
            Somos apaixonados pelo esporte e pela comunidade que o rodeia.
            Queremos que cada skatista sinta a liberdade e a expressão pessoal
            que o skate proporciona.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Expansão Digital</h3>
          <p className="mt-2">
            Com o crescimento do e-commerce, agora é ainda mais fácil encontrar
            nossos produtos. A Bravo Skates está presente nas maiores
            plataformas, como Amazon e Mercado Livre, além da nossa loja online,
            que oferece uma experiência de compra otimizada e segura.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg">Parcerias Estratégicas</h3>
          <p className="mt-2">
            Nossas parcerias com influenciadores locais reforçam nossa presença
            nas redes sociais. Acompanhe-nos no Instagram para ficar por dentro
            de todas as novidades, desde lançamentos de produtos até eventos e
            competições.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-6 text-center max-w-[1440px] flex flex-col mx-auto">
        <p className="font-bold">Eventos e Conexão com a Comunidade</p>
        <p className="mt-2">
          Adoramos apoiar a cena do skate no Brasil! Organizamos eventos,
          competições e workshops para fortalecer nossa comunidade e promover a
          cultura do skate.
        </p>
        <p className="mt-2">
          Quer saber quando será o próximo evento? Fique ligado no nosso site e
          redes sociais para não perder nenhum detalhe!
        </p>

        <p className="mt-4 font-bold">Conheça Nossa Linha de Produtos</p>
        <p className="mt-2">
          Seja você iniciante ou profissional, temos o produto certo para você!
          Explore nosso catálogo completo com shapes, trucks, rodinhas, roupas e
          acessórios que foram pensados para trazer qualidade e estilo ao seu
          rolê.
        </p>

        <p className="mt-6 text-sm">
          Fique conectado - Explore, compartilhe e faça parte desse movimento
          conosco!
        </p>
        <div className="flex mx-auto space-x-4 mt-3">
          <Link href="https://www.instagram.com/bravoskates/profilecard">
            <InstagramIcon />
          </Link>
          <WhatsappIcon />
        </div>
      </div>
    </footer>
  )
}
