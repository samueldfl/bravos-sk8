import InstagramIcon from '@/svgs/instagram-icon'
import Whatsapp from '@/svgs/whatsapp-icon'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <section className="hidden md:flex mx-auto text-center text-white p-2 bg-orange-600 w-full justify-evenly">
        <span>Olá, seja bem-vindo(a)!</span>
        <span className="font-bold text-sm mx-5">
          FRETE GRÁTIS | COMPRAS A PARTIR DE R$299,99 PARA NORTE NORDESTE E DE
          R$499,99 PARA SUL SUDESTE
        </span>
        <div className="flex space-x-3">
          <Link href="#">
            <InstagramIcon />
          </Link>

          <Link href="#">
            <Whatsapp />
          </Link>
        </div>
      </section>
      <main className="flex mx-auto justify-center items-center bg-white w-full h-40 shadow-lg">
        <div>LOGO</div>
      </main>
    </nav>
  )
}
