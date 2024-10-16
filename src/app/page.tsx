'use client'
import ProductBoard, { SkateProps } from '@/components/product-board'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [skates] = useState<SkateProps>({
    name: 'skate',
    image: '/imgs/skate-image.jpeg',
    price: 115.0,
  })
  return (
    <main className="flex flex-col justify-center items-center">
      <Image
        src="/imgs/home-banner.png"
        alt="home-banner"
        width={1280}
        height={0}
        className="mb-14"
      />

      <ProductBoard
        name={skates.name}
        image={skates.image}
        price={skates.price}
      />
    </main>
  )
}
