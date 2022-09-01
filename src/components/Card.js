import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'

const Card = ({cname,imgsrc,title,desc}) => {

  const card = useRef(null)
  const tl = gsap.timeline({paused:true})
  const num = Math.floor(Math.random() * 11) - 5
  useEffect(() => {
    tl.to(card.current,{
      rotationZ:num,
      duration:0.5,
      ease:"power4",
    })
  })
  const hover = () => {
    tl.play()
  }
  const over = () => {
    tl.reverse()
  }

  return (
      <div ref={card} className={ cname += ' overflow-hidden bg-slate-200 '}  onMouseOver={() => hover()} onMouseLeave={() => over()}>
          <div className='flex flex-col'>
            <img src={imgsrc} className='h-[200px] w-[300px]' alt="img" />
            <div className='flex flex-col bg-black text-white p-3 '>
              <span className=' font-semibold'>
                {title}
              </span>
              <p className='text-xs font-light'>
                {desc}
              </p>
            </div>
          </div>
      </div>
  )
}

export default Card
