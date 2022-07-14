import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState, useRef } from 'react'
   // @ts-ignore: Unreachable code error
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { ItemCard } from '../src/components/ItemCard'
import { FurnitureProps } from '@/components/types';


const Home: NextPage = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if(!vantaEffect){
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          // color: 0x2e9d89,
          color: 0x88267,
          shininess: 37.00,
          waveHeight: 21.50,
          waveSpeed:  0.55,
          zoom: 1.09,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    }
  },[vantaEffect])


  // add some database 
  const furniture:FurnitureProps[] = [{
    id: 1,
    name: "chairs",
    img: "/images/chair.jpg",
    price: "95$",
  },
  {
    id: 2,
    name: "tables",
    img: "/images/table.jpg",
    price: "185$",
  },
  {
    id: 3,
    name: "lamps",
    img: "/images/lamp.jpg",
    price: "65$",
  },
]

  return (
    <div className='w-screen h-screen'>
      <main className='h-screen relative flex-1'>
        <section className='w-screen h-4/5 flex flex-column py-12 bg-slate-500' ref={vantaRef}>
          <header className='w-screen py-4 px-6 my-auto text-center text-white'>
            <h1 className='mb-4 text-4xl font-bold'>3D FURNITURE</h1>
            <h2 className='italic text-2xl'>Find your perfect match!</h2>
          </header>
        </section>
        <div>
          <h1 className='text-3xl text-center my-8 text-zinc-600'>Products:</h1>
          {furniture.map(item => <ItemCard key={item.id} item={item}/>)}
        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home