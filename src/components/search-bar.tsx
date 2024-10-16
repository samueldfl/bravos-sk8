import SearchIcon from '@/svgs/search-icon'

export default function SearchBar() {
  return (
    <div className="flex justify-center focus:ring-orange-600 items-center relative w-[50rem]">
      <input
        type="text"
        placeholder="Digite aqui..."
        className="pl-4 border rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
      <button className="bg-orange-600 rounded-r-md h-full absolute right-0 p-[0.55rem]">
        <SearchIcon />
      </button>
    </div>
  )
}
