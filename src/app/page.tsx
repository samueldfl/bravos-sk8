import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <Image
        src="/imgs/home-banner.png"
        alt="home-banner"
        width={1280}
        height={0}
      />
    </main>
  )
}
