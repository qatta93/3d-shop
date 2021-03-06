import React, { useState } from 'react'
import Lights from './Lights';
import Model from './Model';
import { Canvas } from '@react-three/fiber';
import ModelTop from './ModelTop';

export const ProductCard = (item) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showModel, setShowModel] = useState<number>(1);

  const top = 'true';

  return (
    <div className="w-full mb-12 border-1 bg-white border-indigo-600 shadow-xl md:w-[600px] xl:w-[500px] xl:mx-12 md:rounded-xl cursor-pointer">
      {showModel === 1 &&      
      <section className='relative w-full h-full h-60' onClick={() => setShowDetails(!showDetails)}>
        <Canvas camera={{ position: [0, 0, 300]}} > 
          <Lights />
          <Model id={item.item.id} item={item.item}/>
        </Canvas>
        <img src="/images/loupe.png" alt="loupe" className='opacity-30 w-12 absolute bottom-4 right-4' />
      </section>}
      {showModel === 2 &&      
      <section className='relative w-full h-full h-60' onClick={() => setShowDetails(!showDetails)}>
        <Canvas camera={{ position: [10, 500, 300]}} > 
          <Lights />
          <ModelTop id={item.item.id} item={item.item}/>
        </Canvas>
        <img src="/images/loupe.png" alt="loupe" className='opacity-30 w-12 absolute bottom-4 right-4' />
      </section>}
      {showModel === 3 &&
        <section className="relative w-full h-full h-60">
          <iframe className="relative w-full h-full h-60" title="Comfy Chair" frameBorder="0" allowFullScreen allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src={item.item.embed} />
        </section>
      }
      <section className='flex justify-center my-4'>
        <img src={showModel === 1 ? "images/circle_full.png" : "images/circle.png"} alt="circle" className='h-5 w-5 cursor-pointer' onClick={() => setShowModel(1)}/>
        <img src={showModel === 2 ? "images/circle_full.png" : "images/circle.png"} alt="circle" className='h-5 w-5 mx-2 cursor-pointer' onClick={() => setShowModel(2)}/>
        <img src={showModel === 3 ? "images/circle_full.png" : "images/circle.png"} alt="circle" className='h-5 w-5 cursor-pointer' onClick={() => setShowModel(3)}/>
      </section>
      <section className="px-6 py-6 bg-slate-200 md:rounded-b-xl" onClick={() => setShowDetails(!showDetails)}>
        <div className='flex'>
          <h3 className="text-xl text-gray-700 flex-1 font-semibold uppercase">{item.item.name}</h3>
          <p className="text-xl text-gray-900">{item.item.price}</p>
        </div>
        {showDetails &&
          <section className='pt-4'>
            <div className='flex justify-between'>
              <p className='font-semibold'>Colors:</p>
              <p>{item.item.color}</p>
            </div>
            <div className='flex justify-between'>
              <p className='font-semibold'>Details:</p>
              <p>{item.item.description}</p>
            </div>
          </section>
        }
      </section>
    </div>
  )
}
