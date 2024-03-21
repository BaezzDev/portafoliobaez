import Hero from './components/Hero'
import Header from './components/Header'
import Image from 'next/image';


function page() {
  return (
    <>
      <Header />
      <main className="relative h-full w-full">
        <Hero />
       </main>
       <p >A</p>
       <footer className="relative top-10">
        <p>Y si hago esto?</p>
       </footer>
    </>
  )
}

export default page