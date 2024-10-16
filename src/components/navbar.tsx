import InstagramIcon from '@/svgs/instagram-icon'
import WhatsAppIcon from '@/svgs/whatsapp-icon'
import Link from 'next/link'
import Image from 'next/image'
import AccountIcon from '@/svgs/account-icon'
import SearchBar from './search-bar'
import CartIcon from '@/svgs/cart-icon'

export default function Navbar() {
  return (
    <nav>
      <section className="hidden md:flex items-center mx-auto text-center text-white py-2 px-4 bg-orange-600 w-full justify-evenly">
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
            <WhatsAppIcon />
          </Link>
        </div>
      </section>
      <main className="flex mx-auto justify-evenly items-center px-4 bg-white h-40 shadow-lg space-x-10">
        <Image src="/imgs/logo.png" alt="" width={150} height={150} />

        <SearchBar />

        <div className="flex space-x-4">
          <AccountIcon />
          <CartIcon />
        </div>
      </main>
    </nav>
  )
}
