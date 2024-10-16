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
      <section className="hidden md:flex  text-center text-white py-2 px-4 bg-orange-600 w-full">
        <div className="flex mx-auto w-full justify-between items-center max-w-[1440px]">
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
        </div>
      </section>
      <main className="flex  flex-col justify-center items-center h-40 shadow-lg px-4 space-y-4">
        <div className="flex mx-auto w-full justify-between space-x-12 min-w-[1280px]:space-x-0 items-center max-w-[1440px]">
          <Image src="/imgs/logo.png" alt="" width={150} height={150} />

          <div className="hidden sm:flex items-center w-[50%]">
            <SearchBar />
          </div>

          <div className="flex space-x-6">
            <AccountIcon />
            <CartIcon />
          </div>
        </div>
        <div className="flex sm:hidden items-center w-full">
          <SearchBar />
        </div>
      </main>
    </nav>
  )
}
