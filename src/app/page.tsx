import Image from 'next/image'
export default function Home() {
  return (
    <main className="flex justify-center">
      <Image
        src="/imgs/home-image.png"
        alt="home-banner"
        width={1440}
        height={1280}
      />
    </main>
  )
}
