import Image from 'next/image'

export interface SkateProps {
  name: string
  image: string
  price: number
}

export default function ProductBoard({ image, name, price }: SkateProps) {
  return (
    <section className="flex flex-col md:flex-row justify-center-center py-8 mb-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto w-[90%] border-gray-800 items-center">
      <div>
        <Image
          src={image}
          alt={name}
          width={300}
          height={0}
          className="rounded-lg"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-0 md:ml-6">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-lg font-semibold text-gray-700">{`R$ ${price.toFixed(
          2
        )}`}</p>
        <button className="mt-4 px-4 py-2 bg-orange-600 text-white font-bold rounded hover:bg-orange-500">
          Comprar Agora
        </button>
      </div>
    </section>
  )
}
