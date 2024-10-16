'use client'
import Image from 'next/image'

export interface SkateProps {
  name: string
  image: string
  price: number
}

export default function ProductBoard({ image, name, price }: SkateProps) {
  return (
    <section className="flex flex-col">
      <Image src={image} alt={name} width={100} height={0} />
      <span>{name}</span>
      <span>{`R$ ${price.toFixed(2)}`}</span>
    </section>
  )
}
