import Image from 'next/image'
import AccountIcon from '@/svgs/account-icon'
import SearchBar from './search-bar'
import CartIcon from '@/svgs/cart-icon'

export default function Navbar() {
  return (
    <nav className="flex flex-col space-y-5 justify-center px-10 sticky top-0 mx-auto bg-white h-44 shadow-lg mb-8 z-50">
      <main className="flex mx-auto w-full justify-between items-center space-x-6 max-w-[1440px]">
        <Image src="/imgs/logo.png" alt="logo" width={150} height={150} />

        <div className="hidden sm:flex items-center w-[50%]">
          <SearchBar />
        </div>

        <div className="flex space-x-6">
          <AccountIcon />
          <CartIcon />
        </div>
      </main>

      <div className="flex sm:hidden items-center w-full">
        <SearchBar />
      </div>
    </nav>
  )
}
